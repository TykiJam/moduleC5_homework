const numberInput = document.getElementById("numberInput");
const submitButton = document.getElementById("submitButton");
const imagesContainer = document.getElementById("images");
const errorText = document.getElementById("errorText");

submitButton.addEventListener("click", () => {
    const value = parseInt(numberInput.value);

    if (!Number(value) || value < 1 || value > 10) {
        showError("Число вне диапазона от 1 до 10");
    } else {
        clearError();
        clearImages();
        const url = `https://picsum.photos/v2/list?limit=${value}`;
        fetchImages(url);
  }
});

function showError(errorMessage) {
  errorText.textContent = errorMessage;
  clearImages();
}

function clearError() {
    errorText.textContent = "";
}

function clearImages() {
    imagesContainer.innerHTML = "";
}

function fetchImages(url) {
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            data.forEach((item) => {
                const img = document.createElement("img");
                img.src = item.download_url;
                imagesContainer.appendChild(img);
            });
        })
        .catch((error) => {
            showError("Ошибка при загрузке изображений");
            console.error(error);
        });
  }