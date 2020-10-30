document.addEventListener('click', () => {
  document.documentElement.style.setProperty(
    '--dark',
    document.documentElement.style.getPropertyValue('--dark') === '1' ? 0 : 1
  )
})
