
// ARXIKOOO
// const previewImage = document.getElementById('previewImage');
// const pdfContainer = document.getElementById('pdfContainer');
// const closeButton = document.getElementById('closeButton');


// previewImage.addEventListener('click', () => {
//     pdfContainer.style.display = 'block';
// });

// closeButton.addEventListener('click', () => {
//     pdfContainer.style.display = 'none';
// });
// ARXIKOOO

// TEST PDF FOR ALL--ANOIGEI STIN IDIA SELIDA PREVIEW
// // Get all preview images and PDF containers by their common class
// const previewImages = document.querySelectorAll('.previewImage');
// const pdfContainers = document.querySelectorAll('.pdfContainer');
// const closeButtons = document.querySelectorAll('.closeButton');

// // Attach click event listeners to each preview image
// previewImages.forEach((previewImage, index) => {
//     previewImage.addEventListener('click', () => {
//         // Display the corresponding PDF container when the image is clicked
//         pdfContainers[index].style.display = 'block';
//     });
// });

// // Attach click event listeners to each close button
// closeButtons.forEach((closeButton, index) => {
//     closeButton.addEventListener('click', () => {
//         // Hide the corresponding PDF container when the close button is clicked
//         pdfContainers[index].style.display = 'none';
//     });
// });
//TEST PDF FOR ALL


//douleuei gia ola ta pdf
const previewImages = document.querySelectorAll('#previewImage');
        const pdfContainers = document.querySelectorAll('#pdfContainer');
        const closeButtons = document.querySelectorAll('#closeButton');

        for (let i = 0; i < previewImages.length; i++) {
            previewImages[i].addEventListener('click', () => {
                pdfContainers[i].style.display = 'block';
            });

            closeButtons[i].addEventListener('click', () => {
                pdfContainers[i].style.display = 'none';
            });
        }
//douleuei gia ola ta pdf