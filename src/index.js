const form = document.querySelector("form")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const colorName = formData.get("name")

    const hexNumber = formData.get("name")
});