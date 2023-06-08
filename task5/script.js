const pageInput = document.getElementById("pageInput");
const limitInput = document.getElementById("limitInput");
const imagesDiv = document.getElementById("images");
let lastRequestPage = localStorage.getItem("page");
let lastRequestLimit = localStorage.getItem("limit");



if (lastRequestPage && lastRequestLimit) {
    pageInput.value = lastRequestPage;
    limitInput.value = lastRequestLimit;
    makeRequest();
}

function makeRequest() {
    const page = parseInt(pageInput.value);
    const limit = parseInt(limitInput.value);

    if (!isValidNumber(page) || page < 1 || page > 10) {
        imagesDiv.innerHTML = "Номер страницы вне диапазона от 1 до 10";
        return;
    }
    if (!isValidNumber(limit) || page < 1 || page > 10) {
        imagesDiv.innerHTML = "Лимит вне диапазона от 1 до 10";
        return;
    }
    if (!Number(page) || !Number(limit)) {
        imagesDiv.innerHTML = "Номер страницы и лимит вне диапазона от 1 до 10";
        return;
    }

    localStorage.setItem("page", page);
    localStorage.setItem("limit", limit);

    fetchImages(page, limit);
}

function isValidNumber(value) {
    return !isNaN(value) && value >= 1 && value <= 10;
}

function fetchImages(page, limit) {
    const url = `https://picsum.photos/v2/list?page=${page}&limit=${limit}`;
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const images = data.map(
                    (imageData) => `<img src="${imageData.download_url}" alt="Image">`
                );
                imagesDiv.innerHTML = images.join("");
            })
            .catch((error) => console.error(error));
}