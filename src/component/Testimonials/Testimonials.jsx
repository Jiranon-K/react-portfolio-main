import React from 'react'
import styles from './Testimonials.module.css'

function Testimonials() {
    return (
        <div className={styles.testi_con}>
            <h3 className={styles.testi_title}>Testimonials</h3>
            <div className={styles.testi_list}>
                <div className={styles.testi_items}>
                    <p>
                        The company itself is a very successful company. It turns out that in the choice of an expedient architect we can praise a lot. Great and unbound pleasure.
                    </p>
                    <img src="https://images.unsplash.com/photo-1488161628813-04466f872be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>John Doe</h4>
                    <p className={styles.bio}>Web Developer</p>
                </div>

                <div className={styles.testi_items}>
                    <p>
                        The company itself is a very successful company. It turns out that in the choice of an expedient architect we can praise a lot. Great and unbound pleasure.
                    </p>
                    <img src="https://images.unsplash.com/photo-1481437642641-2f0ae875f836?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>Mark Lamber</h4>
                    <p className={styles.bio}>Marketing Manager</p>
                </div>
                <div className={styles.testi_items}>
                    <p>
                        The company itself is a very successful company. It turns out that in the choice of an expedient architect we can praise a lot. Great and unbound pleasure.
                    </p>
                    <img src="https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" />
                    <h4>Shin Chan</h4>
                    <p className={styles.bio}>UX/UI Designer</p>
                </div>
            </div>

        </div>
    )
}

export default Testimonials
