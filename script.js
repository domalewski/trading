/* ═══════════════════════
   THEMES
═══════════════════════ */
const T = {
	breathe: {
		bg: "#0e0904",
		accent: [232, 96, 38],
		accentHex: "#e86026",
		vigA: "rgba(8,4,1,.54)",
		vigB: "rgba(4,2,0,.92)",
		textMain: "#ede7d8",
		textDim: "rgba(245,238,220,.26)",
		cueCol: "rgba(232,96,38,.75)",
		heroIdle: ["let yourself", "go"],
		heroIdleAccent: -1,
		heroAct: ["be here", "now"],
		heroActAccent: -1,
		tagIdle: "Breathing · Meditation · Stillness",
		tagAct: "inhale · hold · exhale · hold",
		cueStart: "breathe with the light",
		pattern: "Box Breathing",
		detail: "4 · 4 · 4 · 4",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 4 },
			{ n: "exhale", d: 4 },
			{ n: "hold", d: 4 }
		],
		barCol: "rgba(232,96,38,.55)",
		barLbl: "rgba(245,232,212,.45)",
		slPat: "rgba(245,232,212,.55)",
		slDet: "rgba(232,96,38,.7)",
		dotCol: "#e86026",
		ringCol: "rgba(232,96,38,.6)",
		// nav
		navBg: "rgba(14,6,2,.82)",
		navBorder: "rgba(232,96,38,.28)",
		pillActive: "#fff0e0",
		pillDim: "rgba(245,225,200,.82)",
		pillActiveBg: "#e86026",
		pillDimBg: "transparent",
		thumbBg: "rgba(232,96,38,.45)",
		flashCol: "rgba(232,96,38,.07)"
	},
	meditate: {
		bg: "#060510",
		accent: [148, 105, 255],
		accentHex: "#9469ff",
		vigA: "rgba(3,2,12,.58)",
		vigB: "rgba(1,1,7,.94)",
		textMain: "#dfd7f5",
		textDim: "rgba(220,210,255,.24)",
		cueCol: "rgba(148,105,255,.75)",
		heroIdle: ["still your", "mind"],
		heroIdleAccent: -1,
		heroAct: ["drift into", "peace"],
		heroActAccent: -1,
		tagIdle: "Presence · Awareness · Depth",
		tagAct: "4 · 7 · 8 breathing",
		cueStart: "settle into stillness",
		pattern: "4–7–8 Breath",
		detail: "4 · 7 · 8",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 7 },
			{ n: "exhale", d: 8 }
		],
		barCol: "rgba(148,105,255,.55)",
		barLbl: "rgba(220,210,255,.45)",
		slPat: "rgba(220,210,255,.55)",
		slDet: "rgba(148,105,255,.7)",
		dotCol: "#9469ff",
		ringCol: "rgba(148,105,255,.6)",
		// nav
		navBg: "rgba(6,3,18,.85)",
		navBorder: "rgba(148,105,255,.28)",
		pillActive: "#efe6ff",
		pillDim: "rgba(210,195,255,.82)",
		pillActiveBg: "#9469ff",
		pillDimBg: "transparent",
		thumbBg: "rgba(148,105,255,.45)",
		flashCol: "rgba(148,105,255,.06)"
	},
	anxiety: {
		bg: "#020904",
		accent: [60, 185, 98],
		accentHex: "#3cb962",
		vigA: "rgba(1,6,2,.58)",
		vigB: "rgba(0,4,1,.94)",
		textMain: "#cce8d4",
		textDim: "rgba(190,228,202,.24)",
		cueCol: "rgba(60,185,98,.75)",
		heroIdle: ["you are", "safe"],
		heroIdleAccent: -1,
		heroAct: ["this too", "passes"],
		heroActAccent: -1,
		tagIdle: "Ground · Release · Trust",
		tagAct: "slow breath · slow mind",
		cueStart: "you are safe right now",
		pattern: "Calm Breath",
		detail: "4 · 4 · 6",
		phases: [
			{ n: "inhale", d: 4 },
			{ n: "hold", d: 4 },
			{ n: "exhale", d: 6 }
		],
		barCol: "rgba(60,185,98,.52)",
		barLbl: "rgba(190,228,202,.45)",
		slPat: "rgba(190,228,202,.55)",
		slDet: "rgba(60,185,98,.7)",
		dotCol: "#3cb962",
		ringCol: "rgba(60,185,98,.6)",
		// nav
		navBg: "rgba(2,12,4,.85)",
		navBorder: "rgba(60,185,98,.25)",
		pillActive: "#e0ffea",
		pillDim: "rgba(175,228,190,.82)",
		pillActiveBg: "#3cb962",
		pillDimBg: "transparent",
		thumbBg: "rgba(60,185,98,.45)",
		flashCol: "rgba(60,185,98,.05)"
	},
	nature: {
		bg: "#030d0e",
		accent: [105, 195, 215],
		accentHex: "#69c3d7",
		vigA: "rgba(1,7,8,.5)",
		vigB: "rgba(0,5,6,.88)",
		textMain: "#d2ecf0",
		textDim: "rgba(148,220,235,.28)",
		cueCol: "rgba(105,195,215,.75)",
		heroIdle: ["still as", "water"],
		heroIdleAccent: -1,
		heroAct: ["let rain", "fall"],
		heroActAccent: -1,
		tagIdle: "Lake · Rain · Wind · Stillness",
		tagAct: "breathe with the rain",
		cueStart: "listen to the water",
		pattern: "Nature Breath",
		detail: "follow the rain",
		phases: [
			{ n: "inhale", d: 5 },
			{ n: "exhale", d: 6 }
		],
		barCol: "rgba(105,195,215,.5)",
		barLbl: "rgba(148,220,235,.45)",
		slPat: "rgba(148,220,235,.55)",
		slDet: "rgba(105,195,215,.7)",
		dotCol: "#69c3d7",
		ringCol: "rgba(105,195,215,.6)",
		// nav
		navBg: "rgba(2,14,18,.85)",
		navBorder: "rgba(105,195,215,.25)",
		pillActive: "#e6f7fb",
		pillDim: "rgba(155,215,230,.82)",
		pillActiveBg: "#69c3d7",
		pillDimBg: "transparent",
		thumbBg: "rgba(105,195,215,.45)",
		flashCol: "rgba(105,195,215,.05)"
	},

};


let musicAudio = null;

/* ═══ CANVAS ══ */
const bgC = document.getElementById("c-bg"),
	fxC = document.getElementById("c-fx"),
	tpC = document.getElementById("c-top");
const bgX = bgC.getContext("2d"),
	fxX = fxC.getContext("2d"),
	tpX = tpC.getContext("2d");
let W, H;
function resize() {
	W = bgC.width = fxC.width = tpC.width = innerWidth;
	H = bgC.height = fxC.height = tpC.height = innerHeight;
}
window.addEventListener("resize", resize);
resize();

/* ═══ STATE ══ */
let mode = "breathe",
	isActive = false,
	phase = 0,
	timer = 0,
	bs = 0,
	breathCount = 0,
	exhaleVal = 0;
let textAnim = 0,
	charData = [],
	cueChars = [];
let natureCycleT = 0;

/* ═══ MOUSE + DRAG STATE ══ */
let mx = 0.5,
	my = 0.5,
	rmx = 0.5,
	rmy = 0.5;
// Velocity for drag effect
let pmx = 0.5,
	pmy = 0.5,
	mvx = 0,
	mvy = 0;
// Click/drag impulse
let clickImpulse = 0,
	isDragging = false,
	dragEnergy = 0;
// Click ripple positions for wave distortion
let clickRipples = [];

document.addEventListener("mousedown", (e) => {
	isDragging = true;
	clickImpulse = 1.0;
	clickRipples.push({
		x: e.clientX / W,
		y: e.clientY / H,
		t: 0,
		strength: 1.0
	});
	if (clickRipples.length > 6) clickRipples.shift();
});
document.addEventListener("mouseup", () => {
	isDragging = false;
});

document.addEventListener(
	"touchstart",
	(e) => {
		isDragging = true;
		const t2 = e.touches[0];
		clickImpulse = 1.0;
		clickRipples.push({
			x: t2.clientX / W,
			y: t2.clientY / H,
			t: 0,
			strength: 1.0
		});
		if (clickRipples.length > 6) clickRipples.shift();
	},
	{ passive: true }
);
document.addEventListener("touchend", () => {
	isDragging = false;
});
document.addEventListener(
	"touchmove",
	(e) => {
		const t2 = e.touches[0];
		mx = t2.clientX / W;
		my = t2.clientY / H;
	},
	{ passive: true }
);



/* ═══ RIPPLES ══ */
function spawnRipple(x, y) {
	const el = document.createElement("div");
	el.className = "ripple";
	const th = T[mode],
		[ar, ag, ab] = th.accent,
		sz = 68 + bs * 52;
	el.style.cssText = `left:${x}px;top:${y}px;width:${sz}px;height:${sz}px;border:1.5px solid rgba(${ar},${ag},${ab},.55)`;
	document.body.appendChild(el);
	setTimeout(() => el.remove(), 880);
}
document.addEventListener("click", (e) => {
	if (e.target.closest("#mode-switcher") || e.target.closest("#breath-btn"))
		return;
	spawnRipple(e.clientX, e.clientY);
});
document.addEventListener(
	"touchstart",
	(e) => {
		[...e.touches].forEach((t3) => {
			if (!e.target.closest("#mode-switcher") && !e.target.closest("#breath-btn"))
				spawnRipple(t3.clientX, t3.clientY);
		});
	},
	{ passive: true }
);

/* ═══ TEXT BUILD ══ */
function buildHeroText(lines, tag) {
	const h1 = document.getElementById("h1-text");
	h1.innerHTML = "";
	charData = [];
	const th = T[mode];

	lines.forEach((lineText, li) => {
		const lineEl = document.createElement("div");
		lineEl.style.cssText = "display:block;text-align:center;";
		const words = lineText.split(" ");
		words.forEach((w, wi) => {
			if (wi > 0) {
				const sp = document.createElement("span");
				sp.className = "word-space";
				lineEl.appendChild(sp);
			}
			const wrap = document.createElement("span");
			wrap.className = "word-wrap";
			lineEl.appendChild(wrap);
			[...w].forEach((ch, ci) => {
				const s = document.createElement("span");
				s.className = "char";
				s.textContent = ch;
				s.style.color = th.textMain;
				wrap.appendChild(s);
				charData.push({
					el: s,
					line: li,
					word: wi,
					idx: ci,
					phase: Math.random() * Math.PI * 2,
					freq: 0.00036 + Math.random() * 0.00025,
					amp: 3 + Math.random() * 5.5
				});
			});
		});
		h1.appendChild(lineEl);
	});

	const allChars = h1.querySelectorAll(".word-wrap:last-child .char");
	allChars.forEach((c) => (c.style.color = th.accentHex));

	const tgEl = document.getElementById("tagline-text");
	tgEl.textContent = tag;
	tgEl.style.color = th.textDim;
}

function buildCueText(txt) {
	const el = document.getElementById("cue");
	el.innerHTML = "";
	cueChars.length = 0;
	[...txt].forEach((ch, i) => {
		if (ch === " ") {
			el.appendChild(document.createTextNode(" "));
			return;
		}
		const s = document.createElement("span");
		s.className = "cue-char";
		s.textContent = ch;
		el.appendChild(s);
		cueChars.push({
			el: s,
			i,
			phase: i * 0.17,
			freq: 0.00046 + i * 0.000016,
			amp: 2 + Math.random() * 3
		});
	});
	el.style.color = T[mode].cueCol;
}

/* ═══ TEXT ANIMATION — enhanced with drag/click reactions ══ */
function animateText(ts) {
	const a = textAnim;
	const mox = (rmx - 0.5) * 6,
		moy = (rmy - 0.5) * 4;
	// click impulse adds jolt to text
	const cj = clickImpulse * 3;
	const dragBias = mvx * 0.12;
	charData.forEach((c) => {
		let tx = 0,
			ty = 0,
			rot = 0,
			sc = 1,
			op = 1;
		const bf = isActive ? 1 + bs * 0.85 : 0.52;
		if (a === 0) {
			ty =
				Math.sin(ts * c.freq + c.line * 1.6 + c.idx * 0.35) * c.amp * bf +
				moy * 0.3 +
				Math.sin(cj * c.idx * 0.3) * cj * 0.4;
			tx =
				Math.cos(ts * c.freq * 0.55 + c.idx * 0.2) * c.amp * 0.2 * bf +
				mox * 0.2 +
				dragBias * c.amp * 0.08;
		} else if (a === 1) {
			const bv = Math.abs(Math.sin(ts * 0.0008 + c.line * 1.1 + c.idx * 0.28));
			ty =
				-bv * (isActive ? c.amp * (1 + bs) : c.amp * 0.45) +
				moy * 0.25 -
				cj * 0.25 * Math.sin(c.idx * 0.5);
			sc = 1 + bv * (isActive ? 0.09 : 0.028) + clickImpulse * 0.015;
		} else if (a === 2) {
			ty =
				Math.sin(ts * 0.00112 + c.idx * 0.5 + c.line * 2) *
					c.amp *
					0.7 *
					(isActive ? 1 + bs * 0.6 : 0.45) +
				moy * 0.3 +
				cj * 0.3 * Math.cos(c.idx * 0.4);
			rot =
				Math.sin(ts * 0.00086 + c.idx * 0.4) * (isActive ? 2 + bs * 3 : 1) +
				dragEnergy * Math.sin(c.idx * 0.6) * 2;
			tx = mox * 0.25 + dragBias * c.amp * 0.06;
		} else if (a === 3) {
			const bv = isActive ? bs : (0.5 + 0.5 * Math.sin(ts * 0.00066)) * 0.36;
			sc =
				1 +
				Math.sin(ts * 0.00056 + c.line * 1.2 + c.idx * 0.15) *
					(isActive ? 0.062 + bv * 0.1 : 0.026) +
				clickImpulse * 0.02;
			ty =
				Math.sin(ts * 0.0004 + c.idx * 0.3 + c.line) *
					c.amp *
					0.5 *
					(isActive ? 1 + bv : 0.45) +
				moy * 0.22 +
				cj * 0.2;
			tx = mox * 0.2 + dragBias * c.amp * 0.05;
		} else if (a === 4) {
			if (Math.sin(ts * 0.00026 + c.line * 3.8 + c.idx * 1.1) > 0.91) {
				tx =
					(Math.random() - 0.5) * (isActive ? 8 + bs * 8 : 4) +
					mox * 0.3 +
					dragEnergy * 4;
				op = 0.7 + Math.random() * 0.3;
			}
			ty =
				Math.sin(ts * c.freq * 0.5 + c.line * 1.9) *
					c.amp *
					0.4 *
					(isActive ? 0.7 : 0.36) +
				moy * 0.28 +
				cj * 0.22;
		} else {
			const t2 = ts * 0.00046 + c.line * 0.8 + c.idx * 0.12;
			tx =
				Math.cos(t2) * c.amp * 0.6 * (isActive ? 1 + bs * 0.5 : 0.36) +
				mox * 0.35 +
				dragBias * c.amp * 0.1;
			ty =
				Math.sin(t2 * 1.3) * c.amp * 0.5 * (isActive ? 1 + bs * 0.5 : 0.36) +
				moy * 0.3 +
				cj * 0.28;
			rot =
				Math.sin(t2 * 0.7) * (isActive ? 3 + bs * 4 : 1.5) +
				dragEnergy * 1.5 * Math.sin(c.idx * 0.4);
		}
		c.el.style.transform = `translate(${tx.toFixed(2)}px,${ty.toFixed(
			2
		)}px) rotate(${rot.toFixed(2)}deg) scale(${sc.toFixed(3)})`;
		if (a === 4) c.el.style.opacity = op;
	});
	cueChars.forEach((c) => {
		c.el.style.transform = `translateY(${(
			Math.sin(ts * c.freq + c.phase) * (isActive ? 3 + bs * 4 : 1.8) +
			clickImpulse * 1.2 * Math.sin(c.i * 0.4)
		).toFixed(2)}px)`;
	});
	document.getElementById("tagline-text").style.transform = `translateY(${(
		Math.sin(ts * 0.0004 + 5) * (isActive ? 2.5 + bs * 2 : 1.2) +
		dragEnergy * 1.5
	).toFixed(2)}px)`;
}

/* ═══ WAVE HELPER — click ripples distort waves ══ */
function wv(ctx, t, yc, amp, fm, sp, ph2, chaos, mouseAmp) {
	const ma = mouseAmp || 0;
	const yB = H * yc + H * (rmy - 0.5) * ma * 0.06;
	ctx.beginPath();
	for (let x = 0; x <= W; x += 3) {
		const nx = x / W,
			ph = t * sp;
		const mouseWarp =
			(rmx - 0.5) * ma * amp * 0.5 * Math.sin(nx * Math.PI * 2 + 0.5);
		// drag energy ripples through waves
		const dragWarp =
			dragEnergy *
			amp *
			0.3 *
			Math.sin(nx * Math.PI * 3 + t * 0.003 + (rmx - 0.5) * 4);
		// click ripple wave distortion
		let rippleWarp = 0;
		for (const r of clickRipples) {
			const dx = nx - r.x,
				age = r.t;
			const wavefront = age * 0.6;
			const dist = Math.abs(dx);
			const spread = 0.12 + age * 0.2;
			rippleWarp +=
				r.strength *
				amp *
				0.22 *
				Math.exp(-Math.pow(dist - wavefront, 2) / (spread * spread)) *
				Math.exp(-age * 0.9) *
				Math.sin((dist - wavefront) * 18);
		}
		let y =
			yB +
			mouseWarp +
			dragWarp +
			rippleWarp +
			Math.sin(nx * Math.PI * 2 * fm + ph * 7) * amp * (1 + ma * 0.4) +
			Math.sin(nx * Math.PI * 3 * fm * 0.73 + ph * 5.2 + ph2) * amp * 0.4;
		if (chaos > 0.04) {
			y += Math.sin(nx * Math.PI * 8 * fm + ph * 16 + ph2) * amp * chaos * 0.55;
			y += Math.sin(nx * Math.PI * 14 * fm + ph * 24) * amp * chaos * 0.22;
		}
		x === 0 ? ctx.moveTo(0, y) : ctx.lineTo(x, y);
	}
}

/* mouse-reactive overlay wave — all modes, very responsive */
function drawMouseWave(t, [ar, ag, ab], alpha) {
	const my2 = rmy,
		mx2 = rmx;
	const yBase = H * (0.3 + my2 * 0.4);
	const wAmp =
		H *
		(0.03 + bs * 0.05) *
		(1 + mx2 * 0.8 + Math.abs(my2 - 0.5) * 0.6) *
		(1 + dragEnergy * 0.8);
	const velSkew = mvx * 0.003;
	for (let layer = 0; layer < 4; layer++) {
		const phOff = layer * 1.1;
		tpX.beginPath();
		for (let x = 0; x <= W; x += 3) {
			const nx = x / W;
			let y =
				yBase +
				Math.sin(
					nx * Math.PI * 2 * (1 + mx2 * 0.8) +
						t * 0.000045 * 7 +
						phOff +
						velSkew * nx
				) *
					wAmp +
				Math.sin(nx * Math.PI * 3.7 + t * 0.000028 * 5 + phOff) * wAmp * 0.38 +
				(mx2 - 0.5) * H * 0.06 * Math.sin(nx * Math.PI + layer) + // horizontal lean
				mvx * wAmp * 0.08 * Math.sin(nx * Math.PI * 3 + phOff) + // velocity warp
				mvy * wAmp * 0.05 * Math.cos(nx * Math.PI * 2 + layer); // vertical velocity
			for (const r of clickRipples) {
				const dx = nx - r.x,
					age = r.t,
					wavefront = age * 0.55,
					spread = 0.1 + age * 0.15;
				y +=
					r.strength *
					H *
					0.016 *
					Math.exp(-Math.pow(Math.abs(dx) - wavefront, 2) / (spread * spread)) *
					Math.exp(-age * 1.0) *
					Math.sin((Math.abs(dx) - wavefront) * 22);
			}
			x === 0 ? tpX.moveTo(0, y) : tpX.lineTo(x, y);
		}
		tpX.strokeStyle = `rgba(${ar},${ag},${ab},${
			(alpha - 0.01 * layer) * (0.45 + bs * 0.65 + clickImpulse * 0.35)
		})`;
		tpX.lineWidth = 1.4 - layer * 0.25;
		tpX.stroke();
	}
}

/* ══════════════════════════════════════
   1. BREATHE
══════════════════════════════════════ */
function drawBreathe(t, bs, ev) {
	bgX.fillStyle = "#0e0904";
	bgX.fillRect(0, 0, W, H);
	const gr = bgX.createRadialGradient(
		W / 2,
		H * 0.55,
		0,
		W / 2,
		H * 0.55,
		W * 0.72
	);
	gr.addColorStop(0, `rgba(232,96,38,${0.08 + bs * 0.25})`);
	gr.addColorStop(0.42, `rgba(135,48,8,${0.04 + bs * 0.12})`);
	gr.addColorStop(1, "transparent");
	bgX.fillStyle = gr;
	bgX.fillRect(0, 0, W, H);
	// Mouse glow — aggressively tracks cursor with velocity offset
	const mGlowX = W * (rmx + mvx * 0.02),
		mGlowY = H * (rmy + mvy * 0.02);
	const gr2 = bgX.createRadialGradient(
		mGlowX,
		mGlowY,
		0,
		mGlowX,
		mGlowY,
		W * (0.45 + dragEnergy * 0.18)
	);
	gr2.addColorStop(0, `rgba(210,72,18,${0.06 + bs * 0.12 + dragEnergy * 0.08})`);
	gr2.addColorStop(0.35, `rgba(150,45,10,${0.03 + bs * 0.06})`);
	gr2.addColorStop(1, "transparent");
	bgX.fillStyle = gr2;
	bgX.fillRect(0, 0, W, H);
	// Click impulse glow burst
	if (clickImpulse > 0.05) {
		clickRipples.forEach((r) => {
			const g2 = bgX.createRadialGradient(
				r.x * W,
				r.y * H,
				0,
				r.x * W,
				r.y * H,
				W * 0.18 * r.strength
			);
			g2.addColorStop(
				0,
				`rgba(232,96,38,${r.strength * 0.08 * Math.exp(-r.t * 1.5)})`
			);
			g2.addColorStop(1, "transparent");
			bgX.fillStyle = g2;
			bgX.fillRect(0, 0, W, H);
		});
	}

	[
		[0.82, 115, 0.78, 0.000082, 20, 65, 10, 0.56],
		[0.76, 95, 1.02, 0.000115, 24, 68, 13, 0.47],
		[0.7, 76, 1.28, 0.000152, 21, 62, 16, 0.39],
		[0.64, 60, 1.58, 0.000192, 27, 60, 19, 0.32],
		[0.58, 48, 1.98, 0.000238, 19, 56, 22, 0.26],
		[0.53, 38, 2.48, 0.000285, 23, 52, 25, 0.2],
		[0.48, 28, 3.2, 0.000338, 20, 49, 28, 0.15],
		[0.44, 20, 4.1, 0.000398, 22, 45, 31, 0.11],
		[0.4, 13, 5.3, 0.000468, 18, 41, 34, 0.08]
	].forEach(([yc, a, fm, sp, hue, sat, lit, op], i) => {
		wv(bgX, t, yc, a * (0.62 + 0.38 * bs), fm, sp, i, ev, 0.7);
		bgX.lineTo(W, H);
		bgX.closePath();
		bgX.fillStyle = `hsla(${hue},${sat}%,${lit + bs * 15 + ev * 8}%,${
			op + bs * 0.1
		})`;
		bgX.fill();
	});
	fxX.clearRect(0, 0, W, H);
	tpX.clearRect(0, 0, W, H);
	// Synth lines — strongly mouse-reactive: position follows cursor, amplitude bends with drag
	const mxBias = rmx - 0.5; // -0.5 to 0.5
	const myBias = rmy - 0.5;
	[
		[0.65, 0.062, 1.28, 0.000048, 0.2, 1.0],
		[0.55, 0.04, 2.0, 0.000065, 0.15, 0.7],
		[0.72, 0.048, 0.98, 0.000036, 0.13, 0.6],
		[0.48, 0.026, 2.7, 0.000082, 0.11, 0.5],
		[0.6, 0.068, 0.8, 0.000033, 0.16, 0.9],
		[0.78, 0.036, 1.5, 0.000043, 0.11, 0.55]
	].forEach(([yc, a, fm, sp, op, w], li) => {
		// Each line's vertical position shifts toward the mouse
		const mouseYShift = myBias * H * 0.18 * (1 - li * 0.08);
		const yB = H * yc + mouseYShift;
		// Amplitude is boosted strongly by mouse position and drag
		const mxAmpBoost =
			1 + Math.abs(mxBias) * 1.8 + dragEnergy * 1.2 + Math.abs(myBias) * 0.6;
		const amp = H * a * (0.52 + 0.48 * bs) * mxAmpBoost;
		const ph = t * sp;
		// Frequency modulation from horizontal mouse — bends the wave
		const fmMod = fm * (1 + mxBias * 0.5 + mvx * 0.04);
		fxX.beginPath();
		for (let x = 0; x <= W; x += 3) {
			const nx = x / W;
			// Base wave + mouse-steered phase offset + velocity warp
			let y =
				yB +
				Math.sin(nx * Math.PI * 2 * fmMod + ph * 6 + mxBias * nx * 3) * amp +
				Math.sin(nx * Math.PI * 4 * fmMod * 0.6 + ph * 3.8 + myBias * 2) *
					amp *
					0.35 +
				mxBias * amp * 0.5 * Math.sin(nx * Math.PI * 1.5 + li) + // horizontal lean
				mvx * amp * 0.06 * Math.sin(nx * Math.PI * 2.5 + ph * 2) + // velocity ripple
				mvy * amp * 0.04 * Math.cos(nx * Math.PI * 2 + li); // vertical velocity
			if (ev > 0.04)
				y += Math.sin(nx * Math.PI * 9 * fmMod + ph * 15) * amp * ev * 0.4;
			for (const r of clickRipples) {
				const dx = nx - r.x,
					age = r.t,
					wf = age * 0.55,
					sp2 = 0.1 + age * 0.15;
				y +=
					r.strength *
					amp *
					0.28 *
					Math.exp(-Math.pow(Math.abs(dx) - wf, 2) / (sp2 * sp2)) *
					Math.exp(-age * 1.0) *
					Math.sin((Math.abs(dx) - wf) * 20);
			}
			x === 0 ? fxX.moveTo(0, y) : fxX.lineTo(x, y);
		}
		// Opacity also reacts to mouse proximity to the line's y-center
		const distToMouse = Math.abs(rmy - yc);
		const proximityBoost = Math.exp(-distToMouse * 3) * 0.4;
		fxX.strokeStyle = `rgba(245,232,212,${
			(op + proximityBoost) * (0.45 + 0.55 * bs)
		})`;
		fxX.lineWidth = w * (1 + proximityBoost * 1.5);
		fxX.stroke();
	});
	drawMouseWave(t, [232, 96, 38], 0.12);
}

/* ══════════════════════════════════════
   2. MEDITATE
══════════════════════════════════════ */
function drawMeditate(t, bs, ev) {
	const bgg = bgX.createLinearGradient(0, 0, 0, H);
	bgg.addColorStop(0, "#03020c");
	bgg.addColorStop(0.5, "#050412");
	bgg.addColorStop(1, "#02020e");
	bgX.fillStyle = bgg;
	bgX.fillRect(0, 0, W, H);
	const aox = (rmx - 0.5) * W * 0.12 + mvx * W * 0.018,
		aoy = (rmy - 0.5) * H * 0.09 + mvy * H * 0.015;
	const ng = bgX.createRadialGradient(
		W * 0.5 + aox,
		H * 0.46 + aoy,
		0,
		W * 0.5 + aox,
		H * 0.46 + aoy,
		W * (0.9 + dragEnergy * 0.15)
	);
	ng.addColorStop(
		0,
		`rgba(148,105,255,${0.08 + bs * 0.26 + dragEnergy * 0.06})`
	);
	ng.addColorStop(0.38, `rgba(72,42,175,${0.05 + bs * 0.14})`);
	ng.addColorStop(0.72, `rgba(25,12,55,${0.04 + bs * 0.08})`);
	ng.addColorStop(1, "transparent");
	bgX.fillStyle = ng;
	bgX.fillRect(0, 0, W, H);
	const ng2 = bgX.createRadialGradient(
		W * 0.2,
		H * 0.38,
		0,
		W * 0.2,
		H * 0.38,
		W * 0.46
	);
	ng2.addColorStop(0, `rgba(68,32,155,${0.05 + bs * 0.14})`);
	ng2.addColorStop(1, "transparent");
	bgX.fillStyle = ng2;
	bgX.fillRect(0, 0, W, H);
	const ng3 = bgX.createRadialGradient(
		W * 0.82,
		H * 0.35,
		0,
		W * 0.82,
		H * 0.35,
		W * 0.38
	);
	ng3.addColorStop(0, `rgba(90,52,200,${0.04 + bs * 0.11})`);
	ng3.addColorStop(1, "transparent");
	bgX.fillStyle = ng3;
	bgX.fillRect(0, 0, W, H);
	clickRipples.forEach((r) => {
		const g2 = bgX.createRadialGradient(
			r.x * W,
			r.y * H,
			0,
			r.x * W,
			r.y * H,
			W * 0.2 * r.strength
		);
		g2.addColorStop(
			0,
			`rgba(148,105,255,${r.strength * 0.06 * Math.exp(-r.t * 1.2)})`
		);
		g2.addColorStop(1, "transparent");
		bgX.fillStyle = g2;
		bgX.fillRect(0, 0, W, H);
	});

	[
		[0.74, 52, 0.52, 0.000038, 268, 68, 14, 0.44],
		[0.66, 40, 0.7, 0.000055, 252, 72, 17, 0.37],
		[0.59, 32, 0.92, 0.000072, 278, 62, 20, 0.31],
		[0.52, 25, 1.18, 0.000092, 260, 70, 23, 0.25],
		[0.46, 19, 1.52, 0.000115, 245, 58, 26, 0.19],
		[0.41, 13, 1.98, 0.000145, 270, 54, 29, 0.14]
	].forEach(([yc, a, fm, sp, hue, sat, lit, op], i) => {
		wv(bgX, t, yc, a * (0.58 + 0.42 * bs), fm, sp, i, ev, 0.6);
		bgX.lineTo(W, H);
		bgX.closePath();
		bgX.fillStyle = `hsla(${hue},${sat}%,${lit + bs * 17 + ev * 6}%,${
			op + bs * 0.11
		})`;
		bgX.fill();
	});
	fxX.clearRect(0, 0, W, H);
	tpX.clearRect(0, 0, W, H);
	// Synth lines — strongly mouse-reactive
	const mxB2 = rmx - 0.5,
		myB2 = rmy - 0.5;
	[
		[0.52, 0.033, 1.8, 0.000029, 0.18, 0.6],
		[0.43, 0.02, 2.9, 0.000043, 0.13, 0.4],
		[0.62, 0.027, 1.3, 0.000024, 0.15, 0.5],
		[0.47, 0.017, 3.5, 0.000052, 0.1, 0.4],
		[0.57, 0.038, 0.88, 0.000021, 0.17, 0.7]
	].forEach(([yc, a, fm, sp, op, w], li) => {
		const mouseYShift = myB2 * H * 0.16 * (1 - li * 0.08);
		const yB = H * yc + mouseYShift;
		const mxAmpBoost =
			1 + Math.abs(mxB2) * 2.0 + dragEnergy * 1.3 + Math.abs(myB2) * 0.7;
		const amp = H * a * (0.48 + 0.52 * bs) * mxAmpBoost;
		const fmMod = fm * (1 + mxB2 * 0.55 + mvx * 0.035);
		const ph = t * sp;
		fxX.beginPath();
		for (let x = 0; x <= W; x += 3) {
			const nx = x / W;
			let y =
				yB +
				Math.sin(nx * Math.PI * 2 * fmMod + ph * 5 + mxB2 * nx * 3.5) * amp +
				Math.sin(nx * Math.PI * 3 * fmMod * 0.7 + ph * 3) * amp * 0.38 +
				mxB2 * amp * 0.6 * Math.sin(nx * Math.PI * 1.8 + li) +
				mvx * amp * 0.05 * Math.sin(nx * Math.PI * 2 + ph) +
				mvy * amp * 0.04 * Math.cos(nx * Math.PI * 1.5 + li);
			if (ev > 0.04)
				y += Math.sin(nx * Math.PI * 7 * fmMod + ph * 12) * amp * ev * 0.35;
			for (const r of clickRipples) {
				const dx = nx - r.x,
					age = r.t,
					wf = age * 0.55,
					sp2 = 0.1 + age * 0.15;
				y +=
					r.strength *
					amp *
					0.25 *
					Math.exp(-Math.pow(Math.abs(dx) - wf, 2) / (sp2 * sp2)) *
					Math.exp(-age * 1.0) *
					Math.sin((Math.abs(dx) - wf) * 18);
			}
			x === 0 ? fxX.moveTo(0, y) : fxX.lineTo(x, y);
		}
		const distToMouse = Math.abs(rmy - yc);
		const proximityBoost = Math.exp(-distToMouse * 3.5) * 0.5;
		fxX.strokeStyle = `rgba(220,210,255,${
			(op + proximityBoost) * (0.42 + 0.58 * bs)
		})`;
		fxX.lineWidth = w * (1 + proximityBoost * 1.8);
		fxX.stroke();
	});
	for (let i = 0; i < 145; i++) {
		const sx = ((((Math.sin(i * 42) * 43758.5) % 1) + 1) % 1) * W;
		const sy = ((((Math.sin(i * 42 + 1) * 43758.5) % 1) + 1) % 1) * (H * 0.72);
		const tw = 0.35 + 0.65 * Math.abs(Math.sin(t * 0.0014 + i * 1.28));
		const sr = 0.3 + ((((Math.sin(i * 42 + 2) * 43758.5) % 1) + 1) % 1) * 0.7;
		// stars shift slightly with mouse velocity
		const starX = sx + mvx * sr * 0.8,
			starY = sy + mvy * sr * 0.5;
		fxX.beginPath();
		fxX.arc(starX, starY, sr, 0, Math.PI * 2);
		fxX.fillStyle = `rgba(220,210,255,${(0.07 + bs * 0.12) * tw})`;
		fxX.fill();
		if (tw > 0.85 && sr > 0.7) {
			const sg = fxX.createRadialGradient(starX, starY, 0, starX, starY, 5);
			sg.addColorStop(0, `rgba(200,185,255,${0.12 * tw})`);
			sg.addColorStop(1, "transparent");
			fxX.fillStyle = sg;
			fxX.beginPath();
			fxX.arc(starX, starY, 5, 0, Math.PI * 2);
			fxX.fill();
		}
	}
	drawMouseWave(t, [148, 105, 255], 0.07);
}

/* ══════════════════════════════════════
   3. ANXIETY
══════════════════════════════════════ */
function drawAnxiety(t, bs, ev) {
	const bgg = bgX.createLinearGradient(0, 0, 0, H);
	bgg.addColorStop(0, "#010702");
	bgg.addColorStop(0.6, "#020c04");
	bgg.addColorStop(1, "#010802");
	bgX.fillStyle = bgg;
	bgX.fillRect(0, 0, W, H);
	const mg = bgX.createRadialGradient(
		W * rmx,
		H * 0.08,
		0,
		W * rmx,
		H * 0.08,
		W * (0.58 + dragEnergy * 0.1)
	);
	mg.addColorStop(0, `rgba(60,185,98,${0.04 + bs * 0.15 + dragEnergy * 0.04})`);
	mg.addColorStop(0.42, `rgba(22,65,30,${0.03 + bs * 0.08})`);
	mg.addColorStop(1, "transparent");
	bgX.fillStyle = mg;
	bgX.fillRect(0, 0, W, H);
	clickRipples.forEach((r) => {
		const g2 = bgX.createRadialGradient(
			r.x * W,
			r.y * H,
			0,
			r.x * W,
			r.y * H,
			W * 0.16 * r.strength
		);
		g2.addColorStop(
			0,
			`rgba(60,185,98,${r.strength * 0.05 * Math.exp(-r.t * 1.3)})`
		);
		g2.addColorStop(1, "transparent");
		bgX.fillStyle = g2;
		bgX.fillRect(0, 0, W, H);
	});

	[
		[0.88, 82, 0.58, 0.000058, 140, 38, 5, 0.68],
		[0.82, 96, 0.76, 0.000075, 143, 42, 7, 0.58],
		[0.76, 80, 0.96, 0.000092, 146, 40, 9, 0.5],
		[0.69, 64, 1.18, 0.000112, 142, 38, 12, 0.42],
		[0.62, 52, 1.48, 0.000138, 145, 36, 15, 0.34],
		[0.56, 42, 1.88, 0.000165, 141, 34, 18, 0.27],
		[0.5, 32, 2.38, 0.000198, 144, 32, 21, 0.21],
		[0.45, 23, 3.08, 0.000238, 142, 30, 24, 0.16],
		[0.41, 16, 3.98, 0.000282, 143, 28, 27, 0.12]
	].forEach(([yc, a, fm, sp, hue, sat, lit, op], i) => {
		wv(bgX, t, yc, a * (0.62 + 0.38 * bs), fm, sp, i, ev, 0.65);
		bgX.lineTo(W, H);
		bgX.closePath();
		bgX.fillStyle = `hsla(${hue},${sat}%,${lit + bs * 13 + ev * 5}%,${
			op + bs * 0.08
		})`;
		bgX.fill();
	});
	for (let i = 0; i < 18; i++) {
		const tx = ((((Math.sin(i * 37.4) * 43758) % 1) + 1) % 1) * W;
		const th2 =
			H * (0.19 + ((((Math.sin(i * 13.7) * 43758) % 1) + 1) % 1) * 0.29);
		const tw2 = 16 + ((((Math.sin(i * 29.1) * 43758) % 1) + 1) % 1) * 32;
		const sway =
			Math.sin(
				((t * 0.00028 * (((Math.sin(i * 11.1) * 43758) % 1) + 1)) % 1) * 0.8 + i
			) *
				8 *
				(1 + ev * 2.5) +
			(rmx - 0.5) * 4;
		bgX.beginPath();
		bgX.moveTo(tx + sway, H);
		bgX.lineTo(tx - tw2 / 2 + sway, H - th2 * 0.42);
		bgX.lineTo(tx + sway, H - th2);
		bgX.lineTo(tx + tw2 / 2 + sway, H - th2 * 0.42);
		bgX.closePath();
		bgX.fillStyle = "rgba(0,8,2,.42)";
		bgX.fill();
	}
	fxX.clearRect(0, 0, W, H);
	tpX.clearRect(0, 0, W, H);
	// Synth lines — strongly mouse-reactive
	const mxB3 = rmx - 0.5,
		myB3 = rmy - 0.5;
	[
		[0.6, 0.052, 1.08, 0.00004, 0.17, 0.9],
		[0.5, 0.036, 1.78, 0.000055, 0.13, 0.6],
		[0.68, 0.04, 0.82, 0.00003, 0.14, 0.7],
		[0.44, 0.023, 2.38, 0.00007, 0.1, 0.5],
		[0.54, 0.058, 0.68, 0.000026, 0.16, 0.85]
	].forEach(([yc, a, fm, sp, op, w], li) => {
		const mouseYShift = myB3 * H * 0.16 * (1 - li * 0.08);
		const yB = H * yc + mouseYShift;
		const mxAmpBoost =
			1 + Math.abs(mxB3) * 1.9 + dragEnergy * 1.2 + Math.abs(myB3) * 0.65;
		const amp = H * a * (0.52 + 0.48 * bs) * mxAmpBoost;
		const fmMod = fm * (1 + mxB3 * 0.5 + mvx * 0.04);
		const ph = t * sp;
		fxX.beginPath();
		for (let x = 0; x <= W; x += 3) {
			const nx = x / W;
			let y =
				yB +
				Math.sin(nx * Math.PI * 2 * fmMod + ph * 5.5 + mxB3 * nx * 3) * amp +
				Math.sin(nx * Math.PI * 3 * fmMod * 0.65 + ph * 3.5 + myB3 * 1.5) *
					amp *
					0.38 +
				mxB3 * amp * 0.55 * Math.sin(nx * Math.PI * 2.2 + 1 + li) +
				mvx * amp * 0.06 * Math.sin(nx * Math.PI * 2.8 + ph) +
				mvy * amp * 0.04 * Math.cos(nx * Math.PI * 1.8 + li);
			if (ev > 0.04)
				y += Math.sin(nx * Math.PI * 8 * fmMod + ph * 14) * amp * ev * 0.45;
			for (const r of clickRipples) {
				const dx = nx - r.x,
					age = r.t,
					wf = age * 0.55,
					sp2 = 0.1 + age * 0.15;
				y +=
					r.strength *
					amp *
					0.26 *
					Math.exp(-Math.pow(Math.abs(dx) - wf, 2) / (sp2 * sp2)) *
					Math.exp(-age * 1.0) *
					Math.sin((Math.abs(dx) - wf) * 20);
			}
			x === 0 ? fxX.moveTo(0, y) : fxX.lineTo(x, y);
		}
		const distToMouse = Math.abs(rmy - yc);
		const proximityBoost = Math.exp(-distToMouse * 3.2) * 0.45;
		fxX.strokeStyle = `rgba(190,228,202,${
			(op + proximityBoost) * (0.48 + 0.52 * bs)
		})`;
		fxX.lineWidth = w * (1 + proximityBoost * 1.6);
		fxX.stroke();
	});
	for (let i = 0; i < 32; i++) {
		const fx = ((((Math.sin(i * 23.7) * 43758) % 1) + 1) % 1) * W;
		const fy =
			((((Math.sin(i * 17.1) * 43758) % 1) + 1) % 1) * (H * 0.65) + H * 0.07;
		const fl =
			0.28 +
			0.72 *
				Math.abs(
					Math.sin(
						((t * 0.0011 * (((Math.sin(i * 9) * 43758) % 1) + 1)) % 1) * 2 + i * 1.85
					)
				);
		const fa = (0.045 + bs * 0.1) * fl * (1 - ev * 0.38);
		if (fa < 0.006) continue;
		const gg = fxX.createRadialGradient(fx, fy, 0, fx, fy, 10);
		gg.addColorStop(0, `rgba(165,242,145,${fa * 0.8})`);
		gg.addColorStop(1, "transparent");
		fxX.fillStyle = gg;
		fxX.beginPath();
		fxX.arc(fx, fy, 10, 0, Math.PI * 2);
		fxX.fill();
		fxX.beginPath();
		fxX.arc(fx, fy, 1.3, 0, Math.PI * 2);
		fxX.fillStyle = `rgba(195,248,175,${fa})`;
		fxX.fill();
	}
	drawMouseWave(t, [60, 185, 98], 0.07);
}

/* ══════════════════════════════════════
   4. NATURE — tranquil lake, full-screen rain, wind waves
══════════════════════════════════════ */
function RNG(seed) {
	let s = seed;
	return () => {
		s = (s * 16807) % 2147483647;
		return (s - 1) / 2147483646;
	};
}

// Lake ripple system — mouse creates ripples on lake
const LAKE_RIPPLES = [];
let lastLakeRipple = 0;

// Raindrops — full screen, dense
const RAIN_COUNT = 420;
const RAINDROPS2 = Array.from({ length: RAIN_COUNT }, (_, i) => {
	const r = RNG(i * 71 + 3);
	return {
		x: r() * 1.2 - 0.1, // spread slightly beyond screen edges
		y: r(),
		speed: 6 + r() * 10,
		len: 9 + r() * 22,
		angle: -0.06 + r() * 0.04, // slight wind angle
		alpha: 0.12 + r() * 0.22,
		thickness: 0.4 + r() * 0.8
	};
});
let rainY = RAINDROPS2.map((d) => d.y * 1.0);

// Wind bands
const WIND_BANDS = Array.from({ length: 12 }, (_, i) => {
	const r = RNG(i * 53 + 7);
	return {
		y: r(),
		speed: 0.00018 + r() * 0.00028,
		amp: 0.018 + r() * 0.032,
		freq: 0.8 + r() * 1.8,
		phase: r() * Math.PI * 2
	};
});

// Lake reflection ripple seeds
const LAKE_RING_SEEDS = Array.from({ length: 22 }, (_, i) => {
	const r = RNG(i * 29 + 3);
	return {
		x: 0.15 + r() * 0.7,
		spawnInterval: 2000 + r() * 5000,
		lastSpawn: r() * 5000
	};
});

function drawNature(t, bs, ev) {
	fxX.clearRect(0, 0, W, H);
	tpX.clearRect(0, 0, W, H);

	// ── Sky gradient ──
	const skyGrad = bgX.createLinearGradient(0, 0, 0, H);
	// Moody overcast lake sky — blue-grey tones
	const overcast = isActive ? Math.min(bs * 0.6, 0.5) : 0.15;
	skyGrad.addColorStop(
		0,
		`rgb(${Math.round(18 + overcast * 8)},${Math.round(
			28 + overcast * 10
		)},${Math.round(42 + overcast * 15)})`
	);
	skyGrad.addColorStop(
		0.35,
		`rgb(${Math.round(28 + overcast * 10)},${Math.round(
			48 + overcast * 14
		)},${Math.round(72 + overcast * 20)})`
	);
	skyGrad.addColorStop(
		0.62,
		`rgb(${Math.round(48 + overcast * 12)},${Math.round(
			72 + overcast * 16
		)},${Math.round(92 + overcast * 22)})`
	);
	skyGrad.addColorStop(
		1,
		`rgb(${Math.round(22 + overcast * 8)},${Math.round(
			38 + overcast * 10
		)},${Math.round(55 + overcast * 16)})`
	);
	bgX.fillStyle = skyGrad;
	bgX.fillRect(0, 0, W, H);

	// Mouse glow in sky
	const skyGlow = bgX.createRadialGradient(
		W * rmx,
		H * rmy * 0.6,
		0,
		W * rmx,
		H * rmy * 0.6,
		W * (0.3 + dragEnergy * 0.1)
	);
	skyGlow.addColorStop(
		0,
		`rgba(105,195,215,${0.04 + bs * 0.08 + dragEnergy * 0.04})`
	);
	skyGlow.addColorStop(1, "transparent");
	bgX.fillStyle = skyGlow;
	bgX.fillRect(0, 0, W, H);

	// ── Mist layers ──
	for (let m = 0; m < 4; m++) {
		const my2 = 0.38 + m * 0.06;
		const mistX =
			(rmx - 0.5) * W * 0.03 * (m + 1) +
			Math.sin(t * 0.00008 * (m + 1)) * W * 0.04;
		const mist = bgX.createRadialGradient(
			W * 0.5 + mistX,
			H * my2,
			0,
			W * 0.5 + mistX,
			H * my2,
			W * (0.55 + m * 0.1)
		);
		mist.addColorStop(0, `rgba(155,195,215,${0.04 + m * 0.012 + bs * 0.02})`);
		mist.addColorStop(0.5, `rgba(105,155,185,${0.02 + m * 0.008})`);
		mist.addColorStop(1, "transparent");
		bgX.fillStyle = mist;
		bgX.fillRect(0, 0, W, H);
	}

	// ── Distant hills / shoreline ──
	const hillY = H * 0.48;
	// Far hill
	bgX.beginPath();
	bgX.moveTo(0, H);
	for (let x = 0; x <= W; x += 4) {
		const nx = x / W;
		const hy =
			hillY +
			Math.sin(nx * Math.PI * 1.4 + 0.5) * H * 0.06 +
			Math.sin(nx * Math.PI * 3.2) * H * 0.022;
		x === 0 ? bgX.moveTo(0, hy) : bgX.lineTo(x, hy);
	}
	bgX.lineTo(W, H);
	bgX.closePath();
	bgX.fillStyle = "rgba(15,30,25,0.72)";
	bgX.fill();
	// Near hill with pine silhouettes
	const nearHillY = H * 0.52;
	bgX.beginPath();
	for (let x = 0; x <= W; x += 4) {
		const nx = x / W;
		const hy =
			nearHillY +
			Math.sin(nx * Math.PI * 2.1 + 1.2) * H * 0.05 +
			Math.sin(nx * Math.PI * 5.8) * H * 0.012;
		x === 0 ? bgX.moveTo(0, hy) : bgX.lineTo(x, hy);
	}
	bgX.lineTo(W, H);
	bgX.closePath();
	bgX.fillStyle = "rgba(8,18,12,0.88)";
	bgX.fill();
	// Pine tree silhouettes on near ridge
	for (let i = 0; i < 32; i++) {
		const r2 = RNG(i * 41 + 9);
		const tx2 = r2() * W;
		const nx = tx2 / W;
		const baseY =
			nearHillY +
			Math.sin(nx * Math.PI * 2.1 + 1.2) * H * 0.05 +
			Math.sin(nx * Math.PI * 5.8) * H * 0.012;
		const th2 = H * (0.038 + r2() * 0.045);
		const tw2 = th2 * 0.38;
		// wind sway
		const sway =
			(rmx - 0.5) * tw2 * 0.4 +
			Math.sin(t * 0.00022 + i * 0.7) * tw2 * 0.18 * (1 + bs * 0.4);
		bgX.beginPath();
		bgX.moveTo(tx2 + sway, baseY);
		bgX.lineTo(tx2 - tw2 / 2 + sway * 0.7, baseY - th2 * 0.45);
		bgX.lineTo(tx2 + sway * 1.1, baseY - th2);
		bgX.lineTo(tx2 + tw2 / 2 - sway * 0.7, baseY - th2 * 0.45);
		bgX.closePath();
		bgX.fillStyle = "rgba(4,12,7,0.92)";
		bgX.fill();
		bgX.beginPath();
		bgX.moveTo(tx2 + sway, baseY - th2 * 0.4);
		bgX.lineTo(tx2 - (tw2 * 0.42) / 2 + sway * 0.8, baseY - th2 * 0.75);
		bgX.lineTo(tx2 + sway * 1.05, baseY - th2 * 1.12);
		bgX.lineTo(tx2 + (tw2 * 0.42) / 2 - sway * 0.8, baseY - th2 * 0.75);
		bgX.closePath();
		bgX.fill();
	}

	// ── Lake surface ──
	const lakeTop = H * 0.535;
	const lakeGrad = bgX.createLinearGradient(0, lakeTop, 0, H);
	lakeGrad.addColorStop(0, "rgba(18,38,55,0.95)");
	lakeGrad.addColorStop(0.3, "rgba(12,28,44,0.98)");
	lakeGrad.addColorStop(0.7, "rgba(8,20,32,1)");
	lakeGrad.addColorStop(1, "rgba(4,14,22,1)");
	bgX.fillStyle = lakeGrad;
	bgX.fillRect(0, lakeTop, W, H - lakeTop);

	// Sky reflection on lake
	const reflGrad = bgX.createLinearGradient(0, lakeTop, 0, H);
	reflGrad.addColorStop(0, `rgba(55,95,135,${0.18 + bs * 0.08})`);
	reflGrad.addColorStop(0.4, `rgba(28,58,85,${0.1 + bs * 0.05})`);
	reflGrad.addColorStop(1, "rgba(8,22,35,0)");
	bgX.fillStyle = reflGrad;
	bgX.fillRect(0, lakeTop, W, H - lakeTop);

	// Mouse glow on lake
	const lakeMouseGlow = bgX.createRadialGradient(
		W * rmx,
		Math.max(lakeTop + 20, H * (0.6 + rmy * 0.3)),
		0,
		W * rmx,
		Math.max(lakeTop + 20, H * (0.6 + rmy * 0.3)),
		W * (0.2 + dragEnergy * 0.08)
	);
	lakeMouseGlow.addColorStop(
		0,
		`rgba(105,195,215,${0.05 + dragEnergy * 0.06 + clickImpulse * 0.04})`
	);
	lakeMouseGlow.addColorStop(1, "transparent");
	bgX.fillStyle = lakeMouseGlow;
	bgX.fillRect(0, lakeTop, W, H - lakeTop);

	// Click ripples on lake
	clickRipples.forEach((r) => {
		const ry2 = r.y * H;
		if (ry2 < lakeTop) return;
		const rg = bgX.createRadialGradient(
			r.x * W,
			ry2,
			0,
			r.x * W,
			ry2,
			W * 0.14 * r.strength
		);
		rg.addColorStop(
			0,
			`rgba(105,195,215,${r.strength * 0.07 * Math.exp(-r.t * 1.0)})`
		);
		rg.addColorStop(1, "transparent");
		bgX.fillStyle = rg;
		bgX.fillRect(0, lakeTop, W, H - lakeTop);
	});

	// ── Lake wave ripples (concentric, from rain) ──
	// Auto-spawn lake ripples from seeds
	LAKE_RING_SEEDS.forEach((seed) => {
		seed.lastSpawn += 16;
		if (seed.lastSpawn > seed.spawnInterval) {
			seed.lastSpawn = 0;
			LAKE_RIPPLES.push({
				x: seed.x * W,
				y: lakeTop + Math.random() * (H - lakeTop) * 0.8,
				r: 0,
				maxR: W * (0.04 + Math.random() * 0.08),
				alpha: 0.28 + bs * 0.15,
				speed: 0.8 + Math.random() * 0.6
			});
		}
	});
	// Spawn ripples from click on lake area
	clickRipples.forEach((r) => {
		const ry2 = r.y * H;
		if (ry2 >= lakeTop && Math.random() < 0.4) {
			LAKE_RIPPLES.push({
				x: r.x * W,
				y: ry2,
				r: 0,
				maxR: W * (0.06 + r.strength * 0.06),
				alpha: 0.4 * r.strength,
				speed: 1.2 + r.strength
			});
		}
	});
	// Draw and age lake ripples
	for (let i = LAKE_RIPPLES.length - 1; i >= 0; i--) {
		const lr = LAKE_RIPPLES[i];
		lr.r += lr.speed;
		const progress = lr.r / lr.maxR;
		if (progress >= 1) {
			LAKE_RIPPLES.splice(i, 1);
			continue;
		}
		const a = lr.alpha * (1 - progress) * (1 - progress);
		// elliptical ripple (perspective)
		fxX.beginPath();
		fxX.ellipse(lr.x, lr.y, lr.r, lr.r * 0.32, 0, 0, Math.PI * 2);
		fxX.strokeStyle = `rgba(155,210,228,${a})`;
		fxX.lineWidth = 0.8 + progress * 0.4;
		fxX.stroke();
		// second inner ring
		if (lr.r > 8) {
			fxX.beginPath();
			fxX.ellipse(lr.x, lr.y, lr.r * 0.65, lr.r * 0.65 * 0.32, 0, 0, Math.PI * 2);
			fxX.strokeStyle = `rgba(155,210,228,${a * 0.45})`;
			fxX.lineWidth = 0.5;
			fxX.stroke();
		}
	}

	// ── Lake horizontal wave lines ──
	const windPush = (rmx - 0.5) * 0.4;
	for (let w2 = 0; w2 < 18; w2++) {
		const wyFrac = lakeTop / H + ((w2 + 1) / 19) * (1 - lakeTop / H);
		const wyAbs = wyFrac * H;
		const wAmp =
			H *
			(0.003 + w2 * 0.0008) *
			(0.5 + bs * 0.7) *
			(1 + Math.abs(rmx - 0.5) * 0.8 + dragEnergy * 0.5);
		const wSpeed = 0.00012 + w2 * 0.000018;
		fxX.beginPath();
		for (let x = 0; x <= W; x += 3) {
			const nx = x / W;
			let y =
				wyAbs +
				Math.sin(
					nx * Math.PI * 4 * (1 + w2 * 0.15) +
						t * wSpeed * (w2 + 1) * 4 +
						windPush * nx * 6
				) *
					wAmp +
				Math.sin(nx * Math.PI * 7 * (1 + w2 * 0.08) + t * wSpeed * (w2 + 0.5) * 6) *
					wAmp *
					0.38 +
				(rmx - 0.5) * wAmp * 0.6 * Math.sin(nx * Math.PI * 2.5);
			// click ripple distortion on lake
			for (const r of clickRipples) {
				const rx2 = r.x,
					ry2 = r.y;
				if (ry2 * H < lakeTop) continue;
				const dx = nx - rx2,
					age = r.t,
					wf = age * 0.45,
					sp2 = 0.08 + age * 0.12;
				y +=
					r.strength *
					wAmp *
					0.8 *
					Math.exp(-Math.pow(Math.abs(dx) - wf, 2) / (sp2 * sp2)) *
					Math.exp(-age * 0.8) *
					Math.sin((Math.abs(dx) - wf) * 25);
			}
			x === 0 ? fxX.moveTo(0, y) : fxX.lineTo(x, y);
		}
		const wAlpha = 0.03 + w2 * 0.008 + bs * 0.04;
		fxX.strokeStyle = `rgba(135,195,215,${wAlpha * (1 + dragEnergy * 0.4)})`;
		fxX.lineWidth = 0.5 + w2 * 0.04;
		fxX.stroke();
	}

	// ── Wind bands — horizontal streaks across sky ──
	WIND_BANDS.forEach((band, i) => {
		const windY = band.y * H * 0.52; // only in sky portion
		const windOffset = (t * band.speed + (rmx - 0.5) * 0.02) % (1 + 0.4); // mouse shifts wind
		const windAmp = H * band.amp * (0.5 + bs * 0.6 + dragEnergy * 0.4);
		tpX.beginPath();
		for (let x = 0; x <= W; x += 4) {
			const nx = x / W;
			const y =
				windY +
				Math.sin((nx + windOffset) * Math.PI * 2 * band.freq + band.phase) *
					windAmp +
				Math.sin(
					(nx + windOffset) * Math.PI * 3.7 * band.freq + t * band.speed * 3
				) *
					windAmp *
					0.3 +
				(rmy - 0.5) * windAmp * 0.4;
			x === 0 ? tpX.moveTo(0, y) : tpX.lineTo(x, y);
		}
		const windAlpha = (0.04 + i * 0.005 + bs * 0.03) * (1 + dragEnergy * 0.5);
		tpX.strokeStyle = `rgba(175,215,235,${windAlpha})`;
		tpX.lineWidth = 0.6 + Math.random() * 0.6;
		tpX.stroke();
	});
	// Extra bold wind gusts when dragging
	if (dragEnergy > 0.3) {
		for (let g = 0; g < 3; g++) {
			const gY = rmy * H * 0.55;
			tpX.beginPath();
			const windOffset2 = t * 0.0003;
			for (let x = 0; x <= W; x += 3) {
				const nx = x / W;
				const y =
					gY +
					(rmx - 0.5) * H * 0.06 +
					Math.sin(nx * Math.PI * 3 + windOffset2 * 8 + g) * H * 0.018 * dragEnergy +
					(nx - rmx) * H * 0.04 * dragEnergy;
				x === 0 ? tpX.moveTo(0, y) : tpX.lineTo(x, y);
			}
			tpX.strokeStyle = `rgba(195,230,245,${dragEnergy * 0.12 - g * 0.03})`;
			tpX.lineWidth = 1.2 - g * 0.3;
			tpX.stroke();
		}
	}

	// ── Full-screen rain ──
	const rainIntensity = isActive ? 0.7 + bs * 0.5 : 0.35;
	// Wind angle from mouse movement
	const windAngle = -0.06 + (rmx - 0.5) * 0.06 + mvx * 0.008;
	RAINDROPS2.forEach((drop, i) => {
		rainY[i] = (rainY[i] + drop.speed * (0.6 + rainIntensity) * 0.016) % 1;
		const rx2 = ((drop.x + windAngle * rainY[i] * 2.5 + 1.2) % 1.4) - 0.1;
		const ry2 = rainY[i] * H;
		const len = drop.len * (0.8 + rainIntensity * 0.4);
		const x1 = rx2 * W,
			y1 = ry2;
		const x2 = x1 + windAngle * len * 8,
			y2 = y1 - len;
		// fade out near lake surface (ripple effect there)
		const nearLake = Math.max(0, 1 - Math.abs(ry2 - lakeTop) / 60);
		const alpha = drop.alpha * rainIntensity * (1 - nearLake * 0.7);
		if (alpha < 0.01) return;
		tpX.beginPath();
		tpX.moveTo(x1, y1);
		tpX.lineTo(x2, y2);
		tpX.strokeStyle = `rgba(155,210,240,${alpha})`;
		tpX.lineWidth = drop.thickness;
		tpX.stroke();
		// Splash on lake surface
		if (
			y1 > lakeTop - 5 &&
			y1 < lakeTop + 12 &&
			Math.random() < 0.003 * rainIntensity
		) {
			LAKE_RIPPLES.push({
				x: x1,
				y: lakeTop + 2,
				r: 0,
				maxR: 8 + Math.random() * 12,
				alpha: 0.22,
				speed: 0.7 + Math.random() * 0.5
			});
		}
	});

	// Mouse wave overlay on lake
	drawMouseWave(t, [105, 195, 215], 0.06);
}


/* ═══ BARS ══ */
const barBox = document.getElementById("bar-counter");
function addBreathBar() {
	if (barBox.children.length >= 24) return;
	const th = T[mode],
		c = barBox.children.length,
		h = Math.round(2 + (30 - 2) * ((c + 1) / 24));
	const b = document.createElement("div");
	b.className = "breath-bar";
	b.style.height = "0";
	b.style.background = th.barCol;
	barBox.appendChild(b);
	requestAnimationFrame(() => {
		b.style.height = h + "px";
	});
}
function clearBars() {
	while (barBox.firstChild) barBox.removeChild(barBox.firstChild);
}


/* ═══ THEME ══ */
function applyTheme(m) {
	const th = T[m];
	document.body.style.background = th.bg;
	document.getElementById(
		"vig"
	).style.background = `radial-gradient(ellipse at 50% 50%, transparent 14%, ${th.vigA} 56%, ${th.vigB} 100%)`;
	document.getElementById("bar-lbl").style.color = th.barLbl;
	document.getElementById("sl-pattern").style.color = th.slPat;
	document.getElementById("sl-detail").style.color = th.slDet;
	const nav = document.getElementById("mode-track");
	nav.style.background = th.navBg;
	nav.style.borderColor = th.navBorder;
	document.getElementById("mode-thumb").style.background = th.thumbBg;
	document.querySelectorAll(".mode-pill").forEach((p) => {
		const isAct = p.dataset.mode === m;
		p.style.color = isAct ? th.pillActive : th.pillDim;
		p.style.background = isAct ? th.pillActiveBg : th.pillDimBg;
		p.style.fontWeight = isAct ? "700" : "500";
	});
	const [rr, rg, rb] = th.accent;
	document.getElementById("btn-label").style.color = `rgba(${Math.min(
		rr + 40,
		255
	)},${Math.min(rg + 40, 255)},${Math.min(rb + 40, 255)},.9)`;
	const fl = document.getElementById("mode-flash");
	fl.style.background = th.flashCol;
	fl.classList.add("pop");
	setTimeout(() => fl.classList.remove("pop"), 200);
}

/* ═══ NAV ══ */
const trk = document.getElementById("mode-track"),
	thm = document.getElementById("mode-thumb");
function posThumb(p) {
	const tr = trk.getBoundingClientRect(),
		pr = p.getBoundingClientRect();
	thm.style.left = pr.left - tr.left - 3 + "px";
	thm.style.width = pr.width + "px";
}
document.querySelectorAll(".mode-pill").forEach((p) => {
	p.addEventListener("click", () => {
		if (p.dataset.mode === mode) return;
		if (isActive) stopSession();
		mode = p.dataset.mode;
		posThumb(p);
		applyTheme(mode);
		textAnim = Math.floor(Math.random() * 6);
		const th = T[mode];
		buildHeroText(
			isActive ? th.heroAct : th.heroIdle,
			isActive ? th.tagAct : th.tagIdle
		);
		buildCueText(th.cueStart);
		document.getElementById("sl-pattern").textContent = th.pattern;
		document.getElementById("sl-detail").textContent = th.detail;
		clearBars();
		document.getElementById("track-name").classList.remove("show");
		natureCycleT = 0;
		classicalWavePhase = 0;
		LAKE_RIPPLES.length = 0;
	});
});

/* ═══ SESSION ══ */
const fillEl = document.getElementById("btn-fill"),
	labelEl = document.getElementById("btn-label");
function eio(t) {
	return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
const cueN = {
	inhale: "inhale slowly",
	hold: "hold gently",
	exhale: "exhale fully"
};

function startSession() {
	isActive = true;
	document.body.classList.add("active");
	textAnim = Math.floor(Math.random() * 6);
	const th = T[mode];
	phase = 0;
	timer = 0;
	breathCount = 0;
	clearBars();
	buildHeroText(th.heroAct, th.tagAct);
	buildCueText("inhale slowly");
	labelEl.textContent = "Stop";
	document.getElementById("sl-pattern").textContent = th.pattern;
	document.getElementById("sl-detail").textContent = th.detail;
	document.getElementById("ir1").style.animation = "none";
	document.getElementById("ir2").style.animation = "none";
	startAudio();
	if (mode !== "classical" && mode !== "jazz" && mode !== "nature") whoosh(true);
	if (mode === "anxiety") startAff();
	natureCycleT = 0;
}
function stopSession() {
	isActive = false;
	document.body.classList.remove("active");
	const th = T[mode];
	phase = 0;
	timer = 0;
	bs = 0;
	exhaleVal = 0;
	buildHeroText(th.heroIdle, th.tagIdle);
	buildCueText(th.cueStart);
	labelEl.textContent = "Begin";
	fillEl.style.transform = "scale(1)";
	fillEl.style.boxShadow = "";
	document.getElementById("ir1").style.animation = "";
	document.getElementById("ir2").style.animation = "";
	killAudio();
	stopAff();
	document.getElementById("track-name").classList.remove("show");
}
const btn = document.getElementById("breath-btn");
btn.addEventListener("click", () => {
	isActive ? stopSession() : startSession();
});

/* ═══ RENDER ══ */
let last = 0;
function render(ts) {
	const dt = Math.min(ts - last, 50);
	last = ts;
	bgX.clearRect(0, 0, W, H);
	const th = T[mode],
		[ar, ag, ab] = th.accent;

	if (isActive) {
		timer += dt * 0.001;
		const phs = th.phases,
			ph = phs[phase];
		const prog = Math.min(timer / ph.d, 1);
		if (ph.n === "inhale") bs = eio(prog);
		else if (ph.n === "hold") bs = 1;
		else if (ph.n === "exhale") bs = 1 - eio(prog);
		else bs = 0;
		if (timer >= ph.d) {
			timer = 0;
			phase = (phase + 1) % phs.length;
			if (phase === 0) {
				breathCount++;
				addBreathBar();
			}
			buildCueText(cueN[phs[phase].n] || "hold gently");
			if (mode !== "classical" && mode !== "jazz" && mode !== "nature") {
				if (phs[phase].n === "inhale") whoosh(true);
				if (phs[phase].n === "exhale") whoosh(false);
			}
		}
	} else {
		bs = (0.5 + 0.5 * Math.sin(ts * 0.00068)) * 0.3;
	}

	const ph = th.phases[phase];
	exhaleVal +=
		((!isActive
			? 0
			: ph && ph.n === "exhale"
			? Math.min(timer / ph.d, 1) * 0.85
			: 0) -
			exhaleVal) *
		(1 - Math.exp(-dt * 0.003));

	if (mode === "breathe") drawBreathe(ts, bs, exhaleVal);
	else if (mode === "meditate") drawMeditate(ts, bs, exhaleVal);
	else if (mode === "anxiety") drawAnxiety(ts, bs, exhaleVal);
	else if (mode === "nature") drawNature(ts, bs, exhaleVal);
	else if (mode === "classical") drawClassical(ts, bs, exhaleVal);
	else drawJazz(ts, bs, exhaleVal);

	const sc = 0.68 + bs * 0.78,
		bri = Math.round(bs * 90),
		alpha = 0.04 + bs * 0.24;
	// Click impulse pulses the button
	const btnPulse = 1 + clickImpulse * 0.04;
	fillEl.style.transform = `scale(${(sc * btnPulse).toFixed(3)})`;
	fillEl.style.background = `radial-gradient(circle at 40% 36%, rgba(${ar},${Math.min(
		(ag + bri * 0.6) | 0,
		255
	)},${Math.min((ab + bri * 0.3) | 0, 255)},${alpha + 0.14}) 0%, rgba(${
		(ar * 0.88) | 0
	},${Math.min((ag + bri * 0.35) | 0, 255)},${Math.min(
		(ab + bri * 0.18) | 0,
		255
	)},${alpha + 0.07}) 50%, rgba(${(ar * 0.62) | 0},${(ag * 0.58) | 0},${
		(ab * 0.48) | 0
	},${alpha * 0.5}) 100%)`;
	fillEl.style.borderColor = `rgba(${ar},${ag},${ab},${
		0.18 + bs * 0.58 + clickImpulse * 0.2
	})`;
	fillEl.style.boxShadow = `0 0 ${
		14 + bs * 62 + clickImpulse * 20
	}px rgba(${ar},${ag},${ab},${0.07 + bs * 0.25 + clickImpulse * 0.1}),0 0 ${
		30 + bs * 100
	}px rgba(${ar},${ag},${ab},${0.02 + bs * 0.09})`;

	animateText(ts);
	requestAnimationFrame(render);
}
requestAnimationFrame(render);

/* ═══ INIT ══ */
window.addEventListener("load", () => {
	applyTheme(mode);
	const th = T[mode];
	buildHeroText(th.heroIdle, th.tagIdle);
	buildCueText(th.cueStart);
	document.getElementById("sl-pattern").textContent = th.pattern;
	document.getElementById("sl-detail").textContent = th.detail;
	setTimeout(
		() => posThumb(document.querySelector('.mode-pill[data-mode="breathe"]')),
		60
	);
	setTimeout(() => document.getElementById("hero").classList.add("in"), 140);
	setTimeout(() => {
		document.getElementById("btn-wrap").classList.add("in");
		document.getElementById("cue").classList.add("show");
		document.getElementById("session-label").classList.add("show");
		document.getElementById("bar-counter").classList.add("show");
		document.getElementById("bar-lbl").classList.add("show");
	}, 560);
});
