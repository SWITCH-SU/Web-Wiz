import { Renderer, Program, Mesh, Color, Triangle } from "ogl";
import { useEffect, useRef } from "react";

const vertexShader = `
attribute vec2 uv;
attribute vec2 position;

varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0, 1);
}
`;

const fragmentShader = `
precision highp float;

uniform float uTime;
uniform vec3 uColor;
uniform vec3 uResolution;
uniform vec2 uMouse;
uniform float uAmplitude;
uniform float uSpeed;

varying vec2 vUv;

void main() {
  float mr = min(uResolution.x, uResolution.y);
  vec2 uv = (vUv.xy * 2.0 - 1.0) * uResolution.xy / mr;

  uv += (uMouse - vec2(0.5)) * uAmplitude;

  float d = -uTime * 0.5 * uSpeed;
  float a = 0.0;
  for (float i = 0.0; i < 8.0; ++i) {
    a += cos(i - d - a * uv.x);
    d += sin(uv.y * i + a);
  }
  d += uTime * 0.5 * uSpeed;
  vec3 col = vec3(cos(uv * vec2(d, a)) * 0.6 + 0.4, cos(a + d) * 0.5 + 0.5);
  col = cos(col * cos(vec3(d, a, 2.5)) * 0.5 + 0.5) * uColor;
  gl_FragColor = vec4(col, 1.0);
}
`;

export default function Iridescence({
  color = [1, 1, 1],
  speed = 1.0,
  amplitude = 0.1,
  mouseReact = true,
  ...rest
}) {
  const ctnDom = useRef(null);
  const mousePos = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!ctnDom.current) return;

    // WebGL availability check
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      console.error('WebGL not supported');
      return;
    }

    const ctn = ctnDom.current;
    const renderer = new Renderer({
      canvas: canvas,
      width: ctn.offsetWidth,
      height: ctn.offsetHeight,
      antialias: true,
      dpr: window.devicePixelRatio
    });
    
    const rendererGL = renderer.gl;
    rendererGL.clearColor(0, 0, 0, 1);

    // Set canvas styles
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    ctn.appendChild(canvas);

    const geometry = new Triangle(rendererGL);
    const program = new Program(rendererGL, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uColor: { value: new Color(...color) },
        uResolution: {
          value: [
            rendererGL.canvas.width,
            rendererGL.canvas.height,
            rendererGL.canvas.width / rendererGL.canvas.height
          ]
        },
        uMouse: { value: [mousePos.current.x, mousePos.current.y] },
        uAmplitude: { value: amplitude },
        uSpeed: { value: speed },
      },
    });

    const mesh = new Mesh(rendererGL, { geometry, program });
    let animationId;

    function resize() {
      renderer.setSize(ctn.offsetWidth, ctn.offsetHeight);
      program.uniforms.uResolution.value = [
        rendererGL.canvas.width,
        rendererGL.canvas.height,
        rendererGL.canvas.width / rendererGL.canvas.height
      ];
    }

    function update(t) {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      renderer.render({ scene: mesh });
    }

    function handleMouseMove(e) {
      const rect = ctn.getBoundingClientRect();
      mousePos.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: 1.0 - (e.clientY - rect.top) / rect.height
      };
      program.uniforms.uMouse.value = [mousePos.current.x, mousePos.current.y];
    }

    // Initial setup
    resize();
    animationId = requestAnimationFrame(update);
    window.addEventListener('resize', resize);
    if (mouseReact) ctn.addEventListener('mousemove', handleMouseMove);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      if (mouseReact) ctn.removeEventListener('mousemove', handleMouseMove);
      ctn.removeChild(canvas);
      rendererGL.getExtension('WEBGL_lose_context')?.loseContext();
    };
  }, [color, speed, amplitude, mouseReact]);

  return (
    <div
      ref={ctnDom}
      className="absolute inset-0 w-full h-full"
      {...rest}
    />
  );
}