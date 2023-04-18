import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    }

    init() {
        //console.log(this.form)
        this.events();
    }

    events() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            
            this.validate(this.form);
        })
    }

    validate(form) {
        const emailInput = document.querySelectorAll('input[name="email"]');
        const passwordInput = document.querySelectorAll('input[name="password"]');
        let error = false;
        let email;
        let senha;

        const errorText = form.querySelectorAll('.error-text');
        errorText.forEach(texto => texto.remove());
        

        if(form.classList.contains('form-cadastro')) {
            email = emailInput[0];
            senha = passwordInput[0];
        }

        if(form.classList.contains('form-login')) {
            email = emailInput[1];
            senha = passwordInput[1];
        }
        

        if(!validator.isEmail(email.value)) {
            const erro = 'Email inválido.';
            this.createError(email, erro);
            error = true;
            
            
        }

        if(senha.value.length < 3 || senha.value.length > 50) {
            const erro = 'Senha precisa ter mais de 3 dígitos e menos de 50.';
            this.createError(senha, erro);
            error = true;
        }

        if(!error) form.submit();


    }

    createError(data, error) {
        const p = document.createElement('p');
        p.innerHTML = error;
        p.classList.add('alert-danger');
        p.classList.add('error-text');
        data.insertAdjacentElement('afterend', p);
        
        
    }
}