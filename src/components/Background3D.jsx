import { useEffect, useRef } from "react";

// Fixed 3D animated background: depth starfield canvas (warp effect)
// + CSS3 3D layers (glowing orbs, perspective grid floor, rotating wireframe cubes)
export default function Background3D() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    let w = 0;
    let h = 0;
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    const STAR_COUNT = 170;
    let stars = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * DPR;
      canvas.height = h * DPR;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };

    const newStar = (initial = false) => ({
      x: (Math.random() - 0.5) * w * 1.6,
      y: (Math.random() - 0.5) * h * 1.6,
      z: initial ? Math.random() * 1 : 1, // depth 0 (far) -> 1 (near)
      size: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.0035 + 0.0012,
      hue: Math.random() > 0.7 ? "129,140,248" : "56,189,248", // indigo or sky
      tw: Math.random() * Math.PI * 2,
    });

    resize();
    stars = Array.from({ length: STAR_COUNT }, () => newStar(true));
    window.addEventListener("resize", resize);

    const onMouse = (e) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    const cx = () => w / 2 + mouse.current.x * -24;
    const cy = () => h / 2 + mouse.current.y * -24;

    const tick = () => {
      ctx.clearRect(0, 0, w, h);

      const centerX = cx();
      const centerY = cy();

      for (const s of stars) {
        s.z -= s.speed;
        s.tw += 0.03;
        if (s.z <= 0.02) Object.assign(s, newStar(false));

        // perspective projection — far = near center, near = spread out
        const scale = 1 / Math.max(s.z, 0.02);
        const px = centerX + s.x * scale * 0.55;
        const py = centerY + s.y * scale * 0.55;

        if (px < -50 || px > w + 50 || py < -50 || py > h + 50) {
          Object.assign(s, newStar(false));
          continue;
        }

        const alpha = Math.min(1, (1 - s.z) * 0.9 + 0.1) * (0.55 + Math.sin(s.tw) * 0.25);
        const r = s.size * scale * 0.9;

        // glow dot
        ctx.beginPath();
        ctx.fillStyle = `rgba(${s.hue},${alpha.toFixed(3)})`;
        ctx.arc(px, py, Math.max(r, 0.4), 0, Math.PI * 2);
        ctx.fill();

        // warp streak for near particles (3D speed feel)
        if (s.z < 0.35) {
          const len = (0.35 - s.z) * 90;
          const dx = px - centerX;
          const dy = py - centerY;
          const dist = Math.hypot(dx, dy) || 1;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(${s.hue},${(alpha * 0.5).toFixed(3)})`;
          ctx.lineWidth = Math.max(r * 0.7, 0.5);
          ctx.moveTo(px, py);
          ctx.lineTo(px - (dx / dist) * len, py - (dy / dist) * len);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden bg-slate-950 pointer-events-none">
      {/* canvas depth field */}
      <canvas ref={canvasRef} className="absolute inset-0" />

      {/* glowing orbs with 3D float */}
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />

      {/* perspective 3D grid floor */}
      <div className="grid-floor-wrap">
        <div className="grid-floor" />
      </div>

      {/* rotating wireframe cubes — pure CSS 3D */}
      <div className="cube-scene cube-pos-1">
        <div className="cube cube-spin-a">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>
      <div className="cube-scene cube-pos-2">
        <div className="cube cube-sm cube-spin-b">
          <div className="cube-face cube-front" />
          <div className="cube-face cube-back" />
          <div className="cube-face cube-right" />
          <div className="cube-face cube-left" />
          <div className="cube-face cube-top" />
          <div className="cube-face cube-bottom" />
        </div>
      </div>

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(2,6,23,0.85)_100%)]" />
    </div>
  );
}
