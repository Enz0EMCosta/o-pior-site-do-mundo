import { useState, useEffect } from 'react';
import { introSlideData } from '../content/slidesData';
import { handlePresenterKeyDown } from '../utils/navigationHelper';
import { SillyIntroMode } from './modes/SillyIntroMode';
import { ChallengePage } from './ChallengePage';

export function IntroSlide() {
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isSilly, setIsSilly] = useState(false);

  useEffect(() => {
    if (!completed) return;

    const onKeyDown = (event: KeyboardEvent) =>
      handlePresenterKeyDown(event, () => setIsSilly((current) => !current));
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [completed]);

  if (!started) {
    return (
      <SillyIntroMode
        content={introSlideData}
        onStart={() => setStarted(true)}
      />
    );
  }

  return (
    <ChallengePage
      isSilly={isSilly}
      completed={completed}
      onShowRetro={() => setIsSilly(false)}
      onComplete={() => {
        setCompleted(true);
        setIsSilly(true);
      }}
    />
  );
}
