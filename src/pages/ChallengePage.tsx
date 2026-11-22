import { useEffect, useRef, useState, type FormEvent } from 'react';
import { archive, course, courseDateLabel, mural } from '../content/challengeData';
import { SillyExperience } from './modes/SillyExperience';
import './challenge.css';

interface ChallengePageProps {
  isSilly: boolean;
  completed: boolean;
  onComplete: () => void;
  onShowRetro: () => void;
}

export function ChallengePage({ isSilly, completed, onComplete, onShowRetro }: ChallengePageProps) {
  const pageRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [incorrect, setIncorrect] = useState(false);

  useEffect(() => {
    pageRef.current?.scrollTo(0, 0);
    titleRef.current?.focus({ preventScroll: true });
  }, [isSilly]);

  function submitSchedule(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const answer = new FormData(event.currentTarget);
    if (answer.get('date') !== course.date || answer.get('weekday') !== course.weekday || answer.get('time') !== course.time) {
      setIncorrect(true);
      return;
    }

    dialogRef.current?.close();
    onComplete();
  }

  if (isSilly) return <SillyExperience onShowRetro={onShowRetro} />;

  return (
    <main className="challenge" data-layout="retro" ref={pageRef}>
      <div className="challenge-sheet" id="inicio-blog">
        <header className="challenge-header">
          <p>★ SEMAC 2026 ★ UFS ★ LAWD ★ ATUALIZADO!!! ★</p>
          <h1 ref={titleRef} tabIndex={-1}>
            !!! BLOG DA SEMAC 2026 !!!
          </h1>
          {completed ? (
            <p>Veja como o mesmo conteúdo muda quando a navegação tem rótulos claros.</p>
          ) : (
            <p>Encontre a data, o dia da semana e o horário do minicurso fictício <strong>{course.title}</strong>. Depois, localize o pop-up para confirmar.</p>
          )}
        </header>

        {completed && (
          <section className="challenge-complete" aria-label="Resultado do desafio">
            <h2>Horário confirmado</h2>
            <p>{course.title} · {course.weekday}, <time dateTime={`${course.date}T${course.time}`}>{courseDateLabel} às {course.time}</time>.</p>
            <p>Pressione M ou <button className="challenge-popup-button" type="button" onClick={onComplete}>volte à versão organizada</button>.</p>
          </section>
        )}

        <div className="challenge-columns">
          <aside className="challenge-sidebar">
            <nav aria-label="Seções do blog">
              <h2>Menu</h2>
              <a href="#arquivo-blog">Arquivo de posts</a>
              <a href="#mural-blog">Mural de recados</a>
              <a href="#links-blog">Links favoritos</a>
            </nav>
            <section id="mural-blog">
              <h2>!! MURAL !!</h2>
              <p className="mural-note">Recados fictícios da oficina</p>
              <ul className="mural-messages">
                {mural.map(({ author, message, target, label }) => (
                  <li key={author}>
                    <p><b>{author}:</b> {message}</p>
                    {target && <a href={`#${target}`}>{label}</a>}
                  </li>
                ))}
              </ul>
            </section>
            <section id="links-blog">
              <h2>Links favoritos</h2>
              <a href="#minicurso-power-bi">Achei no laboratório C1</a>
              <a href="#semac-2026">Programação</a>
              <a href="#minicurso-paleosergipe">Programação</a>
              <a href="#minicurso-estatistica">Programação</a>
              <a href="#selecao-lawd">Seleção encerrada · arquivo</a>
              <a href="#sobre-a-lawd">Quem fez isso?</a>
              <a href="https://www.instagram.com/lawd.ufs/" target="_blank" rel="noreferrer">Instagram da LAWD (nova aba)</a>
            </section>
          </aside>

          <div className="challenge-feed">
            <section id="arquivo-blog">
              <h2>Arquivo de posts</h2>
              {archive.map((post) => (
                <article key={post.id} id={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.text}</p>
                  <details>
                    <summary>Ler mais</summary>
                    <p>{post.extra}</p>
                    <a href={post.source} target="_blank" rel="noreferrer">Consultar fonte (nova aba)</a>
                  </details>
                </article>
              ))}
            </section>

            <section className="challenge-schedule" id="quadro-horarios">
              <h2>ARQUIVO: SOBRAS DO PROJETOR</h2>
              <details>
                <summary>Conferir reserva de equipamento</summary>
                <p>O horário de início da oficina {course.title} é {course.time}. Anote a hora de início antes de fechar este bloco.</p>
              </details>
            </section>
          </div>

          <aside className="challenge-extras" aria-label="Extras do blog">
            <section>
              <h2>Enquete</h2>
              <p>Qual seção você abriu primeiro?</p>
              <details><summary>Os posts</summary><p>O arquivo mistura notícias da semana com minicursos.</p></details>
              <details><summary>O mural</summary><p>Os recados mais recentes estão na outra coluna.</p></details>
              {!completed && (
                <details>
                  <summary>Ferramentas do blog</summary>
                  <button className="challenge-popup-button" type="button" onClick={() => dialogRef.current?.showModal()}>
                    Conferir agenda da oficina
                  </button>
                </details>
              )}
            </section>
            <section id="pasta-antiga">
              <h2>PASTA ANTIGA [ABRIR]</h2>
              <details>
                <summary>Folha corrigida · oficina fictícia</summary>
                <p>A data de {course.title} é <time dateTime={course.date}>{courseDateLabel}</time>.</p>
              </details>
            </section>
            <section>
              <h2>Bloco de notas da oficina</h2>
              <details>
                <summary>Abrir anotação</summary>
                <p>Que rótulo fez você clicar? Em que momento você soube se o clique deu certo?</p>
              </details>
            </section>
          </aside>
        </div>
        <footer><a href="#inicio-blog">Voltar ao topo</a></footer>
      </div>
      {!completed && (
        <dialog className="challenge-dialog" ref={dialogRef} aria-labelledby="agenda-dialog-title">
          <h2 id="agenda-dialog-title">Conferir agenda da oficina</h2>
          <p>{course.title} · minicurso fictício</p>
          <form onSubmit={submitSchedule} onChange={() => setIncorrect(false)}>
            <label>Data <input type="date" name="date" min="2026-11-23" max="2026-11-28" required /></label>
            <label>
              Dia da semana
              <select name="weekday" defaultValue="" required>
                <option value="" disabled>Escolha o dia</option>
                {['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'].map((day) => (
                  <option key={day}>{day}</option>
                ))}
              </select>
            </label>
            <label>Horário de início <input name="time" type="time" required /></label>
            {incorrect && <p role="alert">A combinação não confere. Revise as pistas e tente de novo.</p>}
            <div className="challenge-dialog-actions">
              <button type="submit">Confirmar horário</button>
              <button type="button" onClick={() => dialogRef.current?.close()}>Voltar ao blog</button>
            </div>
          </form>
        </dialog>
      )}
    </main>
  );
}
