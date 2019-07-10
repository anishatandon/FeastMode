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
const Text = styled.h1`
  padding-top: 20px;
  font-size: 50px;
`
const Grid = styled.section`
  padding-bottom: 25px;
  display: grid;
  grid-template-columns: auto auto auto;
`
const Window = styled.div`

  justify-content: space-around;
  text-align: center;
`

const Cher = () => (
  <Bios>
      <p id= "c1">
        <i class=" textinc">Cher</i> is a Harvey Mudd student .....
      </p>
  </Bios>
)

const Alexandra = () => (
  <Bios>
      <p id= "c1">
        <i class=" textinc">Alexandra</i> is a Harvey Mudd student .....
      </p>
  </Bios>
)

const Ignacio = () => (
  <Bios>
      <p id= "c1">
        <i class=" textinc">Ignacio</i> is a Harvey Mudd student .....
      </p>
  </Bios>
)

// END OF STYLED COMPONENTS 

const AboutPage = () => (
  <Window>
    <Text>About Us</Text>
    <Roles>
      <p id="alexandra">Developer</p>
      <p id="ignacio">Developer</p>
      <p id="cher">Developer</p>
    </Roles>
    <Grid>
      <Alexandra />
      <Ignacio />
      <Cher />
    </Grid>
  </Window>
);

export default AboutPage;
