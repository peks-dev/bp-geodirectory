export function resetNotification(setShowNotification) {
  const timer = setTimeout(() => {
    setShowNotification(false);
  }, 3500);

  return () => {
    clearTimeout(timer);
  };
}
