const header2 = document.querySelector('.header2');
const restat = document.querySelector('.restat');
const restat2 = document.querySelector('.restat2');
function respat() {
	header2.classList.add('active-checkresp');
	restat.classList.add('active-checkresp');
	restat2.classList.add('active-checkresp');
}

function respat2() {
	restat.classList.remove('active-checkresp');
	restat2.classList.remove('active-checkresp');
	header2.classList.remove('active-checkresp');
}

const gb = document.querySelector('.gb');
const hb = document.querySelector('.hb');
const mb = document.querySelector('.mb');
const db = document.querySelector('.db');
const zsb = document.querySelector('.zsb');
const bb = document.querySelector('.bb');
const openg = document.querySelector('.openg');
const openh = document.querySelector('.openh');
const openm = document.querySelector('.openm');
const opend = document.querySelector('.opend');
const openzs = document.querySelector('.openzs');
const openb = document.querySelector('.openb');
const iconClose = document.querySelector('.icon-close');

openg.addEventListener('click', ()=> {
    gb.classList.add('active-popup');
});
openh.addEventListener('click', ()=> {
    hb.classList.add('active-popup');
});
openm.addEventListener('click', ()=> {
    mb.classList.add('active-popup');
});
opend.addEventListener('click', ()=> {
    db.classList.add('active-popup');
});
openzs.addEventListener('click', ()=> {
    zsb.classList.add('active-popup');
});
openb.addEventListener('click', ()=> {
    bb.classList.add('active-popup');
});
iconClose.addEventListener('click', ()=> {
    window.classList.remove('active-popup');
});