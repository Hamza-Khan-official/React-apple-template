import React from 'react'
import styles from './Screen_1.module.css';
import Button from 'react-bootstrap/Button';
import image from '/public/screen_1_image_1.png'



const Screen_1 = () => {
    return (
        <div  className={styles.main_div_screen_1}>
            <br /><br />

            <center>
                <div className={styles.iphone}>
                    <p>iPhone</p>
                </div>
                <div className={styles.paragragh}>
                    <p>Say hello to the latest generation of iPhone</p>
                </div>
                <div className={styles.screens_button_1}>
                    <Button variant="primary">Learn More</Button>
                    <Button variant="primary">Shop iPhone</Button>
                </div>
                <div className={styles.image_1}>
                    <img src={image} alt="" />
                </div>

            </center>

      <br /><br />
        </div>
      
    )
}

export default Screen_1