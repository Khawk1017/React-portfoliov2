import { useRef } from "react";
import Loader from "react-loaders";
import emailjs from '@emailjs/browser'
import './index.scss'

export const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_o5ec5fa', 'contact_form', form.current, 'BTAfoGk2HitYuQlLz')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text)
            });
    };

    return (
        <>
            <div className='contact-container'>
                <div className='contact-form'>
                    <h1>Contact Me</h1>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input
                                    type="text"
                                    name="user_name"
                                    placeholder="Name"
                                    required
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type="email"
                                    name="user_email"
                                    placeholder="Email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    placeholder="Subject"
                                    type="text"
                                    name="subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    placeholder="Message"
                                    name="message"
                                    required></textarea>
                            </li>
                            <li>
                                <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact