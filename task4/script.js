const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submitBtn");
const resultDiv = document.getElementById("result");

async function fetchImage(url) {
    const response = await fetch(url);
    const data = await response.blob();
    return URL.createObjectURL(data);
}

submitBtn.addEventListener("click", async () => {
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);

    if (!Number(value1, value2) || value >= 100 || value <= 300) {
        resultDiv.textContent = "Одно из чисел вне диапазона от 100 до 300";
        return;
    }

    const url = `https://picsum.photos/${value1}/${value2}`;
    const imageUrl = await fetchImage(url);

    const img = createImage(imageUrl);
    clearResult();
    appendImageToResult(img);
});

function createImage(src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
}

function clearResult() {
    resultDiv.innerHTML = "";
}

function appendImageToResult(img) {
    resultDiv.appendChild(img);
}