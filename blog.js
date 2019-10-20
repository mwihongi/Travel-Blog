


const images= document.querySelectorAll('.img-container')
images.forEach(image => {
image.addEventListener('mouseover', () =>{
    console.log(image.childNodes);
    image.childNodes[1].classList.toggle('img-darken');
});

image.addEventListener('mouseout', () =>{
    image.childNodes[1].classList.toggle('img-darken');
});

});




// const collapse = document.getElementsByClassName ('text-wrapper')
// for (i=0; i < collapse.length; i++){
//     collapse[i].addEventListener('click', function(){
//         this.classList.toggle('active text-wrapper');
//     } )
// }

// const show = document.getElementsByClassName('overlay')
// show.addEventListener('mouseover', function(){
// this.classList.toggle ('reveal');
// });


