const formTodo = document.getElementById("form");
const title = document.getElementById("title");
const body = document.getElementById("body");
const status = document.getElementById("status");

formTodo.addEventListener("submit", async (event) => {
    event.preventDefault();
    const data = {
        title: title.value,
        body: body.value,
        status: status.value,
        author: 1
    }
    await fetch("http://127.0.0.1:8000/api/v4/todo/", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.ok) {
            Swal.fire(
                "Creado!",
                "Los datos se guardaron correctamente",
                "success"
            ).then((result) => {
                if (result.isConfirmed) {
                    window.location.replace("./index.html");
                }
            })
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops",
                text: "Ocurrio un error!"
            })
        }
    });
});

(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()