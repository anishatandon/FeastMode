import React from 'react';
import styled from 'styled-components'


// INTRODUCING STYLED COMPONENTS HERE
const Roles = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`
const Bios = styled(Roles)`
  margin: 10px; 
`
// END OF STYLED COMPONENTS 

const AboutPage = () => (
  <div>
    <section class="center">
      <div class="aboutus">
        <h1>About Us</h1>
      </div>
    </section>


    <Roles>
        <p id= "alexandra">Developer</p>
        <p id= "ignacio">Developer</p>
        <p id= "cher">Developer</p>
    </Roles>

    <section class="grid">
    <Bios>
      <p id= "a1">
        <i class="textinc">Alexandra</i> is a Harvey Mudd student .....
      </p>
    </Bios>
    <Bios>
      <p id= "i1">
        <i class="textinc">Ignacio</i> is a Harvey Mudd student .....
      </p>
    </Bios>
    <Bios>
      <p id= "c1">
        <i class=" textinc">Cher</i> is a Harvey Mudd student .....
      </p>
   </Bios>
   </section>

  </div>
);

export default AboutPage;
