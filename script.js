document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {

        document.querySelection(this.getAttribute('href')).scrollIntiView({
            behavior: 'smooth'
        });
    });
});