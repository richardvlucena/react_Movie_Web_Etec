import React from 'react'
import { Form,Figure,  Button, Spinner} from 'react-bootstrap'
import './a.css';


function profile() {
  return (
<div className='a2'>      
    <Figure>
    <Figure.Image
      width={480}
      height={480}
      alt="500x800"
      src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fvignette1.wikia.nocookie.net%2Froyal-rebel-pedia%2Fimages%2F9%2F91%2FLizzie_-_Lizzie_Hearts_Fairytale_First_Date.png%2Frevision%2Flatest%3Fcb%3D20140901170853&f=1&nofb=1"
    />
  <Figure.Caption>
      Lizzie Hearts
    </Figure.Caption>

    <Figure.Image
        width={480}
        height={480}
      alt="180x180"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.-PFO2a4il8W5iqGLuY5wDwHaEK%26pid%3DApi&f=1"
    />
     <Figure.Caption>
     Apple White
    </Figure.Caption>

    <Figure.Image
   width={480}
   height={480}
      alt="180x180"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fp__%2Fimages%2F4%2F48%2FRaven_Queen_the_Daughter_of_the_Evil_Queen.png%2Frevision%2Flatest%3Fcb%3D20150513012601%26path-prefix%3Dprotagonist&f=1&nofb=1"
    />
   <Figure.Caption>
   Raven Queen
    </Figure.Caption>

    <Figure.Image
       width={480}
       height={480}
      alt="180x180"
      src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F2b%2Ff8%2Ff5%2F2bf8f54e5167f2a93ffc5e18e249b1cd.jpg&f=1&nofb=1"
    />
     <Figure.Caption>
     Madeline Hatter
    </Figure.Caption>
    
    <Figure.Image
        width={480}
        height={480}
      alt="180x180"
      src="https://i.pinimg.com/736x/a7/61/44/a761448e9bc9529bb735cedd4a6ea23e.jpg"
    />
    <Figure.Caption>
    Kitty Cheshire
    </Figure.Caption>
  </Figure>
  </div>  
    
  )
}

export default profile