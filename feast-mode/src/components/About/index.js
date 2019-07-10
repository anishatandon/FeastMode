import React from 'react';
import styled from 'styled-components'
import Alexandra from "./Alexandra.jpg"
import Ignacio from "./Ignacio.jpg"
import IgnacioCool from "./IgnacioCool.jpg"

// INTRODUCING STYLED COMPONENTS HERE
// const Roles = styled.div`
//   display: flex;
//   justify-content: space-around;
//   text-align: center;
// `
// const Bios = styled(Roles)`
//   margin: 10px; 
// `
// const Text = styled.h1`
//   padding-top: 20px;
//   font-size: 50px;
// `
// const Grid = styled.section`
//   padding-bottom: 25px;
//   display: grid;
//   grid-template-columns: auto auto auto;
// `
// const Window = styled.div`

//   justify-content: space-around;
//   text-align: center;
// `

// const Cher = () => (
//   <Bios>
//       <p id= "c1">
//         <i class=" textinc">Cher</i> is a Harvey Mudd student .....
//       </p>
//   </Bios>
// )

// const Alexandra = () => (
//   <Bios>
//       <p id= "c1">
//         <i class=" textinc">Alexandra</i> is a Harvey Mudd student .....
//       </p>
//   </Bios>
// )

// const Ignacio = () => (
//   <Bios>
//       <p id= "c1">
//         <i class=" textinc">Ignacio</i> is a Harvey Mudd student .....
//       </p>
//   </Bios>
// )

// // END OF STYLED COMPONENTS 

// const AboutPage = () => (
//   <Window>
//     <Text>About Us</Text>
//     <Roles>
//       <p id="alexandra">Developer</p>
//       <p id="ignacio">Developer</p>
//       <p id="cher">Developer</p>
//     </Roles>
//     <Grid>
//       <Alexandra />
//       <Ignacio />
//       <Cher />
//     </Grid>
//   </Window>
// );

const users = [ 
  {
    id: 1,
    name: "Alexandra",
    title: "Developer",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
  },
  {
    id: 2,
    name: "Ignacio",
    title: "Developer",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
  },
  {
    id: 3,
      name: "Cher",
      title: "Developer",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg",
  }
]

const AboutPageFakeNews = () => (
  <div>
  <div className="container">
    <h1 className="section-title">Meet the Team</h1>
  </div>
  <section className="grid">
    <div className="column" key={users.id}>
      <div className="user">
        <img className="avatar" src={users[0].avatar}/>
      </div>
    </div>
    <div className="column" key={users.id}>
      <p >
        <i>{users[1].name}</i> is a Harvey Mudd student .....
      </p>
    </div>
    <div className="column" key={users.id}>
      <p>
        <i>{users[2].name}</i> is a Harvey Mudd student .....
      </p>
    </div>
  </section>
  </div>
)

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



const AboutPageReal = () => (
  <div class="content">
				<h1>MEET THE TEAM</h1>
				<div class="grid">
					<figure class="effect-moses">
						<img src={Ignacio} alt="img24"/>
						<figcaption>
							<h2>Alexandra <span>Loumidis</span></h2>
							<p>is a student at Harvey Mudd College</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
          <figure class="effect-moses">
						<img src={Alexandra} alt="img24"/>
						<figcaption>
							<h2>Ignacio <br/><span>Lista Rosales</span></h2>
							<p>Moses loves to run after butterflies.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure class="effect-moses">
						<img src={IgnacioCool} alt="img24"/>
						<figcaption>
							<h2>Cher <br/><span>Ma</span></h2>
							<p>Moses loves to run after butterflies.</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
			</div>
)

export default AboutPageReal;
