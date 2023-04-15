function toggleMode(){
  const html = document.documentElement;
  const srcImage = document.querySelector("#imgProfile");
  
  if(html.classList.contains('light')){
    html.classList.remove('light');
    srcImage.setAttribute("src", "./assets/veronicadiastt.jpg");
  }else{
    html.classList.add('light');
    srcImage.setAttribute("src", "./assets/veronicadiastt.jpg");
     
  }
  
  //html.classList.toggle('light')
}