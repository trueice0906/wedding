import { useEffect, useState } from "react";
import Image from "next/image";
import backgroundImg from "../../assets/image/background.jpg"
import styles from './bgImage.module.css'

const getWindowDimension = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    }
}

export default function BGImage() {
    const [ width, setWidth ] = useState();
    const [ height, setHeight ] = useState();

    useEffect(() => {
        const { width, height } = getWindowDimension();
        setWidth(width)
        setHeight(height);
    },[])

    useEffect(() => {
        function handleResize() {
            const {width, height } = getWindowDimension();
            setWidth(width);
            setHeight(height);
        }
        window.addEventListener("resize",handleResize);
        return () => window.removeEventListener("resize",handleResize);
    },[]);


        return (

            <div className={styles.bgImage__box}>
                <Image 
                    width={width}
                    height={height}
                    src={backgroundImg} 
                    alt="background"/>
            </div>
            
        )
}