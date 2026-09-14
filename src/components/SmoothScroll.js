export const handleSmoothScroll = (e, sectionId) => {
  e.preventDefault();
  const targetElement = document.getElementById(sectionId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' })
    window.history.pushState(null, '', sectionId);
  }
}