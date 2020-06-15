/* Gallery Controller Variables */
let imageIndex = 0; // Current image.
let displayImg = document.querySelector('.gallery__visor'); // Global Visor image displayer.
let galleryImg = document.querySelectorAll('.gallery__item img'); // Select the thumbnail gallery image.

// Arrow controller
let arrowController = (e) => {
    let direction = e.target.dataset.direction;

    /* Active experiment */
    galleryImg[imageIndex].classList.toggle('active');
    /**/
    /* Display Transition Experiment */
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
    /**/

    if (direction == "left") {
        if (imageIndex > 0) {
            imageIndex--;
        } else {
            imageIndex = galleryImg.length - 1;
        }
    } else {
        if (imageIndex < galleryImg.length - 1) {
            imageIndex++;
        } else {
            imageIndex = 0;
        }
    }

    //let visor = document.querySelector('.visor');
    let newImg = galleryImg[imageIndex].src;
    displayImg.querySelector('.visor--img').src = newImg;
    /* Active experiment */
    galleryImg[imageIndex].classList.toggle('active');
    /**/
}

/* Change the image to display */
let changeVisorImg = e => {
    let newImg = e.target.src;
    /* Active image */
    galleryImg[imageIndex].classList.toggle('active');
    e.target.classList.toggle('active');
    /* */

    /* Display Transition Experiment */
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeIn');
    displayImg.querySelector('.visor--img').classList.toggle('transition-fadeInPersist');
    /**/

    let thisImageIndex = e.target.dataset.index; //Select the index data of the current image. 
    imageIndex = thisImageIndex; //Change the global value of the imageIndex.

    displayImg.querySelector('.visor--img').src = newImg; //Replace the image src for the new one.
}

