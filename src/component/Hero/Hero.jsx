import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation'
import { Tilt } from 'react-tilt'

function Hero() {
    return (
        <div className={styles.hero_warpper}>
            <div className={styles.container}>
                <div className={styles.hero_con}>
                    <div className={styles.hero_info}>
                        <p className={styles.text_1}>Hi, it’s me</p>
                        <h3 className={styles.text_2}>Jiranon-K</h3>
                        <p className={styles.text_3}>
                            <span style={{marginRight: '10px'}}>I'm a </span>
                            <TypeAnimation
                                sequence={[
                                    // Same substring at the start will only be typed out once, initially
                                    'Front-End Developer',
                                    1000, // wait 1s before replacing "Mice" with "Hamsters"
                                    'Web Developer',
                                    1000,
                                    
                                ]}
                                speed={50}     
                                repeat={Infinity}
                            />
                        </p>
                        <p className={styles.text_4}>
                            I am a university student majoring in Computer Science <br />This is a website for collects my work.
                        </p>
                        <ul className={styles.hero_social}>
                            <li><a href="https://github.com/Jiranon-K"><FaGithub /></a></li>
                            <li><a href="https://www.linkedin.com/in/jiranon-k/"><FaLinkedin /></a></li>
                            <li><a href="https://www.facebook.com/JiranonMe"><FaFacebook /></a></li>
                        </ul>
                    </div>
                    <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
                        <div className={styles.hero_img}></div>
                    </Tilt>
                </div>
            </div>
        </div>
    )
}

export default Hero
