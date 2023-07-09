// select all the blur images:
const blurimages = document.querySelectorAll('.blur');
// loop over all images of blur:
blurimages.forEach(div=>{
    //selecting the image inside of the blurimages div:
    const image = div.querySelector('img');
    // creating the image show function
    function loaded(){
        // show the image:
        div.classList.add('loaded');
    }
    if(image.complete){
        loaded()
    }
    else{
        image.addEventListener('load',loaded);
    }
})