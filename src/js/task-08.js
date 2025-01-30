const formEl = document.querySelector(".login-form");


formEl.addEventListener("submit", handleSubmitForm);

function handleSubmitForm(event) {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;

    if (login === "" || password === "") {
        return alert("Please fill in all the fields!");
    }

    const formData = {
        login: form.elements.email.value,
        password: form.elements.password.value,
    };
    console.log('formData',formData);
    form.reset();
}
