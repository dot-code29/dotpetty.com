const toggleButton = document.getElementsByClassName('toggle_button')[0]
const links = document.getElementsByClassName('links')[1]

toggleButton.addEventListener('click', () => {
    links.classList.toggle('active')
})