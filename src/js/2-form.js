document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.feedback-form');

    form.addEventListener('input', function () {
        const formData = {
            email: form.email.value.trim(),
            message: form.message.value.trim()
        };

        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    });

    window.addEventListener('load', function () {
        const savedData = localStorage.getItem('feedback-form-state');

        if (savedData) {
            const formData = JSON.parse(savedData);
            form.email.value = formData.email;
            form.message.value = formData.message;
        }
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (email && message) {
            console.log({ email, message });

            localStorage.removeItem('feedback-form-state');
            form.reset();
        }
    });
});