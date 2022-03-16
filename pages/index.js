import Navbar from '../component/navbar/navbar'
import HomePage from '../component/homepage/homepage';
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