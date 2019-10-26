window.onscroll = ()=>{
  var header = document.getElementsByClassName('header')[0];
  var sticky = header.offsetTop;
  if(window.pageYOffset > sticky){
    header.classList.add('header--active');
  }
  else{
    header.classList.remove('header--active');
  }
}
