const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => panel.addEventListener('click', enlarge))
panels.forEach((panel) => panel.addEventListener('transitionend',toggleActive))

function enlarge() {
   this.classList.toggle('enlarge');
}

function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}