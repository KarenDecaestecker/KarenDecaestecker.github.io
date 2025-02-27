
    document.addEventListener('DOMContentLoaded', () => {
        const button = document.querySelectorAll(".color-button");
        button.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
            });
        });
    });

