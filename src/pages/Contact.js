import React from 'react';
import '../styles/Contact.css';
import ContactImage from '../assets/contact.jpeg';

function Contact() {
    return (
        <div className="contact">
            <div className="leftSide" style={{ backgroundImage:`url(${ContactImage})`}}>
            </div>
            <div className="rightSide">
                <h1>Entre em Contato</h1>
                <form id="contact-form" method="POST">
                    <label htmlFor="name">Nome </label>
                    <input name="name" type="text" placeholder="Digite seu Nome" />
                    <label htmlFor="name">Email </label>
                    <input name="name" type="email" placeholder="Insira seu Email" />
                    <label htmlFor="message">Mensagem </label>
                    <textarea name="message" placeholder="digite sua mensagem" rows="7"></textarea>
                    <button type="submit">Enviar Mensagem</button>

                </form>
            </div>
            
        </div>
    )
}

export default Contact;
