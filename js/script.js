document.addEventListener('DOMContentLoaded', function(event) {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeModal = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };
  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal);
  });
  closeModal.addEventListener('click', switchModal);
  
  document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27 && modal.classList.contains('modal--visible') == true) {
      switchModal(modal);
    }
  };

  document.onclick = function(e){
    if (e.target.className == modal.className) {
      switchModal(modal);
    };
  }

});
