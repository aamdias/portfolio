import { useState } from 'react';
import { links } from '../../data/links';
import { usePageTitle } from '../../hooks/usePageTitle';
import './agenda.scss';
export default function Agenda() {
  usePageTitle('Agenda');
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="container page-content">
      <header className="page-heading">
        <h1>Agenda</h1>
        <p>Horários disponíveis para uma conversa. Aceito somente após contato prévio.</p>
      </header>
      <div className="agenda-layout">
        <aside className="agenda-sidebar">
          <div className="author">
            <img src="/alan-nyc-1.png" width="48" height="48" alt="" />
            <span>Alan Dias</span>
          </div>
          <section>
            <h2 className="label">Antes de agendar</h2>
            <p>Me manda uma mensagem contando o contexto da conversa. Assim chego preparado.</p>
            <a
              className="inline-link"
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conversar no WhatsApp →
            </a>
          </section>
          <a className="text-link" href={links.calendar} target="_blank" rel="noopener noreferrer">
            Abrir agenda em nova aba ↗
          </a>
        </aside>
        <div className="calendar-card">
          {!loaded && (
            <p className="calendar-loading" role="status">
              Carregando horários…
            </p>
          )}
          <iframe
            src={links.calendarEmbed}
            title="Horários disponíveis na agenda de Alan Dias"
            onLoad={() => setLoaded(true)}
          />
        </div>
      </div>
    </div>
  );
}
