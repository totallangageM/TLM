const form = document.querySelector('form');
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const projet = document.getElementById("project");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full name: ${fullname.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Project: ${projet.value}<br> Subject: ${subject.value}<br> Message: ${message.value}`;

    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "thelusmananose9@gmail.com",
        Password: "E9C0358F50210CF28FF6A2126DF5B8E58137",
        To: 'thelusmananose9@gmail.com',
        From: "thelusmananose9@gmail.com",
        Subject: "New costumer messages",
        Body: bodyMessage
    }).then(
        message => {
            if (message === "OK") {
                Swal.fire({
                    title: "Good job!",
                    text: "Form sent successfully!",
                    icon: "success"
                });
            } else {
                Swal.fire({
                    title: "Error!",
                    text: "Failed to send form. Please try again later.",
                    icon: "error"
                });
            }
        }
    ).catch(error => {
        Swal.fire({
            title: "Error!",
            text: "Failed to send form. Please try again later.",
            icon: "error"
        });
        console.error("Error sending email:", error);
    });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Ajouter une validation ici si nécessaire

    sendEmail();
});
