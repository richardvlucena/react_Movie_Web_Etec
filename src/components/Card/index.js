import React from 'react'
import { Card, Button, CardGroup } from 'react-bootstrap'
import './style.css';

function index() {
  return (
    <CardGroup >

<Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3yMa9D9OJV4dxf0Gnnvw6EuHDBB.jpg" />
    <Card.Body>
      <Card.Text style={{ width: '20rem' }}>
    As Clawdeen wolf and her friends enter a new life in Scaris they learn some new secrets.
     <p></p> 
     <Button className='watch' >Watch</Button>
    </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimage.tmdb.org%2Ft%2Fp%2Foriginal%2F3olW6cKD87a0L5B4MB2h4mOdz4R.jpg&f=1&nofb=1" />
    <Card.Body>
    <Card.Text style={{ width: '20rem' }}>
    Spectra Vondergeist goes back to her old ghost school to find out why Monster High is being haunted.
     <p></p> 
     <Button className='watch' >Watch</Button>
    </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jtOlo3AaXVBnqfMeKGFrZUMPFui.jpg" />
    <Card.Body>
    <Card.Text style={{ width: '20rem' }}>
    Merliah, a surfer who learns a shocking secret: she's a mermaid! and she need rescue her mother, the queen of Oceana
     <p></p> 
     <Button className='watch' >Watch</Button>
    </Card.Text>
    </Card.Body>
  </Card>

  <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dvjFM3GgYm3gDZ6Ulw0JurDYs4r.jpg" />
    <Card.Body>
    <Card.Text style={{ width: '20rem' }}>
    One day while walking through the forest Liana and Alexa  meet an old beggar who gives them a magical mirror
     <p></p> 
     <Button className='watch' >Watch</Button>
    </Card.Text>
    </Card.Body>
  </Card> 

</CardGroup>

  )
}

export default index