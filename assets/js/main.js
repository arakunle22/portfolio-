/*=============== FILTERS TABS ===============*/

const tabs =  document.querySelectorAll('[data-target]'),
      tabCOntents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabCOntents.forEach(tc =>{ /* tc = tabcontent */
            tc.classList.remove('filters__active')
        })

        target.classList.add('filters__active')

        tabs.forEach(t =>{  /* t = tab */
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})
/*=============== DARK LIGHT THEME ===============*/

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has validating the dark-them class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // if the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}
 
// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: "400",
})

// Experience items reveal
sr.reveal(".experience__item", {
  origin: "right",
  distance: "50%",
  duration: 1200,
  interval: 200,
})

sr.reveal('.profile__border')
sr.reveal('.profile__name', {delay: 500})
sr.reveal('.profile__profession', {delay: 500})
sr.reveal('.profile__social', {delay: 700})
sr.reveal('.profile__info-group', {interval: 100, delay: 700})
sr.reveal('.profile__buttons', {delay: 800})
sr.reveal('.filters__content', {delay: 900})
sr.reveal('.filters', {delay: 1000})


// Experience section animation
// Experience section animation
const experienceItems = document.querySelectorAll(".experience__item")

const showExperienceItem = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show")
      observer.unobserve(entry.target)
    }
  })
}

const experienceObserver = new IntersectionObserver(showExperienceItem, {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px",
})

experienceItems.forEach((item) => {
  experienceObserver.observe(item)
})

// Scroll to top functionality
const scrollToTopButton = document.getElementById("scrollToTop")

const toggleScrollToTopButton = () => {
  if (window.pageYOffset > 300) {
    scrollToTopButton.classList.add("show")
  } else {
    scrollToTopButton.classList.remove("show")
  }
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

window.addEventListener("scroll", toggleScrollToTopButton)
scrollToTopButton.addEventListener("click", scrollToTop)


// Parallax effect for profile background
const profileContainer = document.querySelector(".profile__container")
window.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / window.innerWidth
  const mouseY = e.clientY / window.innerHeight
  profileContainer.style.setProperty("--mouse-x", mouseX)
  profileContainer.style.setProperty("--mouse-y", mouseY)
})

// Typing animation for the profession
const professionElement = document.querySelector(".profile__profession")
const professionText = professionElement.textContent
professionElement.textContent = ""

const typeWriter = (text, i = 0) => {
  if (i < text.length) {
    professionElement.textContent += text.charAt(i)
    setTimeout(() => typeWriter(text, i + 1), 100)
  }
}

setTimeout(() => typeWriter(professionText), 1000)

// Project hover effect
const projectCards = document.querySelectorAll(".projects__card")
projectCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".projects__img").style.transform = "scale(1.1)"
    card.querySelector(".projects__modal").style.opacity = "1"
  })
  card.addEventListener("mouseleave", () => {
    card.querySelector(".projects__img").style.transform = "scale(1)"
    card.querySelector(".projects__modal").style.opacity = "0"
  })
})

// Skills progress animation
const skillLevels = document.querySelectorAll(".skills__level")
skillLevels.forEach((level) => {
  const percent = level.textContent
  level.style.setProperty("--percent", percent)
  level.innerHTML = `<div class="skills__level-bar"></div>${percent}`
})

// Scroll reveal animation for services
sr.reveal(".services__card", {
  origin: "bottom",
  distance: "50px",
  duration: 1800,
  interval: 100,
})

// Add hover effect for service cards
const serviceCards = document.querySelectorAll(".services__card")
serviceCards.forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.querySelector(".services__icon").style.transform = "scale(1.2) rotate(10deg)"
  })

  card.addEventListener("mouseleave", () => {
    card.querySelector(".services__icon").style.transform = "scale(1) rotate(0)"
  })
})


