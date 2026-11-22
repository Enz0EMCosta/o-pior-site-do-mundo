import { useCallback, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiCalendar, FiChevronDown, FiClock, FiInstagram } from 'react-icons/fi';
import { GiAchievement, GiGamepad, GiMoon, GiSun, GiTreasureMap } from 'react-icons/gi';
import wallpaper from '../../assets/lawd-wallpaper.png';
import lightWallpaper from '../../assets/lawd-wallpaper-light.png';
import lau from '../../assets/mural/lau.jpg';
import enzo from '../../assets/mural/enzo.jpg';
import pp from '../../assets/mural/pp.jpg';
import leticia from '../../assets/mural/leticia.jpg';
import nicolas from '../../assets/mural/nicolas.jpg';
import gabriel from '../../assets/mural/gabriel.jpg';
import gyanineLauaneCover from '../../assets/programacao/gyanine-lauane.jpg';
import enzoPpCover from '../../assets/programacao/enzo-pp.jpg';
import semacCover from '../../assets/programacao/programacao-semac.jpg';
import portalCover from '../../assets/eventos/portal-ufs.jpg';
import simgradeCover from '../../assets/eventos/simgrade.jpg';
import selectionCover from '../../assets/eventos/processo-seletivo.jpg';
import expocompCover from '../../assets/eventos/expocomp.jpg';
import { course, courseDateLabel, mural } from '../../content/challengeData';
import { LawdHistory } from './LawdHistory';
import './sillyExperience.css';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const principles = [
  {
    icon: GiGamepad,
    title: 'Hierarquia visual',
    description: 'O horário confirmado aparece logo no início. As notícias e os recados ficam depois, onde você pode lê-los com calma.',
  },
  {
    icon: GiTreasureMap,
    title: 'Navegação previsível',
    description: 'Cada item do menu tem um destino claro. Você encontra os minicursos em Programação e o SIMGrade em Projetos.',
  },
  {
    icon: GiAchievement,
    title: 'Feedback claro',
    description: 'Ao acertar, você recebe uma confirmação com a data e o horário. A interface torna visível o resultado da sua ação.',
  },
];

const portraits = {
  Lau: { src: lau, position: '50% 34%' },
  Enzo: { src: enzo, position: '50% 23%' },
  PP: { src: pp, position: '36% 45%' },
  Leticia: { src: leticia, position: '50% 41%' },
  Nicolas: { src: nicolas, position: '50% 54%' },
  Gabriel: { src: gabriel, position: '50% 64%' },
};
const themeStorageKey = 'lawd-silly-theme';
const instagramPosts = [
  {
    title: 'Gyanine e Lauane',
    description: 'Primeiros passos e bastidores da web',
    cover: gyanineLauaneCover,
    url: 'https://www.instagram.com/p/Df5FmZPgWFo/?hvrq=YTlrZ3M3eWN2NHZy',
  },
  {
    title: 'Enzo e PP',
    description: 'O Pior Site do Mundo',
    cover: enzoPpCover,
    url: 'https://www.instagram.com/p/DfzoWIEFh5m/?hvrq=eXF6ZHNzZmF1cHkw',
  },
  {
    title: 'Programação SEMAC',
    description: 'Universidade sem Barreiras · 12ª SEMAC',
    cover: semacCover,
    url: 'https://www.instagram.com/p/DfsP--EgeZz/?knvt=a3E4aXJibHd1cHdy',
  },
];

const eventPosts = [
  {
    title: 'Novo Portal UFS',
    description: 'A nova experiência digital da universidade desenvolvida pela LAWD.',
    cover: portalCover,
    url: 'https://www.instagram.com/p/DYmstmRjtbp/?evlk=dXc2MTJvODkzb2xv',
  },
  {
    title: 'SIMGrade',
    description: 'Conheça o Sistema SIM e as ferramentas para planejar a graduação.',
    cover: simgradeCover,
    url: 'https://www.instagram.com/p/DbbcncyCcwY/?avpt=MXg5YWR4aXhueTFmOQ==',
  },
  {
    title: 'Dinâmica do processo seletivo',
    description: 'Veja como foi a dinâmica da seleção de 2026 da LAWD.',
    cover: selectionCover,
    height: 1440,
    url: 'https://www.instagram.com/p/DaoGa7qAT-B/?avpt=OXJtODBxbGoyZmZ2',
  },
  {
    title: 'LAWD na ExpoComp',
    description: 'Relembre os melhores momentos da participação da liga.',
    cover: expocompCover,
    url: 'https://www.instagram.com/p/DYKN51NDpyw/?dmpr=MTN2c2I0cjRoZnZhbg==',
  },
];

interface InstagramPost {
  title: string;
  description: string;
  cover: string;
  height?: number;
  url: string;
}

function InstagramCards({ posts, events = false }: { posts: InstagramPost[]; events?: boolean }) {
  return (
    <div className={`silly-grid silly-instagram${events ? ' silly-event-grid' : ''}`}>
      {posts.map(({ title, description, cover, height = 1350, url }) => (
        <a className="silly-social-card" href={url} key={url} target="_blank" rel="noreferrer" data-silly-card>
          <div className="silly-social-cover">
            <img src={cover} width={1080} height={height} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="silly-social-copy">
            <h3>{title}</h3>
            <p>{description}</p>
            <span><FiInstagram aria-hidden="true" /> Ver no Instagram (nova aba)</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export function SillyExperience({ onShowRetro }: { onShowRetro: () => void }) {
  const pageRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [historySeen, setHistorySeen] = useState(false);
  const unlockMural = useCallback(() => setHistorySeen(true), []);
  const [light, setLight] = useState(() => {
    try {
      return window.localStorage.getItem(themeStorageKey) === 'light';
    } catch {
      return false;
    }
  });

  function toggleTheme() {
    const next = !light;
    setLight(next);
    try {
      window.localStorage.setItem(themeStorageKey, next ? 'light' : 'dark');
    } catch {
      // The switch remains usable when browser storage is unavailable.
    }
  }

  useGSAP(() => {
    const page = pageRef.current;
    if (!page) return;

    titleRef.current?.focus({ preventScroll: true });
    const media = gsap.matchMedia();

    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.timeline({ defaults: { duration: 0.65, ease: 'power3.out' } })
        .from('.silly-banner-media', { scale: 1.06, opacity: 0.35, duration: 0.95 })
        .from('.silly-banner-copy > *', { y: 16, opacity: 0, stagger: 0.09 }, 0.28);

      page.querySelectorAll('[data-silly-reveal], [data-silly-card]').forEach((element) => {
        const grid = element.parentElement;
        const eventDelay = grid?.classList.contains('silly-event-grid')
          ? Array.from(grid.children).indexOf(element) * 0.07
          : 0;

        gsap.from(element, {
          y: 20,
          opacity: 0.55,
          duration: 0.65,
          delay: eventDelay,
          ease: 'power2.out',
          clearProps: 'opacity,transform',
          scrollTrigger: { trigger: element, scroller: page, start: 'top 92%', once: true },
        });
      });

    }, page);

    return () => media.revert();
  }, { scope: pageRef });

  return (
    <main className="silly-experience" data-layout="silly" data-theme={light ? 'light' : 'dark'} ref={pageRef}>
      <div id="silly-inicio" aria-hidden="true" />
      <header className="silly-header">
        <div className="silly-container silly-header-inner">
          <a className="silly-brand" href="#silly-inicio">LAWD <span>SEMAC 2026</span></a>
          <nav aria-label="Navegação do modo Silly">
            <a href="#programacao">Programação</a>
            <a href="#projetos">Projetos e eventos</a>
            <a href="#sobre">História da LAWD</a>
            <a href={historySeen ? '#mural' : '#sobre'} aria-label={historySeen ? undefined : 'Mural: veja primeiro a história da LAWD'}>Mural</a>
          </nav>
          <div className="silly-header-actions">
            <button className="silly-theme" type="button" role="switch" aria-checked={light} aria-label="Tema claro" onClick={toggleTheme}>
              {light ? <GiMoon aria-hidden="true" /> : <GiSun aria-hidden="true" />}
              <span>{light ? 'Apagar luz' : 'Acender luz'}</span>
            </button>
            <button className="silly-compare" type="button" onClick={onShowRetro}>
              Comparar com o blog <kbd title="Atalho de teclado">M</kbd>
            </button>
          </div>
        </div>
      </header>

      <section className="silly-banner" aria-labelledby="silly-title">
        <div className="silly-banner-media" role="img" aria-label="LAWD — Liga Acadêmica de Desenvolvimento Web">
          <img className="silly-artwork" src={wallpaper} width={1366} height={768} alt="" />
          <img className="silly-artwork silly-artwork-light" src={lightWallpaper} width={1672} height={940} alt="" />
        </div>
        <div className="silly-banner-copy">
          <h1 id="silly-title" tabIndex={-1} ref={titleRef}><GiGamepad aria-hidden="true" /> Modo Silly</h1>
          <a href="#experiencia" className="silly-banner-link">Explorar a experiência <FiChevronDown aria-hidden="true" /></a>
        </div>
      </section>

      <div className="silly-container">
        <section className="silly-hero" id="experiencia" aria-labelledby="silly-intro-title">
          <section className="silly-confirmation" aria-labelledby="silly-course" data-silly-card>
            <div className="silly-confirmation-copy">
              <GiAchievement aria-hidden="true" />
              <div>
                <p className="silly-kicker">Agenda confirmada · Minicurso fictício</p>
                <h2 id="silly-course">{course.title}</h2>
              </div>
            </div>
            <div className="silly-confirmation-details">
              <time dateTime={course.date}><FiCalendar aria-hidden="true" /> {course.weekday}, {courseDateLabel}</time>
              <time dateTime={course.time}><FiClock aria-hidden="true" /> {course.time}</time>
            </div>
          </section>
          <div className="silly-hero-copy">
            <h2 id="silly-intro-title" data-silly-reveal>Uma boa interface <em>clareia o caminho.</em></h2>
            <p>Você acabou de procurar três pistas em um blog caótico. Agora, veja como um front-end bem estruturado coloca a informação certa no lugar em que você espera encontrá-la.</p>
            <a className="silly-primary" href="#programacao">Ver programação</a>
          </div>
        </section>

        <section className="silly-section silly-lessons" aria-labelledby="silly-lessons-title">
          <h2 id="silly-lessons-title" data-silly-reveal>O que mudou na prática</h2>
          <div className="silly-grid">
            {principles.map(({ icon: Icon, title, description }) => (
              <article className="silly-principle" key={title} data-silly-card>
                <Icon aria-hidden="true" />
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="silly-section" id="programacao" aria-labelledby="programacao-titulo">
          <h2 id="programacao-titulo" data-silly-reveal>Programação da SEMAC</h2>
          <InstagramCards posts={instagramPosts} />
        </section>

        <section className="silly-section" id="projetos" aria-labelledby="projetos-titulo">
          <h2 id="projetos-titulo" data-silly-reveal>Projetos e eventos da LAWD</h2>
          <InstagramCards posts={eventPosts} events />
        </section>
      </div>

      <LawdHistory onReachEnd={unlockMural} />

      <div className="silly-container">
        <section className="silly-section" id="mural" aria-labelledby="silly-mural-title" aria-hidden={!historySeen} inert={!historySeen}>
          <h2 id="silly-mural-title" data-silly-reveal>Mural da oficina</h2>
          <p className="silly-mural-intro">Recados fictícios escritos para o desafio.</p>
          <ul className="silly-grid silly-messages">
            {mural.map(({ author, message }) => (
              <li className="silly-member" key={author} data-silly-card>
                <div className="silly-portrait">
                  <img src={portraits[author].src} style={{ objectPosition: portraits[author].position }} alt="" loading="lazy" decoding="async" />
                </div>
                <div className="silly-member-copy">
                  <h3>{author === 'Leticia' ? 'Letícia' : author}</h3>
                  <p>{message}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <footer className="silly-footer">
          <p>LAWD · Departamento de Computação · UFS</p>
          <a href="https://www.instagram.com/lawd.ufs/">Instagram da LAWD</a>
          <a href="#silly-inicio">Voltar ao topo</a>
        </footer>
      </div>
    </main>
  );
}
