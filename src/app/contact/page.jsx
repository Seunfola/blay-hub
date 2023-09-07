'use client'
import { useRef, useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';
import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const [isMessageSent, setIsMessageSent] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gmvoew', 'template_ao08965', form.current, '_8GeNeGxFow4XwMnF')
      .then((result) => {
        console.log(result.text);
        setIsMessageSent(true); // Set message sent status to true
        notify(); // Notify when the email is sent successfully
      })
      .catch((error) => {
        console.error(error.text);
      });
  };

  const notify = () => {
    toast('Message Sent and delivered successfully.');
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let's keep in Touch'</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" className={styles.image} fill={true} alt='contact pic' />
        </div>
        <form className={styles.form} ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='name' id='name' name='name' className={styles.input} required />
          <input type='email' placeholder='email' id='email' name='email' className={styles.input} required />
          <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10" autoComplete='on' spellCheck='true' required />
          <Button text="send" url="/"  />
          {isMessageSent && <p>Message sent successfully!</p>} 
        </form>
      </div>
    </div>
  );
};

export default Contact;
