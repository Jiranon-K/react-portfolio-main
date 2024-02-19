import React from 'react'
import styles from './Skills.module.css'
import { FaSquareJs, FaReact, FaJava, FaGitAlt, FaNode , FaC , FaPython} from 'react-icons/fa6'

function Skills() {
    return (
        <div className={styles.skills_con}>
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
            </ul>
        </div>
    )
}

export default Skills
