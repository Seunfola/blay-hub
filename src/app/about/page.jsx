import React from 'react';
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/button/Button';

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" fill={true} alt='image' className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Technical Mastery:</h1>
          <h2 className={styles.imgDesc}>Navigating the intricacies of AI and language seamlessly for you!</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.itemTitle}>Immediate Action, Comprehensive Solutions.</h1>
          <p className={styles.itemDesc}>
            At Blayhub, we're not just on the clock; we're ahead of it. Whether it's our meticulous transcriptionists, our AI data experts,
            voice-over talents, or our multilingual dataset creators, our team stands ready around-the-clock. From audio-video conversions to
            AI data consultations, submit your requirements and it will be expertly addressed and delivered swiftly.
            <br />
            <br />
            What sets us apart is our unique approach to your industry or field. We describe how your company approaches its work differently, whether it's through cutting edge technology, a customer-centric focus, or a disruptive business model. This distinctive approach enables us to exceed expectations and provide exceptional results for our clients trust and loyalty.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.itemTitle}> What We Do?</h1>
          <p className={styles.itemDesc}>
            As you explore our blog website, we invite you to embark on a transformative journey of knowledge and inspiration. Through our curated content, thought leadership, and commitment to diversity, we aim to enrich your life and empower you with the tools to navigate the ever-evolving world around us. Join our community, be part of the conversation, and unlock the power of knowledge with us.
            <br />
            <br />
            - Translations
            <br />
            <br />
            - AI
            <br />
            <br />
            - Evaluation
          </p>
          <Button url="/contact" text="contact" />
        </div>
      </div>
    </div>
  )
}

export default About