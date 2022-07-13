const digite = document.querySelector('button')
const senhafase1 = "password"


digite.addEventListener('click', evt => {
 let res = window.prompt("Coloque a senha pra passar de fase")
   if (res == senhafase1) {
     window.location.href = "https://minecraft.com.br/?gclid=CjwKCAjw2rmWBhB4EiwAiJ0mtbxW4d41QYnfHzYEW1rFSJZ1pQ_ssTNP-1jb--DMipm4whZOQQi8CRoChIgQAvD_BwE"
   } else {
     document.write("Senha incorreta")
   }
})
