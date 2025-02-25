const imageInput = document.getElementById("image-input");
const uploadedImage = document.getElementById("uploaded-image");
const downloadButton = document.getElementById("download-button");

const resizeButtons = {
    instagram: [1080, 1080],
    facebook: [1200, 630],
    twitter: [1200, 675],
    website: [600, 300]
};

imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            uploadedImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Ensure the image is loaded before resizing
uploadedImage.onload = function () {
    Object.keys(resizeButtons).forEach((platform) => {
        document.getElementById(`resize-button-${platform}`).addEventListener("click", function () {
            resizeImage(resizeButtons[platform][0], resizeButtons[platform][1]);
        });
    });
};

function resizeImage(width, height) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = width;
    canvas.height = height;

    // Ensure the image is fully loaded before drawing
    ctx.drawImage(uploadedImage, 0, 0, width, height);

    // Create a new image element to display resized image
    const resizedImage = document.createElement("img");
    resizedImage.src = canvas.toDataURL("image/png");
    document.body.appendChild(resizedImage);

    // Show the download button and set the image URL for download
    downloadButton.classList.remove("hidden");
    downloadButton.href = resizedImage.src;
}
