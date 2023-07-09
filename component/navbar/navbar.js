import styles from "./navbar.module.css"
import { useEffect, useState } from "react";
import Link from 'next/link'

const useWindowDimensions = () => {
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.screen.width)
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize',handleResize);
    },[])

    return windowWidth;
}

const Navbar = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const width = useWindowDimensions();
    const breakpoint = 678;

    return(
            <div className={styles.navbarWrapper}>      

                {width <= breakpoint? (       
                // {/* mobile menu */}
                    <div>
                        <div 
                            className={`${styles.navbar_hamburgerBtn} ${menuOpen?styles.open:""}`} 
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>

                    {menuOpen && 
                        <ul className={styles.navbar_mobile}>
                            <Link href="#invitation">
                                <li 
                                    onClick={() => setMenuOpen(false)}>
                                    <a className={styles.navbar__listText}>
                                        Our wedding</a></li>
                            </Link>

                            <Link href="#gallery">
                                <li onClick={() => setMenuOpen(false)}><a href="#gallery" className={styles.navbar__listText}>Gallery</a></li>
                            </Link>

                            <Link href="#rsvp">
                                <li onClick={() => setMenuOpen(false)}><a href="#rsvp" className={styles.navbar__listText} >RSVP</a></li>
                            </Link>
                        </ul>
                }                
            </div>
                ) : (
                    // browser menu
                    <ul className={styles.navbar}>

                        <Link href="#invitation">
                            <li onClick={() => setMenuOpen(false)}><a href="#gallery" className={styles.navbar__listText}>Our wedding</a></li>
                        </Link>

                        <Link href="#gallery">
                            <li onClick={() => setMenuOpen(false)}><a href="#gallery" className={styles.navbar__listText}>Gallery</a></li>
                        </Link>

                        <Link href="#rsvp">
                            <li onClick={() => setMenuOpen(false)}><a href="#rsvp" className={styles.navbar__listText} >RSVP</a></li>
                        </Link>
                    </ul>
                )
            }
        </div>
    )}

export default Navbar