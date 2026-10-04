import {
  Component,
  lazy,
  Suspense,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
  type ReactNode,
} from 'react';
import { Link, useParams } from 'react-router-dom';
import articles from '../../data/articles.json';
import ThemeToggle from '../../components/ThemeToggle';
import Navbar from '../../components/Navbar/navbar';
import Footer from '../../components/Footer/footer';
import NotFound from '../NotFound';
import { usePageTitle } from '../../hooks/usePageTitle';
import './article-page.scss';

const modules = import.meta.glob<{ default: ComponentType }>('../../mdx/*.mdx');
const articleComponents = Object.fromEntries(
  Object.entries(modules).map(([path, loader]) => [path, lazy(loader)]),
);
type Section = { id: string; label: string };

class ArticleErrorBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <p role="alert">
        Não foi possível carregar este artigo.{' '}
        <a className="inline-link" href={window.location.pathname}>
          Tentar novamente
        </a>
      </p>
    ) : (
      this.props.children
    );
  }
}

function ArticleBody({
  slug,
  onReady,
}: {
  slug: string;
  onReady: (element: HTMLDivElement) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Content = articleComponents[`../../mdx/${slug}.mdx`];
  useEffect(() => {
    if (ref.current) onReady(ref.current);
  }, [slug, onReady]);
  return (
    <div ref={ref} className="article-prose" id="introducao" data-sec="introducao">
      <Content />
    </div>
  );
}

export default function ArticlePage() {
  const { slug = '' } = useParams();
  return <ArticleExperience key={slug} slug={slug} />;
}

function ArticleExperience({ slug }: { slug: string }) {
  const article = articles.find((item) => item.slug === slug);
  usePageTitle(article?.title || 'Artigo não encontrado');
  const [sections, setSections] = useState<Section[]>([{ id: 'introducao', label: 'Introdução' }]);
  const [activeSection, setActiveSection] = useState('introducao');
  const [progress, setProgress] = useState(0);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const onReady = useMemo(
    () => (element: HTMLDivElement) => {
      contentRef.current = element;
      const nextSections = [{ id: 'introducao', label: 'Introdução' }];
      element.querySelectorAll('h2').forEach((heading, index) => {
        const id = `secao-${index + 1}`;
        heading.id = id;
        heading.setAttribute('data-sec', id);
        nextSections.push({ id, label: heading.textContent || '' });
      });
      element.querySelector('.post-layout > p')?.classList.add('article-lead');
      setSections(nextSections);
    },
    [],
  );
  useEffect(() => {
    let frame = 0;
    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.max(0, Math.min(1, window.scrollY / max)) : 0);
      let active = 'introducao';
      contentRef.current?.querySelectorAll('[data-sec]').forEach((element) => {
        if (element.getBoundingClientRect().top < 160)
          active = element.getAttribute('data-sec') || active;
      });
      setActiveSection(active);
    };
    const handleScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    const observer = new ResizeObserver(handleScroll);
    observer.observe(document.body);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    update();
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [slug, sections]);
  if (!article || !modules[`../../mdx/${slug}.mdx`])
    return (
      <div className="site-layout">
        <Navbar />
        <main id="main-content">
          <NotFound />
        </main>
        <Footer />
      </div>
    );
  const next = articles[(articles.indexOf(article) + 1) % articles.length];
  const remaining = Math.ceil(article.minutes * (1 - progress));
  const currentSection =
    sections.find((section) => section.id === activeSection)?.label || 'Introdução';
  function jumpTo(id: string) {
    const element = document.getElementById(id);
    if (element)
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 96,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
          ? 'instant'
          : 'smooth',
      });
  }
  return (
    <main className="article-page" id="main-content" tabIndex={-1}>
      <nav className="reading-bar" aria-label="Navegação do artigo">
        <div className="reading-bar__inner">
          <Link to="/artigos" className="reading-bar__back" aria-label="Voltar para artigos">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="m14.5 6-6 6 6 6" />
            </svg>
            <span>Alan Dias</span>
          </Link>
          <span className="reading-bar__section">{currentSection}</span>
          <div className="reading-bar__actions">
            <span>{remaining > 0 ? `${remaining} min restantes` : 'Fim'}</span>
            <ThemeToggle />
          </div>
        </div>
        <div
          className="reading-progress"
          style={{ transform: `scaleX(${progress})` }}
          role="progressbar"
          aria-label="Progresso de leitura"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </nav>
      <header className="article-opening">
        <span className="article-meta">
          <time dateTime={article.date}>{article.publishedDate}</time> · {article.minutes} min de
          leitura
        </span>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div className="author">
          <img src="/alan-nyc-1.png" width="32" height="32" alt="" />
          <span>Alan Dias</span>
        </div>
      </header>
      <div className="article-body-layout">
        <aside>
          <nav className="article-toc" aria-label="Neste artigo">
            <h2 className="label">Neste artigo</h2>
            {sections.map((section) => (
              <a
                href={`#${section.id}`}
                key={section.id}
                className={activeSection === section.id ? 'active' : ''}
                aria-current={activeSection === section.id ? 'location' : undefined}
                onClick={(event) => {
                  event.preventDefault();
                  jumpTo(section.id);
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </aside>
        <div className="article-body-column">
          <ArticleErrorBoundary key={slug}>
            <Suspense
              fallback={
                <p className="article-loading" role="status">
                  Carregando artigo…
                </p>
              }
            >
              <ArticleBody key={slug} slug={slug} onReady={onReady} />
            </Suspense>
          </ArticleErrorBoundary>
          <footer className="article-author-footer">
            <div className="author">
              <img src="/alan-nyc-1.png" width="48" height="48" alt="" />
              <span>Alan Dias</span>
            </div>
            <a
              href={article.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button-outline"
            >
              Ler no Medium ↗
            </a>
          </footer>
        </div>
        <div aria-hidden="true" />
      </div>
      <Link className="next-article" to={`/artigos/${next.slug}`}>
        <div>
          <span className="label">Próximo artigo</span>
          <h2>{next.title}</h2>
          <p>{next.description}</p>
          <span className="text-link">Continuar lendo →</span>
        </div>
      </Link>
    </main>
  );
}
