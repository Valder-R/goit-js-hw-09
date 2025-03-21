const form = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";
const formData = JSON.parse(localStorage.getItem(localStorageKey)) ?? {
    email: "",
    message: "",
};
form.elements.email.value = formData.email;
form.elements.message.value = formData.message;

form.addEventListener("input", (event) => {
    formData[event.target.name] = (event.target.value).trim();
    localStorage.setItem(localStorageKey,JSON.stringify(formData))
});

form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    if (formData.email != "" && formData.message != "") {
        localStorage.removeItem(localStorageKey);
        console.log(formData);
        formData.email = "";
        formData.message = "";
        form.reset();
    } else {
        alert("Fill please all fields");
    }
});