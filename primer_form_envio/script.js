function texto() {
    const nombreInput = document.getElementById('fname');   // tu input de nombre
    const emailInput = document.getElementById('fcorreo');  // tu input de correo
    const mensaje = document.getElementById('noti');        // tu <p> para notificaciones

    const nombre = nombreInput.value;
    const email = emailInput.value;

    

    if (nombre === '' || email === '') {
        mensaje.textContent = 'Por favor, completa todos los campos.';
        mensaje.style.color = 'red';
    } else {
        //es necesario ` este comilla invertida para doder usar ${}
        mensaje.textContent = `Hola ${nombre}, hemos recibido tu consulta. Te contactaremos pronto a ${email}.`;
        mensaje.style.color = 'green';
    }
    
}

// completado yehhhhhhhhhhh

// aqui falta el como litermalnete se puede confirmar si esata llenado o nada
