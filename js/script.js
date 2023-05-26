
function showForm() {

    var form = document.getElementById("order-form");

    form.style.display = "block";
}
function hideForm() {

    var form = document.getElementById("order-form");

    form.style.display = "none";
}

function buy() {
    var quantity = document.getElementById("quantity").value;
    var radios = document.getElementsByName("color");
    var selectedColor = "";
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedColor = radios[i].value;
            break;
        }
    }
    var comment = document.getElementById("comment").value;

    alert("Вы купили количество товара: " + quantity + " шт. Выбранный цвет: " + selectedColor + ". С комментарием: " + comment);
    hideForm();
}

function toggleTheme() {
    document.body.classList.toggle("light-mode");
    document.body.classList.toggle("dark-mode");
    document.getElementById("theme-mode").classList.toggle("light-mode");
}
window.onscroll = function () {
    showBackToTopButton();
};

function showBackToTopButton() {
    const button = document.querySelector('.back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}


function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
