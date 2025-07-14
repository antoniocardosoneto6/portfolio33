/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')  

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_r3lg1ts', 'template_imqj76l', '#contact-form', 'PKr_Wf7-3V59r34qh')
    .then(() => {
        contactMessage.textContent = 'Mensagem enviada com sucesso ✅'

        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        contactForm.reset()
    }, () => {
        contactMessage.textContent = 'Mensagem não enviada, erro no serviço ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)