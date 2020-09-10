gsap.set('.tweeter', {
  transformOrigin: '50% 50%'
})
gsap.to('.tweeter', {
  duration: 0.2,
  scale: 1.1,
  repeat: -1,
  yoyo: true,
})

gsap.set('#speaker', {
  transformOrigin: '50% 100%'
})

gsap.timeline({
  repeat: -1
})
  .to('#speaker', {
    scaleX: 1.05,
    scaleY: 0.95,
    duration: 0.2
  })
  .to('#speaker', {
    scaleX: 0.95,
    scaleY: 1.05,
    y: -20,
    duration: 0.2
  })
  .to('#speaker', {
    scaleX: 1,
    scaleY: 1,
    y: 0,
    duration: 0.2
  })

gsap.timeline({
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
  .to('.stack', {
    x: '-=5',
    duration: 0.2,
  }, 0)