import style from "./invitation.module.css";
import Image from "next/image";
import InvitationBackgroundImg from "../../assets/image/invitation-page.png"
import InvitationMobileBackgroundImg from "../../assets/image/invitation-card.png"


export default function Invitation() {
    return (
        <section id="invitation" className={style.invitation}>
            <div className={style.invitation__wrapper}>
                <Image 
                    src={InvitationBackgroundImg}
                    alt="background"
                />
            </div>

            <div className={style.invitation__wrapper_mobile}>
                <Image 
                    src={InvitationMobileBackgroundImg}
                    alt="background"
                />
            </div>
        </section>
    )
}