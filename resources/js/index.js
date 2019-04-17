// Accordions
// ——————————————————
const container = document.querySelector('.accordion-container')

const getHeight = (accordion, content) => {
  const inner = content.children[0]
  const height = accordion.classList.contains('is-open') ? 0 : inner.getBoundingClientRect().height

  return height
}

const toggleAccordion = accordion => {
  accordion.classList.toggle('is-open')
}

const updateHeight = (el, height) => {
  el.style.height = `${height}px`
}

container.addEventListener('click', e => {
  const header = e.target.closest('.accordion-header')
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
    image.classList.remove('is-visible')

    const isLast = image.classList.contains('is-last')

    if (isLast) {
      image.classList.remove('is-last')
    }
  })

  // Add class to the current image
  images[currentImage].classList.add('is-visible')
}

// Define interval
const startLoop = () => {
  interval = setInterval(loop, 150)
}

// Stop the loop
galleryTag.addEventListener('mouseenter', startLoop)
galleryTag.addEventListener('touchstart', startLoop)

// Start again
galleryTag.addEventListener('mouseleave', () => clearInterval(interval))
galleryTag.addEventListener('touchend', () => clearInterval(interval))

// Menu
// ——————————————————
const nav = document.querySelector('ul')
const lists = document.querySelectorAll('nav ul li')
const active = document.querySelector('nav ul li.active')
const indicator = document.querySelector('span.indicator')

const getPosition = tag => {
  if (tag) {
    indicator.style.width = `${tag.offsetWidth}px`
    indicator.style.left = `${tag.offsetLeft}px`
  }
}

lists.forEach(list => {
  list.addEventListener('mouseenter', function() {
    getPosition(this)
  })
})

nav.addEventListener('mouseleave', () => getPosition(active))
getPosition(active)
