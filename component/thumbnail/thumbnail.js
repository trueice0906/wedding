import style from "./thumbnail.module.css"
// import ImageUrls from "../../data/galleryPhotos"
import Image from "next/image"

export default function Thumbnail() {


    return (
        <div className={style.thumbnail__wrapper}>
{/* 
           {ImageUrls.map((image) => {
               return(
                    // eslint-disable-next-line react/jsx-key
                    <div className={style.thumbnail__cardWrapper}>
                        <Image
                            src={image.url}
                            alt="gallery-photo"  
                            layout="fill"
                            objectFit="contain"
                        />
                    </div>
               )
           })} */}

        </div>
    )
}