const COPY = document.querySelector('#copy')
const PASTE = document.querySelector('#paste')
const VALUE = document.querySelector('#value')
const BIN = document.querySelector('#paste-bin')

COPY.addEventListener('click', async () => {
  await navigator.clipboard.writeText(VALUE.value)
  alert('Copied!')
})

PASTE.addEventListener('click', async () => {
  const READ = await navigator.clipboard.readText()
  BIN.value = READ
})