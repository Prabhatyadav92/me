/* Renders the page from js/data.js — you normally don't need to edit this file. */
const $ = (id) => document.getElementById(id);
function h(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; }

// Hero
$('hero-title').textContent = SITE.title;
$('tagline').textContent = SITE.tagline;
const rb = $('resume-btn'); rb.href = SITE.resume; rb.setAttribute('download', SITE.resumeDownloadName);
STATS.forEach(s => {
  const el = h(s.href ? 'a' : 'div', 'stat', `<b>${s.value}</b><span>${s.label}</span>`);
  if (s.href) { el.href = s.href; el.target = '_blank'; el.rel = 'noopener'; }
  $('stats').appendChild(el);
});

// About
$('about-text').innerHTML = SITE.about;

// Skills
Object.entries(SKILLS).forEach(([cat, items]) => {
  const b = h('div', 'skill-block', `<div class="skill-cat">${cat}</div>`);
  const row = h('div', 'chips');
  items.forEach(i => row.appendChild(h('span', 'chip', i)));
  b.appendChild(row); $('skills-list').appendChild(b);
});

// Projects
PROJECTS.forEach(p => {
  const c = h('div', 'project', '<div class="pin"></div>');
  c.appendChild(h('div', 'p-top', `<div class="p-name">${p.name}</div>${p.badge ? `<div class="badge">${p.badge}</div>` : ''}`));
  c.appendChild(h('p', 'p-desc', p.desc));
  if (p.terminal) c.appendChild(h('pre', 'term', '')).textContent = p.terminal;
  if (p.bullets) c.appendChild(h('ul', 'p-list', p.bullets.map(b => `<li>${b}</li>`).join('')));
  const bottom = h('div', 'p-bottom');
  bottom.appendChild(h('div', 'stack', p.stack.map(s => `<span class="st">${s}</span>`).join('')));
  bottom.appendChild(h('div', 'p-links', (p.links || []).map(l => `<a href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')));
  c.appendChild(bottom); $('projects-list').appendChild(c);
});

// Achievements
ACHIEVEMENTS.forEach(a => {
  $('ach-list').appendChild(h('div', 'ach-card',
    `<h3>${a.title}</h3><p>${a.text}</p>${a.link ? `<a href="${a.link.href}" target="_blank" rel="noopener">${a.link.label}</a>` : ''}`));
});

// Contact
$('contact-links').innerHTML = `
  <a href="mailto:${SITE.email}">✉ ${SITE.email}</a>
  <a href="tel:${SITE.phone.replace(/\s/g, '')}">☎ ${SITE.phone}</a>
  <a href="${SITE.github}" target="_blank" rel="noopener">⌥ ${SITE.github.replace('https://', '')}</a>
  <a href="${SITE.linkedin}" target="_blank" rel="noopener">in ${SITE.linkedin.replace('https://', '')}</a>
  <a href="${SITE.leetcode}" target="_blank" rel="noopener">{ } ${SITE.leetcode.replace('https://', '')}</a>`;
$('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  location.href = `mailto:${SITE.email}?subject=${encodeURIComponent('Portfolio contact from ' + f.name.value)}&body=${encodeURIComponent(f.message.value)}`;
});
$('footer').textContent = `© ${SITE.year} Prabhat Yadav`;

// AMA bot
function matchKB(t) {
  t = t.toLowerCase(); let best = null, score = 0;
  AMA.kb.forEach(e => { const n = e.k.filter(k => t.includes(k)).length; if (n > score) { score = n; best = e; } });
  return score ? best.r : AMA.fallback;
}
function bubble(html, cls) { const d = h('div', 'bubble ' + cls, html); const l = $('log'); l.appendChild(d); l.scrollTop = l.scrollHeight; }
function askBot(q) {
  const u = h('div'); u.textContent = q; bubble(u.innerHTML, 'user');
  setTimeout(() => bubble(matchKB(q), 'bot'), 450);
}
function sendChat() { const i = $('chat-input'), v = i.value.trim(); if (!v) return; askBot(v); i.value = ''; }
AMA.examples.forEach(q => { const s = h('span', '', `"${q}"`); s.onclick = () => askBot(q); $('examples').appendChild(s); });
$('chat-send').onclick = sendChat;
$('chat-input').addEventListener('keydown', e => { if (e.key === 'Enter') sendChat(); });
