const digite = document.querySelector('button')
const senhafase1 = "password"


digite.addEventListener('click', evt => {
 let res = window.prompt("Coloque a senha pra passar de fase")
   if (res == senhafase1) {
     window.location.href = "https://www.google.com/amp/s/www.devmedia.com.br/amp/javascript-redirect-redirecionando-o-usuario-com-window-location/39809"
   } else {
     document.write("Senha incorreta")
   }
})
