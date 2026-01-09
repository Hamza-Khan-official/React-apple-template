import React from 'react'
import image_3___ from '/public/screen_3_image_3.png'
import image_2 from '/public/screen_3_image_3.2.png'
import styles from './Screen_3.module.css';
import Button from 'react-bootstrap/Button';

const Screen_3 = () => {
    return (
        <div>
            <div className={styles.main_div_screen_3}>

                <center>
                    <div className={styles.image_3}>
                        <img src={image_3___} alt="" />
                    </div>
                    <div className={styles.but_par}>
                        <div className={styles.paragragh}>
                            <p>Say hello to the latest generation of iPhone</p>
                        </div>
                        <div className={styles.screens_button_3}>
                            <Button variant="primary">Learn More</Button>
                            <Button variant="primary">Shop iPhone</Button>
                        </div>
                        <div className={styles.image_3}>
                            <img src={image_2} alt="" />
                        </div>
                    </div>
                <br />

                </center>

            </div>
        </div>
    )
}

export default Screen_3