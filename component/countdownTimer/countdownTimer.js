import { useEffect, useState } from "react";
import style from "./countdownTimer.module.css"

const CountDownTimer = () => {

    const formatTime = (n) => {
        return (n<10? '0':'') + n
    }

    const calculateTimeLeft = () => {
        const countDownDate = new Date("Jun 04,2022 12:30:00").getTime();
        const now = new Date().getTime();
        let difference = countDownDate-now
        let timeLeft = {}
        if (difference > 0) {
            timeLeft = {
                days: formatTime(Math.floor(difference / (1000 * 60 * 60 * 24 ))),
                hours: formatTime(Math.floor((difference / (1000 * 60 * 60)) % 24)),
                mins:  formatTime(Math.floor((difference / 1000 / 60) % 60)),
                secs: formatTime(Math.floor((difference / 1000) % 60))
            }
        }
        return timeLeft;
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        },1000)

        return () => clearTimeout(timer);
    })

    const { days, hours, mins, secs} = timeLeft

    return (
        <div className={`${style.countDown__container}`}>
            <div className={style.countDown__wrapper}>
                <div className={style.countDown__title}><h1>Our Wedding Day</h1></div>
                
                <div className={style.countDown__date}>
                    <div className={style.dateTime__clusterWrapper}>
                        <div className={style.dateTime__wrapper}>
                            <p className={style.dateTime}>{days}</p>
                            <span className={style.dateTime_indicator}>DAYS</span>
                        </div>
                    </div>
                    <div className={style.dateTime__clusterWrapper}>
                        <div className={style.dateTime__wrapper}>
                            <p className={style.dateTime}>{hours}</p>
                            <span className={style.dateTime_indicator}>HOURS</span>
                        </div>
                    </div>
                    <div className={style.dateTime__clusterWrapper}>
                    <div className={style.dateTime__wrapper}>
                            <p className={style.dateTime}>{mins}</p>
                            <span className={style.dateTime_indicator}>MINS</span>
                        </div>
                    </div>
                    <div className={style.dateTime__clusterWrapper}>
                    <div className={style.dateTime__wrapper}>
                            <p className={style.dateTime}>{secs}</p>
                            <span className={style.dateTime_indicator}>SECS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountDownTimer;