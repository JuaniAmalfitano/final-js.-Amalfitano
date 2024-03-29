///

const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const sexo = document.querySelector('#sexo').value;

    //si el usuario ya se registro anteriormente, y quiere registrarse de vuelta, no va a poder
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    Users.push({name: name, email: email, password: password, sexo: sexo});
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso!');
    window.location = "../html/iniciarSesion.html";
});