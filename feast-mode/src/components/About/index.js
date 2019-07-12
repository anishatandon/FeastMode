import React from 'react';
import styled from 'styled-components'
import Alexandra from "./Alexandra.jpg"
import Ignacio from "./Ignacio.jpeg"
import Cher from "./Cher.jpeg"

const AboutPageReal = () => (
  <div className="content">
	  			<h1>ABOUT FEASTMODE</h1>
				<h1>MEET THE DEVELOPERS</h1>
				<div className="grid">
					<figure className="effect-moses">
						<img src={Alexandra} alt="img24"/>
						<figcaption>
							<h2>Alexandra <span>Loumidis</span></h2>
							<p>is a student at Harvey Mudd College <br/><br/> she is cool</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
          <figure className="effect-moses">
						<img src={Ignacio} alt="img24"/>
						<figcaption>
							<h2>Ignacio <br/><span>Lista Rosales</span></h2>
							<p>is a student at Harvey Mudd College <br/><br/> he is dope</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
					<figure className="effect-moses">
						<img src={Cher} alt="img24"/>
						<figcaption>
							<h2>Cher <br/><span>Ma</span></h2>
							<p>is a student at Harvey Mudd College<br/><br/> she is fly</p>
							<a href="#">View more</a>
						</figcaption>			
					</figure>
				</div>
			</div>
)

export default AboutPageReal;
