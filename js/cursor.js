/* Football cursor. Change the options below — nothing else needs editing.
   style: 'auto' (changes with what you hover) or one of:
          'ball' 'trail' 'kick' 'glow' 'fire' 'grass' 'ring' 'bounce'
   base : the look used in 'auto' mode when not hovering anything special
   switcher: true shows a small button (bottom-right) to try each style */
const CURSOR = { style: 'auto', base: 'trail', switcher: true };

(function () {
  if (!matchMedia('(pointer:fine)').matches) return;          // phones/tablets keep normal touch
  const STYLES = ['auto', 'ball', 'trail', 'kick', 'glow', 'fire', 'grass', 'ring', 'bounce'];
  let mode = CURSOR.style;
  try { mode = localStorage.getItem('fb-style') || mode; } catch (e) {}
  if (!STYLES.includes(mode)) mode = 'auto';

  const BALL = '<svg viewBox="0 0 32 32"><defs><clipPath id="fbc"><circle cx="16" cy="16" r="15"/></clipPath></defs>' +
    '<circle cx="16" cy="16" r="15" fill="#fff"/><g clip-path="url(#fbc)" fill="#151515" stroke="#151515" stroke-width="1.1" stroke-linejoin="round">' +
    '<polygon points="16,10.2 21.5,14.2 19.4,20.6 12.6,20.6 10.5,14.2"/>' +
    '<path d="M16 10.2V3M21.5 14.2l6.6-2.3M19.4 20.6l4 5.6M12.6 20.6l-4 5.6M10.5 14.2l-6.6-2.3" fill="none"/>' +
    '<circle cx="16" cy="1.5" r="3.4"/><circle cx="30.3" cy="11.8" r="3.4"/><circle cx="24.8" cy="28.6" r="3.4"/><circle cx="7.2" cy="28.6" r="3.4"/><circle cx="1.7" cy="11.8" r="3.4"/></g>' +
    '<circle cx="16" cy="16" r="14.8" fill="none" stroke="#151515" stroke-width="1.4"/></svg>';

  const root = document.createElement('div'); root.id = 'fb';
  root.innerHTML = '<div class="fb-txt"></div><div class="fb-ring"></div><div class="fb-streak"></div><div class="fb-ball">' + BALL + '</div><div class="fb-plus">+</div>';
  document.body.appendChild(root);
  document.documentElement.classList.add('fb-on');
  const ball = root.querySelector('.fb-ball'), streak = root.querySelector('.fb-streak');

  let mx = -100, my = -100, x = -100, y = -100, lx = 0, ly = 0, rot = 0, phase = 0, eff = 'ball', dragging = false, target = null;

  function effective() {
    if (dragging) return 'drag';
    if (mode !== 'auto') return mode;
    const t = target;
    if (t && t.closest) {
      if (t.closest('input,textarea')) return 'text';
      if (t.closest('.project')) return 'fire';
      if (t.closest('button,.btn,.send,.fb-switch,.ex span')) return 'kick';
      if (t.closest('a')) return 'ring';
    }
    return CURSOR.base;
  }
  function particle(cls, px, py, dx, dy) {
    const p = document.createElement('div'); p.className = 'fb-p ' + cls;
    p.style.transform = 'translate(' + px + 'px,' + py + 'px)';
    if (dx !== undefined) { p.style.setProperty('--dx', dx + 'px'); p.style.setProperty('--dy', dy + 'px'); }
    p.addEventListener('animationend', () => p.remove());
    document.body.appendChild(p);
  }

  addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; target = e.target; root.classList.add('show'); });
  document.addEventListener('mouseleave', () => root.classList.remove('show'));
  addEventListener('mousedown', () => { dragging = true; });
  addEventListener('mouseup', () => { dragging = false; });

  (function loop() {
    x += (mx - x) * 0.28; y += (my - y) * 0.28;
    const vx = x - lx, vy = y - ly, speed = Math.hypot(vx, vy);
    rot += vx * 1.4; phase += speed * 0.06;
    eff = effective(); root.dataset.m = eff;
    const bounce = eff === 'bounce' ? -Math.abs(Math.sin(phase)) * 16 : 0;
    root.style.transform = 'translate(' + x + 'px,' + y + 'px)';
    ball.style.transform = 'translateY(' + bounce + 'px) rotate(' + rot + 'deg)';

    if (eff === 'kick') {
      const w = Math.min(speed * 7, 90);
      streak.style.width = w + 'px'; streak.style.marginLeft = -w + 'px';
      streak.style.transform = 'rotate(' + Math.atan2(vy, vx) * 180 / Math.PI + 'deg)';
    }
    if (speed > 3) {
      if (eff === 'trail') particle('ghost', x, y);
      if (eff === 'grass') for (let i = 0; i < 2; i++) particle('leaf', x + (Math.random() - .5) * 14, y + 8 + Math.random() * 6, (Math.random() - .5) * 30 - vx * 3, 10 + Math.random() * 18);
      if (eff === 'fire') for (let i = 0; i < 2; i++) particle('flame', x + (Math.random() - .5) * 8, y + (Math.random() - .5) * 8, -vx * 2.5 + (Math.random() - .5) * 14, -vy * 2.5 - 8 - Math.random() * 10);
    }
    lx = x; ly = y;
    requestAnimationFrame(loop);
  })();

  if (CURSOR.switcher) {
    const b = document.createElement('button'); b.className = 'fb-switch'; b.type = 'button';
    const label = () => '⚽ style: ' + mode;
    b.textContent = label();
    b.onclick = () => {
      mode = STYLES[(STYLES.indexOf(mode) + 1) % STYLES.length]; b.textContent = label();
      try { localStorage.setItem('fb-style', mode); } catch (e) {}
    };
    document.body.appendChild(b);
  }
})();
