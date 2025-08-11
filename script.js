function previewImage(event, id) {
      const img = document.getElementById(id);
      img.src = URL.createObjectURL(event.target.files[0]);
      img.style.display = "block";
    }