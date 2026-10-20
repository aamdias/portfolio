import { useRef, useState } from 'react';
import './article-audio.scss';

type ArticleAudioProps = {
  src: string;
  durationSeconds: number;
  label: string;
};

function formatTime(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(Math.floor(seconds % 60)).padStart(2, '0')}`;
}

export default function ArticleAudio({ src, durationSeconds, label }: ArticleAudioProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const [duration, setDuration] = useState(durationSeconds);
  const [position, setPosition] = useState(0);
  const action = failed ? 'Tentar ouvir novamente' : playing ? 'Pausar narração' : 'Ouvir artigo';

  function reportError() {
    setFailed(true);
    setPlaying(false);
    setLoading(false);
  }

  function togglePlayback() {
    const audio = audioRef.current;
    if (!audio) return;
    if (!audio.paused) {
      audio.pause();
      return;
    }
    // Assign the source on the first click to prevent any initial media request.
    if (!audio.getAttribute('src')) audio.src = src;
    if (failed) audio.load();
    if (audio.ended) audio.currentTime = 0;
    setFailed(false);
    setLoading(true);
    void audio.play().catch((error: unknown) => {
      if (error instanceof DOMException && error.name === 'AbortError') return;
      reportError();
    });
  }

  return (
    <section className="article-audio" aria-label={`Narração do artigo. ${label}`}>
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setPlaying(true)}
        onPause={() => {
          setPlaying(false);
          setLoading(false);
        }}
        onPlaying={() => setLoading(false)}
        onWaiting={() => setLoading(true)}
        onLoadedMetadata={(event) => {
          const seconds = event.currentTarget.duration;
          if (Number.isFinite(seconds) && seconds > 0) {
            setDuration(seconds);
          }
        }}
        onTimeUpdate={(event) => setPosition(event.currentTarget.currentTime)}
        onEnded={() => {
          setPlaying(false);
          setLoading(false);
        }}
        onError={reportError}
      />
      <button
        className="article-audio__toggle"
        type="button"
        onClick={togglePlayback}
        aria-label={action}
        title={`${action} · ${label} · ${formatTime(position)} / ${formatTime(duration)}`}
        aria-busy={loading}
      >
        <svg className="article-audio__ring" viewBox="0 0 48 48" fill="none" aria-hidden="true">
          <circle className="article-audio__track" cx="24" cy="24" r="23" />
          {position > 0 && (
            <circle
              className="article-audio__elapsed"
              cx="24"
              cy="24"
              r="23"
              pathLength="1"
              strokeDasharray="1"
              strokeDashoffset={1 - Math.min(position / duration, 1)}
            />
          )}
        </svg>
        {loading ? (
          <span className="article-audio__spinner" aria-hidden="true" />
        ) : (
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {failed ? (
              <path d="M12 4a8 8 0 1 1-7.45 10.92l1.86-.73A6 6 0 1 0 12 6H8.83l2.58 2.59L10 10 5 5l5-5 1.41 1.41L8.83 4H12Z" />
            ) : playing ? (
              <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
            ) : (
              <path d="M8 5v14l11-7z" />
            )}
          </svg>
        )}
      </button>
      <span className="article-audio__status" role="status">
        {failed ? 'Não foi possível reproduzir o áudio. Tente novamente.' : ''}
      </span>
    </section>
  );
}
