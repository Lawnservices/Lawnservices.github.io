// const laguna = document.querySelector('.links');
 

// document.addEventListener('scroll', () => {
//     var scroll_position = window.scrollY;
//     if (scroll_position > 260) {
//         laguna.style.color = 'green';
        
//     } else {
//         laguna.style.color = '#fff'
//     }
// });
let fechas = document.querySelector('.fecha');
if(fechas){
    fechas.textContent = new Date().getFullYear();
};
let pie = document.querySelector('.piez');

setTimeout(()=>{
pie.textContent = 'Call Now';
},6000)