





const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove active class so animation can replay next time
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });

    reveals.forEach(el => observer.observe(el));





    const reveals2 = document.querySelectorAll('.reveal2');

    const observer2 = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            } else {
                // Remove active class so animation can replay next time
                entry.target.classList.remove('active');
            }
        });
    }, { threshold: 0.2 });

    reveals2.forEach(el => observer.observe(el));








const revealss = document.querySelectorAll('.reveals');

    const observers = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('actives');
            } else {
                // Remove active class so animation can replay next time
                entry.target.classList.remove('actives');
            }
        });
    }, { threshold: 0.2 });

    revealss.forEach(el => observer.observe(el));




    function openReservations() {
    document.getElementById('overlay').style.display = 'flex';
}
function closeReservations() {
    document.getElementById('overlay').style.display = 'none';
}