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

// creo array imgs
const images = imagesList.map( function(element){
    let image= element.image
    return image
})

console.log(images)

//prendo slide-containet da html
const sliderContainerEl = document.querySelector(".slider-container");
console.log(sliderContainerEl)

//indice attuale è 0
let currentImgIndex = 0;
console.log(currentImgIndex)


for (let i = 0;  i < images.length; i++) {  
    // //aggiungo dentro al slider-container un tag img con indice 0
    // sliderContainerEl.innerHTML += `<img src="${images[i]}" class="slider-img">`;
   
    // console.log(sliderContainerEl)
    // // // currentImgIndex++; 

    // const sliderImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    // console.log(sliderImgEl)

    // if ( i === 0 ) {
    //   sliderImgEl.classList.add("d-block");
    // }
}

//prendo i button da html
const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
console.log( btnNext, btnPrev);

btnNext.addEventListener("click", function() {
    console.log("hai cliccato il btn next");

    // // c'è un'immagine che ha la classe d-block
    // // da quell'immagine togli la classe
    // const oldImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1 } )` );
    // console.log('old image', oldImage);

    // oldImage.classList.remove("d-block");

    // // incrementi la variabile currentImgIndex
    // currentImgIndex++;

    // // verificare che il nuovo currentImgIndex non sia oltre i limiti
    // // se lo è o lo mettiamo a zero (se il bottone è next), altirmenti il contrario

    // if ( currentImgIndex > (images.length - 1)){
    //     currentImgIndex = 0 ;
    // }        

    // // e quella dopo la mostri dandole d-block
    // //aggiorno scr dell'immagine perndendo l'indice dall'currentimgIndex
    // const newImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    // newImage.classList.add("d-block");
    // // decremento la variabile currentImgIndex

    // console.log(currentImgIndex);
});

btnPrev.addEventListener("click", function() {
  console.log("hai cliccato il btn prev");
    
    // const ImgEl = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    // console.log(ImgEl)
    // //const oldImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex + 1} )` );
    // //console.log('old image', oldImage);

    // //oldImage.classList.remove("d-block");

    // //decremento il contatore dell' valore images:
    // currentImgIndex--;

    // //se currentindeximgindes<0 allora lo reimposto a 0:
    // if ( currentImgIndex < 0 ){
    //   currentImgIndex = images.length ;
    //   console.log(currentImgIndex)
    // }

    // //const newImage = document.querySelector( `.slider-container :nth-child( ${currentImgIndex} )` );
    // //newImage.classList.add("d-block")
    
    // //console.log(newImage);
});


// ---------------

// for (let i= 0; i < images.length; i++ ) {
//   const currentImgIndex = images[i]

//   const sliderImgEl = document.createElement("img");

//   sliderImgEl.scr = currentImgIndex;

//   sliderContainerEl.append(sliderImgEl)
// }

// -------







