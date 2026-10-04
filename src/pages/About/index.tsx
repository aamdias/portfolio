import ContactActions from '../../components/ContactActions';
import { usePageTitle } from '../../hooks/usePageTitle';
import './about.scss';
export default function About() {
  usePageTitle('Sobre');
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Sobre</h1>
      </header>
      <div className="about-bio">
        <img src="/alan-nyc-1.png" alt="Alan Dias em Nova York" width="340" height="340" />
        <div>
          <p>
            Me chamo Alan, sou natural de Fortaleza, CE, e atuo construindo a{' '}
            <a
              className="inline-link"
              href="https://vetto.ai"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vetto AI
            </a>
            , onde desenvolvemos sistemas para avaliar e melhorar modelos e aplicações de
            inteligência artificial.
          </p>
          <p>
            Sou formado no ITA e tenho mais de 5 anos de experiência construindo produtos digitais
            em startups em que a tecnologia é alavanca para resultados.
          </p>
          <p>
            Moro em Campinas, SP. Quando não estou construindo produtos, provavelmente estou com
            pessoas queridas, tocando música, praticando tênis ou corrida, estudando ou viajando.
          </p>
        </div>
      </div>
      <section className="about-contact">
        <div>
          <h2 className="label">Trabalhe comigo</h2>
          <h3>
            Quer ajuda para construir produtos digitais? Trabalho com serviços personalizados.
          </h3>
          <p>
            Já atuei como Product Advisor de startups early stage, mentorei PMs em diferentes
            momentos de carreira e fiz revisões de produto com foco em UX e resultado de negócio. Se
            você tem um desafio de produto, carreira ou estratégia, me chama para conversar.
          </p>
        </div>
        <ContactActions />
      </section>
    </div>
  );
}
