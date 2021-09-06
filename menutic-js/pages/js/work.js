document.getElementById('formtask').addEventListener("submit", savetask);
alert('ALERTA ALERTA, FUNCIONÓ');


function savetask(e) {

    let titulo = document.getElementById('title').value;
    let comentario = document.getElementById('comment').value;

    const task={

        
    }
    e.preventDefault();

    console.log(titulo, comentario);

}