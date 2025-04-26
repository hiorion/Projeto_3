$(document).ready(function () {
    $('#telefone').mask('(00) 00000-0000');
});

const validation = new JustValidate('#form-contato');

validation
    .addField('#nome', [
        {
            rule: 'required',
            errorMessage: 'O nome é obrigatório',
        },
        {
            rule: 'minLength',
            value: 3,
            errorMessage: 'O nome deve ter pelo menos 3 caracteres',
        },
    ])
    .addField('#email', [
        {
            rule: 'required',
            errorMessage: 'O e-mail é obrigatório',
        },
        {
            rule: 'email',
            errorMessage: 'Digite um e-mail válido',
        },
    ])
    .addField('#telefone', [
        {
            rule: 'function',
            validator: function (name, value) {
                if (value.trim() !== '' && value.length < 14) {
                    return false;
                }
                return true;
            },
            errorMessage: 'Telefone inválido',
        }
    ])
    .addField('#mensagem', [
        {
            rule: 'required',
            errorMessage: 'A mensagem é obrigatória',
        },
        {
            rule: 'minLength',
            value: 10,
            errorMessage: 'A mensagem deve ter pelo menos 10 caracteres',
        },
    ])
    .onSuccess((event) => {
        alert('Formulário enviado com sucesso!');
        event.target.submit();
    });