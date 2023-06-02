/*     import React, { useState } from "react";
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
        <div className="form-wrapper">
            <h1 className="contacts-header">Contacts</h1>
            <h2>To get in touch fill this form:</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" onChange={handleInputChange} placeholder="Name" />
            <input type="email" name="email" onChange={handleInputChange} placeholder="email" />
            <button type="submit">Submit</button>
        </form>
        {responseData && <p>{responseData}</p>}
        </div>
    );
    }

    export default Form;
 */