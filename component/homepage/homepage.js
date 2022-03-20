import Image from "next/image";
import CountDownTimer from "../countdownTimer/countdownTimer";
import backgroundImg from "../../assets/image/ourStoryImg.jpg";
import style from "./homepage.module.css";

export default function HomePage() {
    return (
        <section id="homepage" className={style.homepage__container}>
 
            <div className={style.homepage__wrapper}>   
                <Image 
                    className={style.homepage__backgroundImg}
                    src={backgroundImg}
                    alt="background"
                />
                <CountDownTimer/>
            </div>
        </section>
    )
}