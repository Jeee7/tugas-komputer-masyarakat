import React from 'react';
import NavbarTop from './NavbarTop'
import pdf from '../Img/pertemuan5.pdf'
import { Button  } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';

const Isi5 = () => {
  return (
    <div>
        <NavbarTop />
        <Container>
        <Stack direction="horizontal" gap={3}>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi1' variant="primary">Pertemuan 1</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi2' variant="primary">Pertemuan 2</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi3' variant="primary">Pertemuan 3</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi4' variant="primary">Pertemuan 4</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi5' variant="primary">Pertemuan 5</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi6' variant="primary">Pertemuan 6</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi7' variant="primary">Pertemuan 7</Button>
                </Stack>
        <embed src={pdf} style={{paddingTop: '50px', paddingBottom: '50px'}} type="application/pdf" width="100%" height="500px" />
        <Stack direction="horizontal" gap={2} style={{paddingBottom: '50px'}}>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi8' variant="primary">Pertemuan 8</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi9' variant="primary">Pertemuan 9</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi10' variant="primary">Pertemuan 10</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi11' variant="primary">Pertemuan 11</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi12' variant="primary">Pertemuan 12</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi13' variant="primary">Pertemuan 13</Button>
                    <Button style={{marginTop: '50px'}} as={Link} to='/Isi14' variant="primary">Pertemuan 14</Button>
                </Stack>
        </Container>
    </div>
  );
};

export default Isi5;
