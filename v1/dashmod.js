/***
 * dashMod (c) 2025. All Rights Reserved.
 * 
 * Tinashe Mashindi - github.com/timunism/dashMod
 * 
 * */
main();function main(){implementTheme()}
function implementTheme(){let localTheme=localStorage.getItem('theme');if(localTheme){const dashModElements=document.querySelectorAll('.dashmod');if(localTheme=='dark'){dashModElements.forEach((element)=>{element.classList.add('dark-theme')})}}else{localStorage.setItem('theme','light')}}
