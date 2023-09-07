
import styles from './page.module.css';
import Image from 'next/image';
import Button from '@/components/button/Button';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gmvoew', 'template_ao08965', form.current, '_8GeNeGxFow4XwMnF')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const notify = () => {
    toast('Message Sent and delivered successfully.');
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Let's keep in Touch'</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png"
            className={styles.image}
            fill={true}

            alt='contact pic' />
        </div>
        <div className={styles.form} ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='name' id='name' name='name' className={styles.input} required />
          <input type='text' placeholder='email' id='email' name='email' className={styles.input} required />
          <textarea className={styles.textArea} placeholder="Message" cols="30" rows="10" autoComplete='on' spellCheck='true' required ></textarea>
          <Button text="send" url="#" value='Send' onClick={notify} />
        </div>
      </div>
    </div>
  )
}

export default Contact