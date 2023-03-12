window.addEventListener('scroll', () => {
	hamburger.classList.remove("active");
	navMenu.classList.remove("active");
})

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})


window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#F473B9", "#8BDB81", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#67db58", "#faebd7", "#F473B9"],
        maxParticles: 143,
        connectParticles: false
      }
    }
  ]
});



  
gsap.to('.web',{
      text:"WEB DEVELOPER",
      duration:3,
      repeatDelay: .8,
      delay:1,
      yoyo: true,
      
  
  })




