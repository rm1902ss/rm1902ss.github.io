const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', (e) => {
    e.preventDefault()
    navbarLinks.classList.toggle('active')
})

const showMoreLessBtn = document.querySelector('.show-more-less-btn')
const containerLong = document.querySelector('#long')

showMoreLessBtn.addEventListener('click', (event) => {
    containerLong.classList.toggle('hide')

    if(containerLong.classList.contains('hide')) {
        showMoreLessBtn.innerHTML = 'Show more'
    } else {
        showMoreLessBtn.innerHTML = 'Show less'
    }
})