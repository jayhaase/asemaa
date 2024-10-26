document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const closeModal = document.querySelector(".close");
  
    document.querySelectorAll(".pointer").forEach(pointer => {
      pointer.addEventListener("click", () => {
        modalTitle.textContent = pointer.getAttribute("data-title");
        modalDescription.textContent = pointer.getAttribute("data-description");
        modal.style.display = "block";
      });
    });
  
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", event => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });