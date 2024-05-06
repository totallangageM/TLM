
/* JavaScript */
const form = document.querySelector('form');
const afullname = document.getElementById("aname");
const aaddress = document.getElementById("aaddress");
const aphone = document.getElementById("aphone");
const aemail = document.getElementById("aemail");
const cname = document.getElementById("cname");
const caddress = document.getElementById("caddress");
const cphone = document.getElementById("cphone");
const cemail = document.getElementById("cemail");
const service = document.getElementById("service");
const langage = document.getElementById("langage");
const travelMiles = document.getElementById("travelMiles");
const totalHours = document.getElementById("totalHours");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const mount = document.getElementById("mount");

function sendEmail() {
    const bodyMessage = `<h1>APPOINTMENT LOCATION:</h1> <br> Full Name: ${afullname.value}<br> address: ${aaddress.value}<br> phone : ${aphone.value}<br>  Email : ${aemail.value}<br><br> <h1>CLAIMANT</h1> <br> Full Name: ${cname.value}<br> Address: ${caddress.value}<br> phone : ${cphone.value}<br> Email address : ${cemail.value}<br><br>  <h1>ADMINISTRATIF INFO</h1>:<br> Service : ${service.value}<br> Langage : ${langage.value}<br> Travels Miles : ${travelMiles.value}<br> Total hours : ${totalHours.value}<br> Summary : ${subject.value}<br> Notes : ${message.value}<br> Total : ${mount.value}<br>`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thelusmananose9@gmail.com",
        Password: "E9C0358F50210CF28FF6A2126DF5B8E58137",
        To: 'thelusmananose9@gmail.com',
        From: "thelusmananose9@gmail.com",
        Subject: "New Clients from tlM websites",
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Form sent successfully!",
                    icon: "success"
                });
            }
        }
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    sendEmail();
    form.reset(); 
});
