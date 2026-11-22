import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import type { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { historyEntries } from '../../content/lawdHistoryData';
import './lawdHistory.css';

export function LawdHistory({ onReachEnd }: { onReachEnd: () => void }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLOListElement>(null);
  const triggerRef = useRef<ScrollTrigger | null>(null);

  useGSAP(() => {
    const stage = stageRef.current;
    const strip = scrollRef.current;
    const track = trackRef.current;
    const page = stage?.closest<HTMLElement>('.silly-experience');
    if (!stage || !strip || !track || !page) return;

    const distance = () => track.offsetWidth - strip.clientWidth;
    const media = gsap.matchMedia();
    media.add('(prefers-reduced-motion: no-preference) and (min-height: 600px)', () => {
      strip.scrollLeft = 0;
      stage.dataset.pinned = 'true';

      const timeline = gsap.timeline({
        onUpdate(this: gsap.core.Timeline) {
          if (this.time() >= 1) onReachEnd();
        },
        scrollTrigger: {
          trigger: stage,
          scroller: page,
          start: 'top top',
          end: () => `+=${Math.max(distance() * 0.65, strip.clientWidth)}`,
          pin: true,
          scrub: 0.25,
          invalidateOnRefresh: true,
        },
      });

      timeline.to(track, { x: () => -distance(), duration: 1, ease: 'none' });
      timeline.to({}, { duration: 0.12 });
      triggerRef.current = timeline.scrollTrigger ?? null;

      return () => {
        triggerRef.current = null;
        delete stage.dataset.pinned;
      };
    });

    return () => media.revert();
  }, { scope: stageRef });

  function scrollHistory(direction: number) {
    const strip = scrollRef.current;
    if (!strip) return;

    const trigger = triggerRef.current;
    const track = trackRef.current;
    if (trigger && track) {
      const distance = track.offsetWidth - strip.clientWidth;
      const step = strip.clientWidth * 0.65 / distance * (trigger.end - trigger.start) / 1.12;
      const current = gsap.utils.clamp(trigger.start, trigger.end, trigger.scroll());
      const top = gsap.utils.clamp(trigger.start, trigger.end, current + step * direction);
      strip.closest('.silly-experience')?.scrollTo({ top, behavior: 'smooth' });
    } else {
      strip.scrollBy({ left: strip.clientWidth * 0.65 * direction });
    }
  }

  return (
    <section className="silly-section lawd-history" id="sobre" aria-labelledby="lawd-history-title">
      <div className="silly-container lawd-history-intro">
        <div>
          <p className="silly-kicker">LAWD Docs</p>
          <h2 id="lawd-history-title" data-silly-reveal>A história da LAWD</h2>
          <p id="lawd-history-hint">Percorra a história até o fim para abrir o mural. Use a rolagem ou as setas.</p>
        </div>
      </div>

      <div className="lawd-history-stage" ref={stageRef}>
        <div className="lawd-history-controls">
          <button type="button" aria-label="Rolar a história para a esquerda" aria-controls="lawd-history-strip" onClick={() => scrollHistory(-1)}>
            <FiChevronLeft aria-hidden="true" />
          </button>
          <button type="button" aria-label="Rolar a história para a direita" aria-controls="lawd-history-strip" onClick={() => scrollHistory(1)}>
            <FiChevronRight aria-hidden="true" />
          </button>
        </div>
        <div
          className="lawd-history-strip"
          id="lawd-history-strip"
          aria-labelledby="lawd-history-title"
          aria-describedby="lawd-history-hint"
          role="region"
          tabIndex={0}
          ref={scrollRef}
          onKeyDown={(event) => {
            if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;

            event.preventDefault();
            scrollHistory(event.key === 'ArrowLeft' ? -1 : 1);
          }}
          onScroll={({ currentTarget }) => {
            if (!triggerRef.current && currentTarget.scrollLeft + currentTarget.clientWidth >= currentTarget.scrollWidth - 2) {
              onReachEnd();
            }
          }}
        >
          <ol className="lawd-history-track" ref={trackRef}>
            {historyEntries.map(({ id, milestone, title, text, extra, image, width, height, alt }) => (
              <li className="lawd-history-entry" key={id} id={id}>
                <div className="lawd-history-copy">
                  <p className="silly-kicker">{milestone}</p>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {extra && <p>{extra}</p>}
                </div>
                <figure className="lawd-history-art" data-format={width > height ? 'landscape' : 'portrait'}>
                  <img src={image} width={width} height={height} alt={alt} loading="lazy" decoding="async" />
                </figure>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
