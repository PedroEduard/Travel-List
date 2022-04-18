//Realiza a verificação e retorna true para um email válido e false para um email invalido
function validaEmail(email) {
    const emailRegex =  /^([a-zA-Z][^<>\"!@[\]#$%¨&*()~^:;ç,\-´`=+{}º\|/\\?]{1,})@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return emailRegex.test(String(email).toLowerCase())
  }
  
  //Realiza a verificação e retorna true para um senha válido e false para um senha invalido
  function validaSenha(password) {
    const senhaRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,20}$/
    return senhaRegex.test(String(password))
  }
  
  let btn = document.querySelector('#visu ');
btn.addEventListener('click', function getAttribute() {
    let input = document.querySelector('#password');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    }else {
        input.setAttribute('type', 'password');
    }
});

let btm = document.querySelector('#visu2 ');
btm.addEventListener('click', function getAttribute() {
    let input = document.querySelector('#password2');
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    }else {
        input.setAttribute('type', 'password');
    }
});