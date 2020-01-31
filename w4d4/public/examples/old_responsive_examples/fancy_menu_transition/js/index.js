window.addEventListener('scroll', function(){
  if(window.scrollY > 400){
    document.querySelector('ul').classList.add('scrolled')
  }
  if(window.scrollY < 400){
    document.querySelector('ul').classList.remove('scrolled')
  }
})