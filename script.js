document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('header nav a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            alert(`You clicked on ${this.textContent}`);
        });
    });
});
