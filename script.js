const email = document.querySelector(".access__mail");
const form = document.querySelector("form");
const error = email.nextElementSibling;

const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

form.addEventListener("submit", function(event) {

    if (!email.value.match(pattern) || email.value === "") {
        event.preventDefault();
        error.classList.remove("error-hidden");
    } else {
        error.classList.add("error-hidden");
    }
});
