import React, { useState} from 'react';
import './form.scss'

function ContactForm() {

const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');

const handleNameChange = (event) => {
setName(event.target.value);
console.log(name)
};

const handlePhoneChange = (event) => {
setPhone(event.target.value);
};

const handleEmailChange = (event) => {
setEmail(event.target.value);
};

const handleSubmit = (event) => {
event.preventDefault();
console.log(`Name: ${name}, Phone: ${phone}, Email: ${email}`);
// create request
var xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
    // update emailStatus with response

    xhr.open('GET','http://')
})
};



return (
<form action='PHPMailer.php' 
className='contact-form' 
onSubmit={handleSubmit}
method='post'>
    <h1>TO CONTACT US FILL THIS FORM</h1>
    <label>
    Name:
    <input type="text" value={name} onChange={handleNameChange} />
    </label>
    <br />
    <label>
    Phone:
    <input type="tel" value={phone} onChange={handlePhoneChange} />
    </label>
    <br />
    <label>
    Email:
    <input type="email" value={email} onChange={handleEmailChange} />
    </label>
    <br />
    <button type="submit">Submit</button>
</form>
);
}

export default ContactForm;