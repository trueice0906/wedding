import Navbar from '../component/navbar/navbar'
import HomePage from '../component/homePage/homepage';
import Invitation from '../component/invitation/invitation';
import OurStory from '../component/ourStory/ourStory';
import Rsvp from '../component/rsvp/rsvp';
import Gallery from '../component/gallery/gallery';


export default function Home() {

    return(    
      <>
        <Navbar />
        <HomePage />
        <Invitation />
        <Gallery/>
        <OurStory/>
        <Rsvp/>
      </>
    )
}

// export async function getStaticProps() {
//   const storage = getStorage();
//   const listRef = ref(storage,'wedding-images');

//   const res = await listAll(listRef);
//   const items = res.items
//   const imagesPromises =  items.map(async imageRef => {
//     let url = await getDownloadURL(imageRef);
//     return url;
//   })

//   const allImages = await Promise.all(imagesPromises);

//   return {
//       props: {
//           allImages
//       }
//   }
// }