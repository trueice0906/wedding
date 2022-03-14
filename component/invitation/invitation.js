import style from "./invitation.module.css";
import Image from "next/image";
import InvitationBackgroundImg from "../../assets/image/invitation-page.png"

export default function Invitation() {
    return (
        <section id="invitation">
            <div className={style.invitation__wrapper}>
                <Image 
                    className={style.invitation__backgroundImg}
                    src={InvitationBackgroundImg}
                    alt="background"
                />
            </div>
        </section>
    )
}