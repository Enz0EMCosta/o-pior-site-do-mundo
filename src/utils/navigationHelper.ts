export const handlePresenterKeyDown = (
  event: KeyboardEvent,
  onToggleMode: () => void
) => {
  const target = event.target;
  if (event.repeat || event.isComposing || event.ctrlKey || event.altKey || event.metaKey) return;
  if (target instanceof HTMLElement &&
    (target.isContentEditable || target.closest('input, textarea, select'))) return;

  if (event.key.toLowerCase() === 'm') {
    onToggleMode();
  }
};
