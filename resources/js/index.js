// Accordions
// ——————————————————
const container = document.querySelector('.services')

const getHeight = (accordion, content) => {
  const inner = content.children[0]
  const height = accordion.classList.contains('js-is-open')
    ? 0
    : inner.getBoundingClientRect().height

  return height
}

const toggleAccordion = accordion => {
  accordion.classList.toggle('js-is-open')
}

const updateHeight = (element, height) => {
  element.style.height = `${height}px`
}

container.addEventListener('click', e => {
  const header = e.target.closest('.accordion__header')
  if (!header) return

  const accordion = header.parentElement
  const content = header.nextElementSibling
  const height = getHeight(accordion, content)

  updateHeight(content, height)
  toggleAccordion(accordion)
})

// Gallery
// ——————————————————
const galleryTag = document.querySelector('.gallery')
const images = document.querySelectorAll('img')

let currentImage = 0
let interval = 0

// Loop
const loop = () => {
  currentImage += 1
  if (currentImage > images.length - 1) {
    currentImage = 0
  }

  // Remove class
  images.forEach(image => {
    image.classList.remove('js-is-visible')
  })

  // Add class to the current image
  images[currentImage].classList.add('js-is-visible')
}

// Define interval
const startLoop = () => {
  interval = setInterval(loop, 150)
}

// Stop the loop
galleryTag.addEventListener('mouseenter', () => {
  startLoop()
})

// Start again
galleryTag.addEventListener('mouseleave', () => {
  clearInterval(interval)
})

// Mobile touch
galleryTag.addEventListener('touchstart', () => {
  startLoop()
})

galleryTag.addEventListener('touchend', () => {
  clearInterval(interval)
})
