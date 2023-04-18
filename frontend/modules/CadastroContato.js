import validator from "validator";

export default class CadastroContato {
    constructor(form) {
        this.form = document.querySelector(form);
    }

    init() {
        this.event();
    }

    event() {
        if(!this.form) return;
        this.form.addEventListener('submit', e => {
            e.preventDefault();
            this.verifica(this.form);
        })
    }

    verifica(form) {
        const nomeInput = form.querySelector('.cadastro-contato-nome');
        const emailInput = form.querySelector('.cadastro-contato-email');
        const telefoneInput = form.querySelector('.cadastro-contato-telefone');
        let error = false;

        let errorText = form.querySelectorAll('.error-text');
        errorText.forEach(texto => texto.remove());
        
        if(!nomeInput.value) {
            const erro = 'O nome precisa ser preenchido.'
            this.createError(nomeInput, erro);
            error = true;
        }

        if(!validator.isEmail(emailInput.value)) {
            if(emailInput.value) {
                const erro = 'Email inválido.';
                this.createError(emailInput, erro);
                error = true;
            }   
        }

        if(!emailInput.value && !telefoneInput.value) {
            const erro = 'Email ou telefone precisa ser preenchido.';
            this.createError(emailInput, erro);
            this.createError(telefoneInput, erro);
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