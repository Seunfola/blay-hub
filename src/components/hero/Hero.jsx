'use client'
import styles from './hero.module.css'
// import hero from '../../public/hero-image.png';
import { HiLocationMarker } from "react-icons/hi";
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.text}>
                    Hire The Best Quality Rater For Your Projects
                </div>
                <div className={styles.desc}>
                    <span className={styles.secondaryText}>
                        Find a variety of most qualified rater and quality evaluator that suit your project very easily.
                    </span>
                    <span className={styles.secondaryText}>
                        Forget all difficulties in finding a talents
                    </span>
                </div>
            </div>
            <div className={styles.stats}>
                <div className={styles.statText}>
                    <span>
                        <CountUp start={1} end={50000000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className={styles.secondaryTest}>
                        Translated Words
                    </span>
                </div>
                <div className={styles.statText}>
                    <span>
                        <CountUp start={1} end={30000} duration={4} />
                        <span>+</span>
                    </span>
                    <span className={styles.secondaryTest}>
                        Projects Done With Excellent Accuracy
                    </span>
                </div>
                <div className={styles.statText}>
                    <span>
                        <CountUp end={50} />
                        <span>+</span>
                    </span>
                    <span className={styles.secondaryTest}>
                        Languages Worked
                    </span>
                </div>
            </div>
        </div>

    )
}

export default Hero