const SHARED = {
  duration: 'random(0.1, 0.8)',
  repeat: -1,
  repeatRefresh: true,
}

gsap.set(['.tweeter', '.dial'], {
  transformOrigin: '50% 50%',
})

gsap.set('.note', {
  '--hue': () => gsap.utils.random(0, 359),
  transformOrigin: '50% 100%',
})

gsap.set('#speaker', {
  transformOrigin: '50% 100%',
})

const TWEETER_TWEEN = gsap.to('.tweeter', {
  duration: 0.2,
  scale: 1.1,
  repeat: -1,
  yoyo: true,
})

const genSpeakerTimeline = () => gsap
  .timeline({
    repeat: -1,
  })
  .to('#speaker', {
    scaleX: 1.05,
    scaleY: 0.95,
    duration: 0.2,
  })
  .to('#speaker', {
    scaleX: 0.95,
    scaleY: 1.05,
    y: -20,
    duration: 0.2,
  })
  .to('#speaker', {
    scaleX: 1,
    scaleY: 1,
    y: 0,
    duration: 0.2,
  })

const genStackTimeline = () => gsap
  .timeline({
    repeat: -1,
    yoyo: true,
    delay: 0.6,
    repeatDelay: 0.4,
  })
  .to('.stack', {
    y: -10,
    duration: 0.1,
    repeat: 1,
    yoyo: true,
  })
  .to(
    '.stack',
    {
      x: '-=5',
      duration: 0.2,
    },
    0
  )

const NOTE_TWEENS = gsap.from('.note', {
  repeat: -1,
  scale: 0,
  opacity: 0,
  ease: 'sine.inOut',
  y: () => gsap.utils.random(80, 100),
  duration: () => gsap.utils.random(0.25, 0.75),
})

const DIAL_TWEEN = gsap.to('.dial', {
  rotation: 'random(-355, 355)',
  ...SHARED,
})
const SLIDER_TWEEN = gsap.to('.slider__handle', {
  y: 'random(5, 45)',
  ...SHARED,
})

const MAIN = gsap.timeline()
  .add(DIAL_TWEEN, 0)
  .add(SLIDER_TWEEN, 0)
  .add(NOTE_TWEENS, 0)
  .add(TWEETER_TWEEN, 0)
  .add(genStackTimeline(), 0)
  .add(genSpeakerTimeline(), 0)

document.body.addEventListener('click', () => {
  if (MAIN.progress() !== 0) {
    MAIN.pause()
    MAIN.time(0)
  } else {
    MAIN.play()
  }
})