(function () {
  // 1. Inject V2 Slender Holy Cross-Sword SVG Cursor on desktop fine-pointer devices
  const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;
  if (supportsFinePointer) {
    const glow = document.createElement("div");
    glow.className = "cursor-glow";
    glow.setAttribute("aria-hidden", "true");

    const sword = document.createElement("div");
    sword.className = "cursor-sword";
    sword.setAttribute("aria-hidden", "true");
    sword.innerHTML = `
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bladeL" x1="3.5" y1="3.5" x2="41.5" y2="41.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#fcffff"/><stop offset="30%" stop-color="#e2eef6"/>
            <stop offset="48%" stop-color="#feffff"/><stop offset="76%" stop-color="#c6d6e2"/>
            <stop offset="100%" stop-color="#e8f2f8"/>
          </linearGradient>
          <linearGradient id="bladeR" x1="3.5" y1="3.5" x2="41.5" y2="41.5" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#c0d2e0"/><stop offset="34%" stop-color="#7690a2"/>
            <stop offset="56%" stop-color="#a4baca"/><stop offset="82%" stop-color="#627c90"/>
            <stop offset="100%" stop-color="#849cae"/>
          </linearGradient>
          <linearGradient id="guardTop" x1="33" y1="50" x2="50" y2="33" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f5fafe"/><stop offset="52%" stop-color="#f8fcff"/><stop offset="100%" stop-color="#ecf4fa"/>
          </linearGradient>
          <linearGradient id="guardBot" x1="33" y1="50" x2="50" y2="33" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#8ea4b4"/><stop offset="52%" stop-color="#9eb2c2"/><stop offset="100%" stop-color="#7c92a2"/>
          </linearGradient>
          <linearGradient id="hiltGrad" x1="45" y1="51" x2="51" y2="45" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#364856"/><stop offset="45%" stop-color="#182630"/><stop offset="100%" stop-color="#0e1820"/>
          </linearGradient>
          <linearGradient id="pomL" x1="53" y1="53" x2="58" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#f8fcff"/><stop offset="100%" stop-color="#bccedc"/>
          </linearGradient>
          <linearGradient id="pomR" x1="53" y1="53" x2="58" y2="58" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#94aaba"/><stop offset="100%" stop-color="#586e80"/>
          </linearGradient>
        </defs>
        <g transform="translate(3.5 3.5) rotate(-45)">
          <polygon points="0,0 -2.0,7.5 -1.75,53.5 0,53.5" fill="url(#bladeL)"/>
          <polygon points="0,0 2.0,7.5 1.75,53.5 0,53.5" fill="url(#bladeR)"/>
          <line x1="0" y1="1.5" x2="0" y2="51" stroke="#ffffff" stroke-opacity="0.88" stroke-width="0.45"/>
          <line class="sword-energy" x1="0" y1="12.5" x2="0" y2="47.5" stroke-width="0.65" stroke-linecap="round"/>
          <polygon points="0,0 2.0,7.5 1.75,53.5 0,55.0 -1.75,53.5 -2.0,7.5" stroke="#1c2e3c" stroke-width="0.85" stroke-linejoin="round"/>
          <line x1="-1.9" y1="51.2" x2="1.9" y2="51.2" stroke="#d4b878" stroke-width="1.0"/>
          <polygon points="-1.2,56.2 1.2,56.2 0.95,70.8 -0.95,70.8" fill="url(#hiltGrad)" stroke="#16242e" stroke-width="0.8"/>
          <line x1="-1.15" y1="58.6" x2="1.15" y2="59.8" stroke="#d4b878" stroke-width="0.72"/>
          <line x1="-1.10" y1="61.6" x2="1.10" y2="62.8" stroke="#d4b878" stroke-width="0.72"/>
          <line x1="-1.05" y1="64.6" x2="1.05" y2="65.8" stroke="#d4b878" stroke-width="0.72"/>
          <line x1="-1.00" y1="67.6" x2="1.00" y2="68.8" stroke="#d4b878" stroke-width="0.72"/>
          <polygon points="-12.2,53.8 -10.2,52.0 -8.3,52.7 -2.8,52.5 0,50.8 2.8,52.5 8.3,52.7 10.2,52.0 12.2,53.8" fill="url(#guardTop)"/>
          <polygon points="-12.2,53.8 -10.2,55.6 -8.3,54.9 -2.8,55.1 0,56.8 2.8,55.1 8.3,54.9 10.2,55.6 12.2,53.8" fill="url(#guardBot)"/>
          <line x1="-11.4" y1="53.8" x2="11.4" y2="53.8" stroke="#304656" stroke-opacity="0.72" stroke-width="0.5"/>
          <line x1="-9.2" y1="53.8" x2="-3.2" y2="53.8" stroke="#d4b878" stroke-width="0.9"/>
          <line x1="3.2" y1="53.8" x2="9.2" y2="53.8" stroke="#a88a52" stroke-width="0.9"/>
          <line x1="-8.3" y1="52.7" x2="-8.3" y2="54.9" stroke="#d4b878" stroke-width="0.85"/>
          <line x1="8.3" y1="52.7" x2="8.3" y2="54.9" stroke="#a88a52" stroke-width="0.85"/>
          <polygon points="-12.2,53.8 -10.2,52.0 -8.3,52.7 -2.8,52.5 0,50.8 2.8,52.5 8.3,52.7 10.2,52.0 12.2,53.8 10.2,55.6 8.3,54.9 2.8,55.1 0,56.8 -2.8,55.1 -8.3,54.9 -10.2,55.6" stroke="#1c2e3c" stroke-width="0.85" stroke-linejoin="round"/>
          <polygon points="0,51.6 2.1,53.8 0,56.0 -2.1,53.8" fill="#d4b878" stroke="#2a3842" stroke-width="0.55"/>
          <polygon class="sword-gem" points="0,52.3 1.45,53.8 0,55.3 -1.45,53.8"/>
          <polygon points="0,52.7 0.72,53.8 0,54.9 -0.72,53.8" fill="#eefdff"/>
          <polygon points="0,69.8 -2.5,73.0 0,77.2" fill="url(#pomL)"/>
          <polygon points="0,69.8 2.5,73.0 0,77.2" fill="url(#pomR)"/>
          <polygon points="0,69.8 2.5,73.0 0,77.2 -2.5,73.0" stroke="#1c2e3c" stroke-width="0.85" stroke-linejoin="round"/>
          <circle cx="0" cy="73.0" r="0.68" fill="#d4b878"/>
        </g>
      </svg>
    `;
    document.body.appendChild(glow);
    document.body.appendChild(sword);

    let active = false;
    let px = window.innerWidth * 0.5;
    let py = window.innerHeight * 0.5;
    let gx = px;
    let gy = py;

    window.addEventListener("pointermove", (e) => {
      active = true;
      px = e.clientX;
      py = e.clientY;
      const interactive = Boolean(e.target && e.target.closest && e.target.closest("a, button, [role='button'], .interactive-card"));
      sword.classList.toggle("is-hover", interactive);
    }, { passive: true });

    window.addEventListener("pointerdown", () => sword.classList.add("is-pressed"), { passive: true });
    window.addEventListener("pointerup", () => sword.classList.remove("is-pressed"), { passive: true });
    document.addEventListener("pointerleave", () => {
      active = false;
      sword.classList.remove("is-hover", "is-pressed");
    });

    function tickCursor() {
      if (window.innerWidth > 900) {
        gx += (px - gx) * 0.16;
        gy += (py - gy) * 0.16;
        const op = active ? "1" : "0";
        glow.style.opacity = op;
        sword.style.opacity = op;
        glow.style.transform = `translate3d(${gx - 15}px, ${gy - 15}px, 0)`;
        sword.style.transform = `translate3d(${px - 2.3}px, ${py - 2.3}px, 0)`;
      }
      requestAnimationFrame(tickCursor);
    }
    requestAnimationFrame(tickCursor);
  }

  // 2. Subtle Sacred Dust Particle Canvas on subpages
  const canvas = document.querySelector(".particle-canvas");
  if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let w = 0, h = 0, dpr = 1;
  const palette = [
    [46, 94, 124],
    [72, 142, 184],
    [164, 132, 74],
    [190, 158, 96]
  ];
  const motes = [];

  function spawn(randomY) {
    const c = palette[Math.floor(Math.random() * palette.length)];
    return {
      x: Math.random() * w,
      y: randomY ? Math.random() * h : h + 15,
      vy: -(0.18 + Math.random() * 0.45),
      vx: (Math.random() - 0.5) * 0.18,
      size: 1.4 + Math.random() * 2.6,
      alpha: 0.25 + Math.random() * 0.45,
      phase: Math.random() * Math.PI * 2,
      diamond: Math.random() < 0.24,
      rot: Math.random() * Math.PI,
      c
    };
  }

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(65, Math.max(30, Math.floor((w * h) / 22000)));
    while (motes.length < count) motes.push(spawn(true));
    if (motes.length > count) motes.length = count;
  }

  resize();
  window.addEventListener("resize", resize);

  function loop() {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < motes.length; i++) {
      const m = motes[i];
      m.phase += 0.016;
      m.rot += 0.01;
      m.x += m.vx + Math.sin(m.phase) * 0.16;
      m.y += m.vy;
      if (m.y < -20 || m.x < -30 || m.x > w + 30) {
        motes[i] = spawn(false);
        continue;
      }
      const a = m.alpha * (0.6 + 0.4 * Math.sin(m.phase));
      const [r, g, b] = m.c;
      if (m.diamond) {
        ctx.save();
        ctx.translate(m.x, m.y);
        ctx.rotate(m.rot);
        ctx.beginPath();
        ctx.moveTo(0, -m.size * 1.4);
        ctx.lineTo(m.size * 0.8, 0);
        ctx.lineTo(0, m.size * 1.4);
        ctx.lineTo(-m.size * 0.8, 0);
        ctx.closePath();
        ctx.strokeStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
        ctx.lineWidth = 0.75;
        ctx.stroke();
        ctx.restore();
      } else {
        ctx.fillStyle = `rgba(${r},${g},${b},${a.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
})();
