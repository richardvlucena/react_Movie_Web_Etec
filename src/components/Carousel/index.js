import React from 'react'
import { Carousel } from 'react-bootstrap'
import './style.css';

function index() {
  return (
    <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://a.ltrbxd.com/resized/sm/upload/ii/ly/fy/qz/alice-in-wonderland-2010-1200-1200-675-675-crop-000000.jpg?k=981db5fa0b "
        alt="First slide"
      />
      <Carousel.Caption>
      <h3>Alice in Wonderland</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://images.alphacoders.com/522/thumb-1920-522283.jpg"
        alt="First slide"
      />
     <Carousel.Caption>
        <h3>Monster High</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src="https://vignette4.wikia.nocookie.net/everafterhigh/images/0/0b/Regina_festas_ever_after-high.jpg/revision/latest?cb=20160531103744"
        alt="Second slide"
      />
  
  <Carousel.Caption>
        <h3>Ever After High</h3>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://br.web.img3.acsta.net/newsv7/21/04/14/20/47/5082556.jpg" 
        alt="Third slide"
      />
  
  <Carousel.Caption className='txtcarousel'>
        <h3>Frozen II</h3>
      </Carousel.Caption>
      
    </Carousel.Item>
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src=" https://1.bp.blogspot.com/-5550CoGgLWc/ViVwTvW29HI/AAAAAAABNeQ/rPoK75Eb-Y0/s1600/21796063.jpg" 
        alt="Third slide"
      />
  
  <Carousel.Caption className='txtcarousel'>
        <h3>Ever After High - Way Too Wonderland</h3>
      </Carousel.Caption>
      
    </Carousel.Item>
  </Carousel>
  )
}

export default index