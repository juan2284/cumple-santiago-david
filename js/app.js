document.addEventListener('DOMContentLoaded', () => {

  window.addEventListener('load', () => {
    const pantallaCarga =  document.querySelector('.carga');
    pantallaCarga.classList.add('d-none');
  });
  
  const imagenPrincipal = document.querySelector('.item-central .subgrid-item .img-fluid');
  const imagenesGaleria = document.querySelectorAll('.img-fluid');

  imagenesGaleria.forEach(imagen => {    
    imagen.addEventListener('click', (e) => {
      imagenPrincipal.src = e.target.src;
    });
  });
  
  
});