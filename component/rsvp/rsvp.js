/* eslint-disable react/no-unescaped-entities */
import styles from "./rsvp.module.css"
import { useState } from "react";
import { db } from "../../firebase/firebase.utils";
import { doc, getDoc, setDoc } from "firebase/firestore";

const Rsvp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (name === "" || email === "") {
            setErrorMessage("Please fill up your details")

        } else {
            try {
                // check if email exist in firebase firestore
    
                const guestDocRef = doc(db,"guestList",email);
                const snapShot = await getDoc(guestDocRef);
                // if email not exists ,create data in firestore
                if (!snapShot.exists()) {                    
                    await setDoc(doc(db,"guestList",email),{
                         name,email                         
                     })
                     setSuccessMessage("RSVP successfully.We'll see you in the wedding !")
                } else {
                // if email exists in database
                    setErrorMessage("You have already RSVP.We'll see you in the wedding !")
                }

            } catch(error) {
                console.log(error)
            }
        }
    }

    return(
       <section id="rsvp" className={styles.rsvp__section}>

        <div className={styles.rsvp__container}>
            <div className={styles.rsvp__leftBar}>
                <div className={styles.rsvp__formTitle}>
                    <h3>Yes, I'll come</h3>
                </div>

                <div className={styles.rsvp__formWrapper}>
                    <form className={styles.rsvp__form} >
                        <div className={styles.rsvp__inputWrapper}>
                            <p>Name</p>
                            <input name="name" placeholder="Name" className={styles.rsvp__inputBar} onChange={e => setName(e.target.value)}/>
                        </div>
                        <div className={styles.rsvp__inputWrapper}>
                            <p>Email</p>
                            <input name="email" placeholder="Email address" className={styles.rsvp__inputBar} onChange={e => setEmail(e.target.value)}/>
                        </div>

                        { errorMessage && 
                            <p className={styles.rsvp__errorMessage}>{errorMessage}</p> }

                        { successMessage && 
                            <h1 className={styles.rsvp__successMessage}>{successMessage}</h1> }
                    </form>
                </div>

                <button className={styles.rsvp__register__button} onClick={handleSubmit}> 
                    Register
                </button>
            </div>

            <div className={styles.rsvp__rightBar}>
                <div className={styles.rsvp__venueDetail}>
                    
                    <p>Jun 04 2022</p>
                    <p>12:30 Cocktail</p>
                    <p>13:00 Lunch</p>
                    <p>E&O Hotel</p>
                    <p>10, Lebuh Farquhar, George Town, 10200 George Town, Pulau Pinang, Malaysia</p>

                </div>
            </div>
        </div>

       </section>
    )
}

export default Rsvp;