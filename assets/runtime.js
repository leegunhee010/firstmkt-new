
document.addEventListener('DOMContentLoaded', () => {
  // 스크롤 리빌: motion-wrapper 에 is-animated 부여
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('is-animated'); io.unobserve(e.target); }
    }
  }, { threshold: 0.15 });
  document.querySelectorAll('.motion-wrapper').forEach(el => io.observe(el));
  // 비디오 자동재생 (탭이 가려져 있으면 표시될 때 재시도)
  const playAll = () => document.querySelectorAll('video').forEach(v => {
    v.muted = true; v.autoplay = true; v.setAttribute('playsinline', '');
    if (v.paused) { const p = v.play(); if (p) p.catch(() => {}); }
  });
  playAll();
  document.addEventListener('visibilitychange', playAll);
  window.addEventListener('scroll', playAll, { once: true });
});
