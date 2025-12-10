function openReservation1() {
    document.getElementById('overflow1').style.display = 'flex';
}
function closeReservation1() {
    document.getElementById("overflow1").style.display = "none";
}

function openReservation2() {
    document.getElementById('overflow2').style.display = 'flex';
}
function closeReservation2() {
    document.getElementById("overflow2").style.display = "none";
}

function openReservation3() {
    document.getElementById('overflow3').style.display = 'flex';
}
function closeReservation3() {
    document.getElementById('overflow3').style.display = 'none';
}

function openReservation4() {
    document.getElementById('overflow4').style.display = 'flex';
}
function closeReservation4() {
    document.getElementById('overflow4').style.display = 'none';
}

function openReservation5() {
    document.getElementById('overflow5').style.display = 'flex';
}
function closeReservation5() {
    document.getElementById('overflow5').style.display = 'none';
}

function openReservation6() {
    document.getElementById('overflow6').style.display = 'flex';
}
function closeReservation6() {
    document.getElementById('overflow6').style.display = 'none';
}

function openReservation7() {
    document.getElementById('overflow7').style.display = 'flex';
}
function closeReservation7() {
    document.getElementById('overflow7').style.display = 'none';
}

function openReservation8() {
    document.getElementById('overflow8').style.display = 'flex';
}
function closeReservation8() {
    document.getElementById('overflow8').style.display = 'none';
}

function openReservation9() {
    document.getElementById('overflow9').style.display = 'flex';
}
function closeReservation9() {
    document.getElementById('overflow9').style.display = 'none';
}

function openReservation10() {
    document.getElementById('overflow10').style.display = 'flex';
}
function closeReservation10() {
    document.getElementById('overflow10').style.display = 'none';
}

function openReservation11() {
    document.getElementById('overflow11').style.display = 'flex';
}
function closeReservation11() {
    document.getElementById('overflow11').style.display = 'none';
}

function openReservation12() {
    document.getElementById('overflow12').style.display = 'flex';
}
function closeReservation12() {
    document.getElementById('overflow12').style.display = 'none';
}

function openReservation13() {
    document.getElementById('overflow13').style.display = 'flex';
}
function closeReservation13() {
    document.getElementById('overflow13').style.display = 'none';
}

function openReservation14() {
    document.getElementById('overflow14').style.display = 'flex';
}
function closeReservation14() {
    document.getElementById('overflow14').style.display = 'none';
}

function openReservation15() {
    document.getElementById('overflow15').style.display = 'flex';
}
function closeReservation15() {
    document.getElementById('overflow15').style.display = 'none';
}

function openReservation16() {
    document.getElementById('overflow16').style.display = 'flex';
}
function closeReservation16() {
    document.getElementById('overflow16').style.display = 'none';
}

function openReservation17() {
    document.getElementById('overflow17').style.display = 'flex';
}
function closeReservation17() {
    document.getElementById('overflow17').style.display = 'none';
}

function openReservation18() {
    document.getElementById('overflow18').style.display = 'flex';
}
function closeReservation18() {
    document.getElementById('overflow18').style.display = 'none';
}



function openReservation() {
    document.getElementById('overlay').style.display = 'flex';
}
function closeReservation() {
    document.getElementById('overlay').style.display = 'none';
}








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