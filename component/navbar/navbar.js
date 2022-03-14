import styles from "./navbar.module.css"

const Navbar = () => {
    return(
        <div className={styles.navbarWrapper}> 
            <ul className={styles.navbar}>
                <li><a  href="#OurStory" className={styles.navbar__listText}>Our story</a></li>
                <li><a  href="#invitation" className={styles.navbar__listText}>Our wedding</a></li>
                <li><a href="#gallery" className={styles.navbar__listText}>Gallery</a></li>
                <li><a href="#rsvp"className={styles.navbar__listText} >RSVP</a></li>
            </ul>
        </div>
    )
}

export default Navbar