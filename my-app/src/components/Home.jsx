import Container from 'react-bootstrap/Container';
import '../components/HomeStyling.css'
import Carousel from '../components/Carousel'
import NavbarTop from '../components/NavbarTop';

function Home() {
  return (
   
    <div>
      
        <NavbarTop />
        <Container fluid className="carousel-caption-container" >
          <Carousel />
        </Container>

       
    </div>
        
  );
}

export default Home;