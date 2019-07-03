import React from 'react';

import './about.css'

const AboutPage = () => (
  <div>



    <section class="center">
      <div class="aboutus">
        <h1>About Us</h1>
      </div>
    </section>


    <div class="roles">
        <p id= "alexandra">Developer</p>
        <p id= "ignacio">Developer</p>
        <p id= "cher">Developer</p>
    </div>


    <section class="grid">
    <div class="bios">
      <p id= "a1">
        <i class="textinc">Alexandra</i> is a Harvey Mudd student .....
      </p>
    </div>
    <div class="bios">
      <p id= "i1">
        <i class="textinc">Ignacio</i> is a Harvey Mudd student .....
      </p>
    </div>
    <div class="bios">
      <p id= "c1">
        <i class=" textinc">Cher</i> is a Harvey Mudd student .....
      </p>
   </div>
   </section>

  </div>
);

export default AboutPage;
