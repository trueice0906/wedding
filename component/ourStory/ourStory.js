import style from "./ourStory.module.css";
import Image from "next/image";
import OurStoryBackgroundImg from "../../assets/image/light-background.png"
import coupleImg from "../../assets/image/ourStoryImg.jpg"

export default function OurStory() {
    return (
        <section id="OurStory">
            <div className={style.ourStory__wrapper}>
                <Image 
                    className={style.ourStoryBackgroundImg}
                    src={OurStoryBackgroundImg} 
                    alt="background"      
                    layout="fill"   
                    objectFit="cover"          
                />
                <div className={style.ourStory__container}>
                    <div className={style.ourStory__title}>
                        <h1>Our Story</h1>
                    </div>    
                    <div className={style.ourStory__para}>
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        </p>
                    </div>  

                    <div className={style.ourStory__imgCard}>
                        <Image 
                            className={style.ourStory__coupleImg}
                            src={coupleImg} 
                            alt="coupleImg"      
                            objectFit="contain"          
                        />
                    <div/>
                </div>            
            
                </div>
            </div>
        </section>
    )
}