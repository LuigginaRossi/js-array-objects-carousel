const imagesList = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(imagesList[0].text)

// creo array immagini principali:
const images = imagesList.map( function(element){
    let image= element.image
     return image
});

console.log(images);

const carouselEl = document.querySelector(".carousel");
console.log(carouselEl);

const sideContainerEl = document.querySelector(".side-container")
console.log(sideContainerEl)

let currentIndex = 0;
console.log(currentIndex);


//stampo immagini:
images.forEach(function(element, i, array){
    
    console.log(i);
    // creo elementi principali:
    const carouselItemEL = document.createElement("div");
    const imgEl = document.createElement("img");
    const carouselCaptionEl = document.createElement("div");

    carouselCaptionEl.innerHTML = `<h5> ${imagesList[i].title} </h5>
    <p> ${imagesList[i].text} </p>`;
 
    //attribuisco proprietà:
    carouselItemEL.classList.add("carousel-item", "active");
 
    imgEl.classList.add("w-100", "slider-img");
    imgEl.src = images[i];

    carouselCaptionEl.classList.add("carousel-caption", "pb-5");
     
    // appendo immagini principali:
    carouselItemEL.append(imgEl, carouselCaptionEl);
    carouselEl.append(carouselItemEL);

    // creo elementi side-bar:
    const sideImgEl = document.createElement("img");
    sideImgEl.classList.add("side-img");
    sideImgEl.src = images[i];
    console.log(sideImgEl)
    //appendo:
    sideContainerEl.append(sideImgEl);

    //alla img con indice 0:
    if ( i === currentIndex){
        imgEl.classList.add("active-element");
        sideImgEl.classList.add("active-element");
        console.log(sideImgEl.outerHTML)
    }

});

//prendo i button da html
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
console.log( btnNext, btnPrev);


btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

        currentIndex ++;

        if(currentIndex >= images.length -1){
            currentIndex = 0;
        }
        
        console.log(currentIndex);

        // tolgo la  classe active-element a quasiasi elemento della parte principale:
        const oldActiveEl = carouselEl.querySelector(".active-element");
        oldActiveEl.classList.remove("active-element");

        // tolgo la  classe active-element a quasiasi elemento della parte laterale:
        const oldSideActiveEl = sideContainerEl.querySelector(".active-element");
        oldSideActiveEl.classList.remove("active-element");

        //trovo nuovo elemento:
        const imageELs = carouselEl.querySelectorAll( "img" );
        const newActiveEl = imageELs[currentIndex];
        console.log(newActiveEl);

        newActiveEl.classList.add("active-element");

        //trovo nuovo elemento:
        const sideImgELs = sideContainerEl.querySelectorAll( "img" );
        const newSideActiveEl = sideImgELs[currentIndex];
        console.log(newSideActiveEl);

        newSideActiveEl.classList.add("active-element");
        
});

btnPrev.addEventListener("click", function() {
  console.log("hai cliccato il btn prev");

    currentIndex --;

    //se currentindeximgindes< 0 allora torna a 4:
    if ( currentIndex < 0){
      currentIndex = images.length -1;
    }

    // tolgo la  classe active-element a quasiasi elemento della parte principale:
    const oldActiveEl = carouselEl.querySelector(".active-element");
    oldActiveEl.classList.remove("active-element");

    // tolgo la  classe active-element a quasiasi elemento della parte laterale:
    const oldSideActiveEl = sideContainerEl.querySelector(".active-element");
    oldSideActiveEl.classList.remove("active-element");

    //trovo nuovo elemento:
    const imageELs = carouselEl.querySelectorAll( "img" );
    const newActiveEl = imageELs[currentIndex];
    
    newActiveEl.classList.add("active-element");

    //trovo nuovo elemento:
    const sideImgELs = sideContainerEl.querySelectorAll( "img" );
    const newSideActiveEl = sideImgELs[currentIndex];

    newSideActiveEl.classList.add("active-element");

});








