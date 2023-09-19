
/////////////ABOUT SECTION
let selectorAbout = document.querySelectorAll('.selector');
let contenido = document.querySelectorAll('.container-content');

cambiaAbout=function(){
    selectorAbout.forEach((element)=>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    })

    contenido.forEach((element)=>{
        if(element.classList.contains('active')){
            element.classList.remove('active');
        }
    })

    switch(this.id){
        case 'selector-nosotros':
            document.getElementById('content-nosotros').classList.add('active');
            break;
        case 'selector-shokunin':
            document.getElementById('content-shokunin').classList.add('active');
            break;
        case 'selector-katul':
            document.getElementById('content-katul').classList.add('active');
            break;
    }
    
    this.classList.add('active');
}
selectorAbout.forEach((element) => element.addEventListener('click', cambiaAbout));

const menutoggle = document.querySelector('.navigation');


menutoggle.onclick=()=>{
    menutoggle.classList.toggle('active');
}

/////////////EVENTOS PASADOS SECTION

document.querySelector('.eventos-pasados-slider-nav').addEventListener('click', (element) => {
    const slide = document.querySelector(element.target.getAttribute('href'));
    if (!slide) return;
    
    if (slide.scrollIntoViewIfNeeded) {
        element.preventDefault();
        slide.scrollIntoViewIfNeeded();
    } else if (slide.scrollIntoView) {
        element.preventDefault();
        slide.scrollIntoView();
    }
  });

  