import React from 'react'
import styles from './Screen_2.module.css';
import Button from 'react-bootstrap/Button';
import image from '/public/screen_2_image_2.png'

const Screen_2 = () => {
    return (
        <div className={styles.main_div_screen_2}>
            <br /><br />
            <br /><br />

            <center>
                <div >
                    <p className={styles.watch} >Watch <span className={styles.series}>Series 11</span></p>
                </div>
                <div className={styles.paragragh}>
                    <p>Turn resolution into routines.</p>
                    <p>Quit quitting your fitness goals.</p>
                </div>
                <div className={styles.screens_button_2}>
                    <Button variant="primary">Learn More</Button>
                    <Button variant="primary">Buy</Button>
                </div>
                <div className={styles.image_2}>
                    <img src={image} alt="" />
                </div>

            </center>

        </div>
    )
}

export default Screen_2
