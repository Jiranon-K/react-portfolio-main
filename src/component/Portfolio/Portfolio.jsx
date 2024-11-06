import React from 'react'
import styles from './Portfolio.module.css'
import { Tilt } from 'react-tilt'

function Portfolio() {
    return (
        <div id='portfolio' className={styles.port_con}>
            <h3 className={styles.port_title}>Portfolio</h3>
            <div className={styles.port_list}>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="https://wize-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="https://img2.pic.in.th/pic/image602158b491f5837f.png" />
                        </a>
                    </Tilt>
                    <a href="https://wize-store.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <p>Front-End Ecommerce-Website</p>
                    </a>
                </div>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="https://weather-app-x-simple.vercel.app/" target="_blank" rel="noopener noreferrer">
                            <img src="https://github.com/Jiranon-K/WeatherApp/assets/132673259/a596595e-3d5c-482c-b8a7-4f92ac005606" />
                        </a>
                    </Tilt>
                    <a href="https://weather-app-x-simple.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <p>WeatherApp</p>
                    </a>
                </div>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="https://todo-list-xnet.netlify.app/">
                        <img src="https://github.com/Jiranon-K/To-Do-List/assets/132673259/be7013d7-6643-4553-be95-af3abdebb94b" alt="" />
                        </a>
                    </Tilt>
                    <a href="https://todo-list-xnet.netlify.app/">
                    <p>Todo-List</p>
                    </a>
                </div>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <a href="https://portfolio-tl-one.vercel.app/">
                        <img src="https://github.com/user-attachments/assets/5ae7da1b-b0b7-4e5d-86cb-d592f82164c8" alt="" />
                            </a>
                    </Tilt>
                     <a href="https://portfolio-tl-one.vercel.app/">
                    <p>Portfolio Tailwind</p>
                         </a>
                </div>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
                <div className={styles.port_item}>
                    <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                        <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </Tilt>
                    <p>Project Title</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
