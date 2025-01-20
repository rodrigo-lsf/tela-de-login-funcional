document.getElementById('loginButton').addEventListener('click', function() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    const message = document.getElementById('message');

    emailError.textContent = '';
    passwordError.textContent = '';
    message.textContent = '';

    let isValid = true;

    if (!email) {
        emailError.textContent = 'O e-mail é obrigatório.';
        isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.textContent = 'Insira um e-mail válido.';
        isValid = false;
    }

    if (!password) {
        passwordError.textContent = 'A senha é obrigatória.';
        isValid = false;
    } else if (password.length < 6) {
        passwordError.textContent = 'A senha deve ter pelo menos 6 caracteres.';
        isValid = false;
    }

    if (isValid) {
        message.textContent = 'Login realizado com sucesso!';
    }
});