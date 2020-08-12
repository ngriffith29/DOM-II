
// user gets thank you message for signing up
const signMeUpBtn = document.querySelector (".btn");
signMeUpBtn.addEventListener("click", function(e){
    e.stopPropagation()
    console.log("the user has signed up for fun in the sun");
    signMeUpBtn.textContent = "thanks for signing up"
});

const btncont = document.querySelectorAll('.destination')

console.log(btncont)

btncont.forEach((e, index) => {
    e.addEventListener("click", function(){
        console.log('parent click')
    })
})
  
// user gets alert to remember to sign up
const myFooter = document.querySelector (".footer");
myFooter.addEventListener("mouseover", function(){
   alert("Remember to sign up to get your 10% off code");
   console.log("user has been alerted");
});
// background turns black when an image is dragged
const drag = document.querySelector (".img-content");
drag.addEventListener("drag", function(){
   console.log("dragged image");
  document.body.style.background = "black";
});
// logo turns yellow when double clicked 
const logoHeading = document.querySelector(".logo-heading");
logoHeading.addEventListener("mousedown", function(){
    console.log("logo clicked")
   logoHeading.style.color = "#F0E68C";
});


//user  double clicks an image to dissapear
const imgVanish =  document.querySelector(".img-fluid");
imgVanish.addEventListener("click", function(){
   imgVanish.parentNode.removeChild(imgVanish);
});
// key down alert
window.onload = addEventListener("keydown", event => {
    if (event.keyCode === event.keyCode) {
     console.log(event.code)
    }
    // do something
  });



let last_known_scroll_position = 0;
let ticking = false;

window.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      console.log('User has scrolled')
      ticking = false;
    });

    ticking = true;
  }
});




const source = document.querySelector('h2');

source.addEventListener('copy', (event) => {
    const selection = document.getSelection();
    event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
    event.preventDefault();
});


signMeUpBtn.addEventListener("dblclick", function(){
    signMeUpBtn.remove()
})

signMeUpBtn.addEventListener('mouseover', function(){
  console.log('Hovered over sign me up')
})



//Message Input


window.onload = setTimeout(function(){
    

    console.log('window loaded')
}, 2000);

let a = document.body.querySelectorAll('a')


a.forEach((e) => e.addEventListener('click', function(e){
    e.preventDefault()
    console.log('prevented default behavior')
}))

window.addEventListener("wheel", function(){
    console.log('wheel is being used')
})

