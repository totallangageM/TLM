const form = document.querySelector('form');
const afullname = document.getElementById("a_name");
const aaddress = document.getElementById("a_address");
const aphone = document.getElementById("a_phone");
const aemail = document.getElementById("a_email");
const cname = document.getElementById("c_name");
const caddress = document.getElementById("c_address");
const cphone = document.getElementById("c_phone");
const cemail = document.getElementById("c_addressEmail");
const service = document.getElementById("service");
const langage = document.getElementById("langage");
const travelMiles = document.getElementById("travelMiles");
const totalHours = document.getElementById("totalHours");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const mount = document.getElementById("mount");


function sendEmail() {
    const bodyMessage = `<h1>APPOINTMENT LOCATION:</h1> <br> Full Name: ${afullname.value}<br> address: ${aaddress.value}<br> phone : ${aphone.value}<br>  Email : ${aemail.value}<br><br> CLAIMANT <br> Full Name: ${cname.value}<br> Address: ${caddress.value}<br> phone : ${cphone.value}<br> Email address : ${cemail.value}<br><br>  ADMINISTRATIF INFO:<br> Service : ${service.value}<br> Langage : ${langage.value}<br> Travels Miles : ${travelMiles.value}<br> Total hours : ${totalHours.value}<br> Summary : ${subject.value}<br> Notes : ${message.value}<br> Total : ${mount.value}<br>`;
   
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "thelusmananose9@gmail.com",
        Password : "E9C0358F50210CF28FF6A2126DF5B8E58137",
        To : 'thelusmananose9@gmail.com',
        From : "thelusmananose9@gmail.com",
        Subject : "New Clients from tlM websites",
        Body : bodyMessage
    }).then(
      message => {
        if (message == "ok") {
            Swal.fire({
                title: "Good job!",
                text: "Form sent successfully!",
                icon: "success"
              });
        }
      }
    );

}

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    sendEmail();
});
