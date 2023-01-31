'use strict';

const input = document.querySelector('#pdfFileInput');
const preview = document.querySelector('#pdfPreview');

input.addEventListener('change', function () {
  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = function () {
    const data = reader.result;
    preview.src = data;
  };

  reader.readAsDataURL(file);
});

// const fileInput = document.getElementById('fileInput');
// const filePreview = document.getElementById('file-preview');

// fileInput.addEventListener('change', function() {
//   const file = this.files[0];
//   const reader = new FileReader();
//   reader.onload = function(event) {
//     filePreview.name = event.target.name;
//     filePreview.src = event.target.result;
//     filePreview.style.display = 'block';
//   };
//   reader.readAsDataURL(file);
// });
