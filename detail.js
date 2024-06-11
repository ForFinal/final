const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const productName = urlParams.get('name');
const productDescription = urlParams.get('description');
const productPrice = urlParams.get('price');
const productImage = urlParams.get('img');
const productFrom = urlParams.get('from');
const productId = urlParams.get('pid');
const productPro = urlParams.get('pro');

document.getElementById('productName').innerText = productName;
document.getElementById('productDescription').innerText = productDescription;
document.getElementById('productPrice').innerText = '售價：NT$' + productPrice;
document.getElementById('productImage').src = './images/' + productImage;
document.getElementById('productFrom').innerText = '產地：' + productFrom;
document.getElementById('productId').innerText = '商品編號：' + productId;
document.getElementById('productPro').innerText = '保存方式：' + productPro;

window.onload = async function () {
    addListener();
    setItem(itemObj[urlParams.get('id')]);
}

function addListener() {
    let num = document.getElementById("num");
    document.getElementById("up").addEventListener("click", function () {
        num.value = parseInt(num.value) + 1;
    });
    document.getElementById("down").addEventListener("click", function () {
        if (num.value <= 0) {
            num.value = 0;
        } else {
            num.value = parseInt(num.value) - 1;
        }
    });
}

/*星星*/
document.addEventListener("DOMContentLoaded", function () {
    let stars = document.getElementsByClassName("star");
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener("mouseover", mouseover);
        stars[i].addEventListener("mouseout", mouseout);
        stars[i].addEventListener("click", Click);
    }
    document.getElementById("clean").addEventListener("click", clean);
});

let rating = -1; 

function mouseover() {
    let index = parseInt(this.dataset.index);
    for (let i = 0; i <= index; i++) {
        document.getElementById("idimg" + (i + 1)).textContent = "★";
    }
}

function mouseout() {
    let index = parseInt(this.dataset.index);
    for (let i = 0; i <= index; i++) {
        if (i > rating) {
            document.getElementById("idimg" + (i + 1)).textContent = "☆";
        }
    }
}

function Click() {
    let index = parseInt(this.dataset.index);
    if (index === rating) {
        rating = -1;
    } else {
        rating = index;
    }
    updateStars();
}

function updateStars() {
    for (let i = 0; i < 5; i++) {
        if (i <= rating) {
            document.getElementById("idimg" + (i + 1)).textContent = "★";
        } else {
            document.getElementById("idimg" + (i + 1)).textContent = "☆";
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("feedbackForm").addEventListener("submit", function (event) {
        event.preventDefault();
        this.reset();
    });
});
