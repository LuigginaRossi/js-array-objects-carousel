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

// creo array imgs
const images = imagesList.map( function(element){
    let image= element.image
     return image
})

console.log(images)

//prendo container carousel
const carouselEl = document.querySelector(".carousel");
console.log(carouselEl)

let currentIndex = 0;
console.log(currentIndex);

images.forEach(function(element, i, array){
    
    console.log(i);
     // creo elemento carousel-item
     const carouselItemEL = document.createElement("div");
     const imgEl = document.createElement("img");
     const carouselCaptionEl = document.createElement("div");
 
     //attribuisco proprietà:
     carouselItemEL.classList.add("carousel-item", "active");
 
     imgEl.classList.add("d-block", "w-100")
     imgEl.src = images[i];

     if ( i === currentIndex){
        imgEl.classList.add("opacity");
    }
 
     carouselCaptionEl.classList.add("carousel-caption", "pb-5");
     carouselCaptionEl.innerHTML = `<h5> ${imagesList[i].title} </h5>
     <p> ${imagesList[i].text} </p>`;
     // appendo:
     carouselItemEL.append(imgEl, carouselCaptionEl);
 
     carouselEl.append(carouselItemEL);

})


//prendo i button da html
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
console.log( btnNext, btnPrev);


btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

        currentIndex ++;
        console.log(currentIndex)

        const oldImg = carouselEl.querySelector(".opacity")
        oldImg.classList.remove("opacity")
        console.log("oldimg:", oldImg)

        if(currentIndex >= images.length){
            currentIndex = -1;
        }
        
        console.log(images[currentIndex]);

        //individuo nuovo elemento al quale dare active
});

btnPrev.addEventListener("click", function() {
  console.log("hai cliccato il btn prev");

     currentIndex --;
     console.log(currentIndex)

    // //se currentindeximgindes< 0 allora torna a 4:
     if ( currentIndex < 0){

       currentIndex = images.length - 1;
       console.log(currentIndex);
     }

});


// ---------------

// for (let i= 0; i < images.length; i++ ) {
//   const currentImgIndex = images[i]

//   const sliderImgEl = document.createElement("img");

//   sliderImgEl.scr = currentImgIndex;

//   sliderContainerEl.append(sliderImgEl)
// }

// -------







