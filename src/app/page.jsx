
import Image from 'next/image'
import styles from './page.module.css'
import Hero from '@/components/hero/Hero'

export default function Home() {
  return (
    <div>


      <div className={styles.container}>

        <div className={styles.item}>
          <h1 className={styles.title}>Pioneering AI: Bridging Talent and Tech.</h1>
          <p className={styles.desc}>Experience tailored solutions and exceptional talent that elevate your AI journey.<br />
            Delve into a new dimension of Artificial Intelligence.</p>
        </div>
        <div className={styles.item}>
          <Image src='/hero.png' width={500} height={500} alt='hero image' className={styles.img} />
        </div>

      </div>
      <Hero />
    </div>

  )
}
