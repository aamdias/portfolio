import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { bookmarks, categories, type Bookmark } from '../../data/bookmarks';
import { usePageTitle } from '../../hooks/usePageTitle';
import './bookmarks.scss';

const typeLabels: Record<Bookmark['type'], string> = {
  book: 'Livro',
  podcast: 'Podcast',
  article: 'Artigo',
  video: 'Vídeo',
  website: 'Site',
};
const normalize = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

export default function BookmarksPage() {
  usePageTitle('Bookmarks');
  const { hash } = useLocation();
  const navigate = useNavigate();
  const category = categories.some((item) => `#${item.id}` === hash) ? hash.slice(1) : 'all';
  const [query, setQuery] = useState('');
  const [focused, setFocused] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      const target = event.target;
      const editing =
        target instanceof HTMLElement &&
        (target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName));
      if (event.key === '/' && !editing && !event.metaKey && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        searchRef.current?.focus();
      }
      if (event.key === 'Escape' && document.activeElement === searchRef.current) {
        setQuery('');
        searchRef.current?.blur();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, []);
  const term = query.trim();
  const filtered = bookmarks.filter(
    (item) =>
      (category === 'all' || item.category === category) &&
      normalize(`${item.title} ${item.description} ${typeLabels[item.type]}`).includes(
        normalize(term),
      ),
  );
  const groups = term
    ? [{ id: 'search', label: `Resultados para “${term}”`, description: '', items: filtered }]
    : categories
        .filter((item) => category === 'all' || item.id === category)
        .map((item) => ({
          ...item,
          items: filtered.filter((bookmark) => bookmark.category === item.id),
        }));
  const selectCategory = (id: string) =>
    navigate({ pathname: '/bookmarks', hash: id === 'all' ? '' : `#${id}` }, { replace: true });
  function clearFilters() {
    setQuery('');
    selectCategory('all');
  }
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Bookmarks</h1>
        <p>
          Textos, vídeos, livros e sites que já consumi e recomendo, sobre produto, negócios, design
          e IA.
        </p>
      </header>
      <div className="bookmarks-layout">
        <aside className="bookmarks-sidebar">
          <div>
            <div className="bookmark-search">
              <label htmlFor="bookmark-search" className="sr-only">
                Buscar bookmarks
              </label>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.7"
                aria-hidden="true"
              >
                <circle cx="10.5" cy="10.5" r="6.5" />
                <path d="m16 16 4 4" />
              </svg>
              <input
                id="bookmark-search"
                ref={searchRef}
                type="search"
                placeholder="Buscar bookmarks"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
              />
              {query ? (
                <button
                  type="button"
                  aria-label="Limpar busca"
                  onClick={() => {
                    setQuery('');
                    searchRef.current?.focus();
                  }}
                >
                  ×
                </button>
              ) : (
                !focused && <kbd>/</kbd>
              )}
            </div>
            <span className="search-results" role="status" aria-live="polite">
              {term && `${filtered.length} ${filtered.length === 1 ? 'resultado' : 'resultados'}`}
            </span>
          </div>
          <nav className="bookmark-categories" aria-label="Categorias de bookmarks">
            {[{ id: 'all', label: 'Todos' }, ...categories].map((item) => (
              <button
                key={item.id}
                aria-pressed={category === item.id}
                className={category === item.id ? 'active' : ''}
                onClick={() => selectCategory(item.id)}
              >
                {item.label}
                <span>
                  {
                    bookmarks.filter(
                      (bookmark) => item.id === 'all' || bookmark.category === item.id,
                    ).length
                  }
                </span>
              </button>
            ))}
          </nav>
        </aside>
        <div className="bookmark-groups">
          {filtered.length ? (
            groups
              .filter((group) => group.items.length)
              .map((group) => (
                <section key={group.id}>
                  <h2>{group.label}</h2>
                  {group.description && (
                    <p className="bookmark-group-description">{group.description}</p>
                  )}
                  {group.items.map((bookmark) => (
                    <a
                      className="bookmark-row"
                      href={bookmark.url}
                      key={bookmark.id}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={`https://www.google.com/s2/favicons?domain=${new URL(bookmark.url).hostname}&sz=32`}
                        width="16"
                        height="16"
                        alt=""
                        loading="lazy"
                        onError={(event) => {
                          event.currentTarget.style.visibility = 'hidden';
                        }}
                      />
                      <span className="bookmark-row__title">{bookmark.title}</span>
                      <span className="bookmark-row__type">{typeLabels[bookmark.type]}</span>
                      <span className="bookmark-row__description">{bookmark.description}</span>
                    </a>
                  ))}
                </section>
              ))
          ) : (
            <div className="bookmark-empty">
              <p>Nenhum bookmark encontrado.</p>
              <button className="button-outline" onClick={clearFilters}>
                Limpar filtros
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
