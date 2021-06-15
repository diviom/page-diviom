
addEventListener('DOMContentLoaded',() =>{

  let menu = document.getElementById('menu');
  let menu_bar = document.getElementById('menu-bar');
  //let button = document.getElementById("btn-sub");
  let button = document.querySelector('.btn-sub');
  let num = 1;
  let email = document.getElementById('email');
  let msm = document.getElementById('text-area');
  let form = document.getElementById('form');
  let error_mail = document.getElementById('emaimsm');
  let error_msm = document.getElementById('smsalert');
  let home = document.getElementById('home');
  let modal = document.getElementById('modal-container');

  if (screen.width < 350)
   menu.classList.remove('menu');
   
  if (screen.width < 1024) 
    menu.classList.remove('menu');
  else 
  if (screen.width < 1280) 
    console.log("pequeño");
  else 
    console.log("grande");




  //alert("La resolución de tu pantalla es: " + screen.width + " x " + screen.height) 
  menu_bar.addEventListener('click',function(){
      if( num == 1  ){
        console.log(menu); 
        
        menu.classList.toggle('menu');
        num = num -1;
      }else{
        menu.classList.remove('menu');
        num= num +1 ;
      }
    })

  form.addEventListener("submit", e =>{
    e.preventDefault(); 
    let regexemail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   
    if(msm.value.length < 10 ){
      error_msm.innerHTML = "por favor envianos mas detalles de tu solicitud";
       msm.classList.toggle('is-invalid');
      error_msm.classList.toggle('error');
    }else{
      error_msm.innerHTML = "..";
      msm.classList.remove('is-invalid');
      msm.classList.toggle('is-valid');
    }

    if( !regexemail.test(email.value)){
      error_mail.innerHTML = "el correo no es valido"
      email.classList.toggle('is-invalid')
      error_msm.classList.toggle('error');
    }else{
      error_mail.innerHTML = ".."
      msm.classList.remove('is-invalid');
      email.classList.toggle('is-valid');
    }

    if( regexemail.test(email.value) && msm.value.length > 10 ){
       sendEmail(msm.value,email.value);
       modal.classList.toggle('show');
       setTimeout(() => {
        modal.classList.remove('show');
      }, 4000);

      //button.disabled = true; 
  
    }
    }
  )

  function sendEmail(mensaje,gmail,telefono,nombre) { 
	
	  Email.send({ 
        Host: "smtp.gmail.com", 
        Username: "jasonchoquecanaviri@gmail.com", 
        Password: "vssilhqpqdlpvmyn", 
        To: 'jasonchoquecanaviri@gmail.com', 
        From: "jasonchoquecanaviri@gmail.com", 
        Subject: `${nombre} sent you mensage telephone ${telefono}`,
        Body: `Name: ${nombre} <br/> Email:${gmail} <br/> Mensage:
		${mensaje}`,
      }) 
        .then(function (message) { 
          console.log("Mail has been sent successfully") 
      });
} 

});