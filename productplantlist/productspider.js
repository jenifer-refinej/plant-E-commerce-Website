let productImageHolder = document.querySelector(".product-image-holder");
let productImageOne = document.querySelector(".spiderimg-one");
let spiderimagTwo = document.querySelector(".spiderimg-two");
let defaultImageShown = document.querySelector(".product-image-default-shown");
let defaultImage = document.querySelector(".default-image");
let productshowniamge;
let productshownimageTwo;

productImageOne.addEventListener("click", () => {
    // Hide the default image
    defaultImageShown.style.display = "none";

    // Remove the previous images
    if (productshowniamge) productshowniamge.remove();
    if (productshownimageTwo) productshownimageTwo.remove();

    productshowniamge = document.createElement('img');
    productshowniamge.src = "https://img.freepik.com/free-photo/fittonia-plant-white-pot-wooden-cabinet_53876-123022.jpg?w=826&t=st=1719578079~exp=1719578679~hmac=7f00303a4cf0665a63428a8be4d7f15286c89f212b0257387f998ec5df55fa82";
    productshowniamge.style.width = "100%";
    productshowniamge.style.height = "50vh";
    productImageHolder.appendChild(productshowniamge);
});

spiderimagTwo.addEventListener("click", () => {
    // Hide the default image
    defaultImageShown.style.display = "none";

    // Remove the previous images
    if (productshowniamge) productshowniamge.remove();
    if (productshownimageTwo) productshownimageTwo.remove();

    productshownimageTwo = document.createElement("img");
    productshownimageTwo.src = "https://img.freepik.com/free-photo/cozy-hobby-growing-indoor-plants-home_185193-108769.jpg?w=826&t=st=1719567364~exp=1719567964~hmac=edbb743848092687ea5d989b1547dae2accd73151ffe8df0676cd215ba008cff";
    productshownimageTwo.style.width = "100%";
    productshownimageTwo.style.height = "50vh";
    productImageHolder.appendChild(productshownimageTwo);
});

defaultImage.addEventListener("click", () => {
    // Remove any previously shown images
    if (productshowniamge) productshowniamge.remove();
    if (productshownimageTwo) productshownimageTwo.remove();

    // Show the default image
    defaultImageShown.style.display = "block";
});