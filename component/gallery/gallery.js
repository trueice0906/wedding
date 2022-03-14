import Thumbnail from "../thumbnail/thumbnail";
import ImageSlide from "../imageSlide/imageSlide";

export default function Gallery({imageUrls}) {
    return (
        <section id="gallery">       
            <ImageSlide imageUrls={imageUrls}/>     
            {/* <Thumbnail/> */}
        </section>
    )
}