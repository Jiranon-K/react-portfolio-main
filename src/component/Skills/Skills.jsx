import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaJava, FaGitAlt, FaNode , FaC , FaPython , FaHtml5, FaCss3} from 'react-icons/fa6'

function Skills() {
    return (
        <div  id='services' className={styles.skills_con}>
            <h3 className={styles.skills_title}>My Skill Set</h3>
            <ul className={styles.skills_list}>
                <li>
                    <FaSquareJs />
                </li>
                <li>
                    <FaReact />
                </li>
                <li>
                    <FaJava />
                </li>
                <li>
                    <FaGitAlt />
                </li>
                <li>
                    <FaNode />
                </li>
                <li>
                    <FaC />
                </li>
                <li>
                    <FaPython />
                </li>
                <li>
                    <FaHtml5 />
                </li>
                <li>
                    <FaCss3 />
                </li>
            </ul>
        </div>
    )
}

export default Skills
