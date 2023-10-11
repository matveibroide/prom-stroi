import React, { useState } from "react";
import axios from "axios";
import './form.scss'

function Form() {

const [formData, setFormData] = useState({});
const [responseData, setResponseData] = useState("");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData)
    axios
    .post("http://localhost:8888/mail.php", formData)
    .then((response) => {
        console.log(response);
        setResponseData(response.data);
    })
    .catch((error) => console.log(error));
};

const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
};

return (
    <section id="form" className="form-wrapper">
        <h1 className="contacts-header">Свяжитесь с нами!</h1>
        
            <form className="contact-form" name="contact" method="post">
                <input required type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Имя: <input required type="text" name="name"/></label>
                </p>
                <p>
                    <label>Email: <input type="email" name="email"/></label>
                </p>
                <p>
                    <label className="messageLabel">Сообщение: <textarea required name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
        </form>
    </section>
);
}

export default Form;
