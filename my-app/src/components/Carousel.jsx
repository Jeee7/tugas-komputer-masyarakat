import Carousel from 'react-bootstrap/Carousel';
import Komputer from '../Img/komputer.webp'
import { Container } from 'react-bootstrap';
import './HomeStyling.css'
import { Button  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UncontrolledExample() {
  return (
    <div>
        <Container fluid style={{paddingLeft: '0px', paddingRight: '0px'}} >
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100 darken-image"
                src={Komputer}
                alt="First slide"
                />
                <Carousel.Caption className='caro-cap'>
                <h2>Rangkuman Komputer dan Masyarakat</h2>
                <h4>Nasrul Abdul Karim 02TPLP032</h4>
                <Button style={{marginBottom: '50px'}} as={Link} to='/' variant="primary">Materi</Button>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </Container>
    </div>
  );
}

export default UncontrolledExample;