function changeImage(imageSrc) {
    document.getElementById("main-product-image").src = imageSrc;

    // Remove 'active' class from all thumbnails
    document.querySelectorAll(".thumb").forEach(img => img.classList.remove("active"));

    // Add 'active' class to the clicked thumbnail
    event.target.classList.add("active");
}
