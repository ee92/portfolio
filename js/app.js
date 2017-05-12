window.onload = function() {
  Particles.init({
   // normal options
   selector: '.background',
   maxParticles: 125,
   color:'#48F2E3',
   sizeVariations: 1,
   connectParticles: true,
   minDistance: 150,
   // options for breakpoints
   responsive: [
      {
       breakpoint: 425,
       options: {
         maxParticles: 75,
       }
     }, {
       breakpoint: 320,
       options: {
         maxParticles: 50
       }
     }
   ]
 });
};
