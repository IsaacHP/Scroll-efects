const skewed = document.getElementById('skewed');
window.addEventListener('scroll', function(){
  let value = 20 + window.scrollY / 8;
  if (value > 80)
   value = 80
  skewed.style.clipPath= "polygon(0 0,100% 0,100% "+ value +"%,0 80%)";
});

