import Lenis from 'lenis'

const isMobile = window.matchMedia('(max-width: 768px)').matches

const lenis = !isMobile ? new Lenis({
	duration: 1.2,
	easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
	direction: 'vertical',
	gestureDirection: 'vertical',
	smooth: true,
	mouseMultiplier: 1,
	smoothTouch: false,
	touchMultiplier: 2,
	infinite: false,
}) : null

function raf(time) {
  if (lenis) lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)