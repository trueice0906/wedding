import style from './imageSlide.module.css'
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faAngleRight
  } from "@fortawesome/free-solid-svg-icons";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick';
import { useState,useEffect } from 'react';
import galleryPhotos from "../../galleryPhotos/galleryPhotos.json";
// import { getStorage, listAll, ref, getDownloadURL } from 'firebase/storage';

function NextArrow(props) {
    const { onClick } = props;
    return (
      <div className={`${style.slick_arrow_iconWrapper} ${style.slick_arrow_right}`} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleRight} className={style.slick_arrow_icon} />
      </div>
    );
  }
  
  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <div className={`${style.slick_arrow_iconWrapper} ${style.slick_arrow_left}`} onClick={onClick}>
        <FontAwesomeIcon icon={faAngleLeft} className={style.slick_arrow_icon} />
      </div>
    );
  }

export default function ImageSlide() {


    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);

    // const [allImages, setAllImages] = useState([])
    
    // const getImagesFromFirebase = async () => {
    //     const storage = getStorage();
    //     const listRef = ref(storage,'wedding-images');
    //     const res = await listAll(listRef);
    //     const items = res.items
    //     const imagesPromises = items.map(async imageRef => {
    //         let url = await getDownloadURL(imageRef);
    //         return url;
    //     })
 
        
    //     const allImages = await Promise.all(imagesPromises);

    //     return allImages;
        // listAll(listRef)
        // .then((res)=> {
        //     res.items.forEach((imageRef) => {
        //         getDownloadURL(imageRef)
        //             .then((url) => {
        //                 setAllImages((allImages) => [...allImages, url])
        //             })
        //     })
        // })
        // .catch(function(error) {
        //     console.log(error)
        // })
    // }

    // useEffect(async ()=> {
    //     const images = await getImagesFromFirebase();
    //     setAllImages(images);
    // },[])

    // useEffect(()=> {
    //   setAllImages(galleryPhotos)
    // },[])

    useEffect(() => {
        setNav1(slider1);
        setNav2(slider2);
    })
    // console.log(allImages)

    const settingMain = {
        slidesToShow: 1,
        arrows: false, 
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        fade: true,
        asNavFor: nav2,  
      }

    const settingThumbs = {
        slidesToShow: 5,
        slidesToScroll: 1,
        focusOnSelect: true,
        centerMode: true,
        asNavFor: nav1,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
              }
            },
        ],
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    }

 
    return (

            <div className={style.imageSlide__container}>
                
                 {/* <div className={style.imageSlide__iconContainer}>
                    <button 
                        className={style.imageSlide__iconWrapper}
                        onClick={sliderRef?.slickPrev}
                    >
                        <FontAwesomeIcon       
                            className={style.imageSlide__caretIcon}         
                            icon={faAngleLeft}    
                        />
                    </button>
                    <button 
                        className={style.imageSlide__iconWrapper}
                        onClick={sliderRef?.slickNext}
                    >
                        <FontAwesomeIcon
                            className={style.imageSlide__caretIcon}
                            icon={faAngleRight}                    
                        />
                    </button> 
                </div>  */}

                <Slider 
                    ref={slider => (setSlider1(slider))}
                    {...settingMain}
                    >

                    {galleryPhotos.map((imgUrl) => {
                        return(
                        // eslint-disable-next-line react/jsx-key
                        <div className={style.imageSlider__imgWrapper}>
                            <Image
                                src={imgUrl.url}
                                alt="galleryImg"
                                objectFit="contain"
                                layout='fill'
                            /> 
                        </div>
                        )
                    })}
                </Slider> 

                <div className={style.secondSlider}>
                     <Slider
                        {...settingThumbs}
                        ref={slider => setSlider2(slider)}           
                    >
                        {galleryPhotos.map((imgUrl) => {
                            return(
                                // eslint-disable-next-line react/jsx-key
                                <div className={style.thumbnail__cardWrapper}>
                                    <Image
                                        src={imgUrl.url}
                                        alt="gallery-photo"  
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div> 
                            )
                        })}

                    </Slider>  

                </div>
         
            </div>
    )
}


