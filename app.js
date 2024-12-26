 // Function to display the selected image
 document.getElementById('image-input').addEventListener('change', function () {
    const imageContainer = document.getElementById('image-container');
    const uploadedImage = document.getElementById('uploaded-image');
    const file = this.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
            imageContainer.style.display = 'block';
        };

        reader.readAsDataURL(file);
    } else {
        imageContainer.style.display = 'none';
    }
});

// Function to resize the image to specific dimensions when a button is clicked
document.getElementById('resize-button-instagram').addEventListener('click', function () {
    resizeImage(1080, 1080);
});

document.getElementById('resize-button-facebook').addEventListener('click', function () {
    resizeImage(1200, 630);
});

document.getElementById('resize-button-twitter').addEventListener('click', function () {
    resizeImage(1200, 675);
});

document.getElementById('resize-button-website').addEventListener('click', function () {
    resizeImage(600, 300);
});

// Function to resize the image
function resizeImage(width, height) {
    const uploadedImage = document.getElementById('uploaded-image');

    // Set the width and height of the image
    uploadedImage.width = width;
    uploadedImage.height = height;
}
