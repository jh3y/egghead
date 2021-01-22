const BUTTON = document.querySelector('button')
const DIV = document.querySelector('div')

const toggleFullscreen = () => {
  if (document.fullscreenElement)
    document.exitFullscreen()
  else
    DIV.requestFullscreen()
}

BUTTON.addEventListener('click', toggleFullscreen)

const onChange = () => {
  DIV.className = document.fullscreenElement ? 'fullscreen' : ''
}

document.addEventListener('fullscreenchange', onChange)