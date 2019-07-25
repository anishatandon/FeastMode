import React from 'react';
import styled from 'styled-components'
import Alexandra from "../../images/Alexandra.jpg"
import Ignacio from "../../images/Ignacio.jpeg"
import Cher from "../../images/Cher.jpeg"
import logo from '../../images/logo.png'

// Style for the logo
const LogoWrapper = styled.div`
    width: 20rem;
`
const LogoImg = styled.img`
    width: 100%;
    height: 100%;

    -webkit-transition: transform 1s ease;
    -moz-transition: transform 1s ease;
    -ms-transition: transform 1s ease;
    -o-transition: transform 1s ease;
    transition: transform 1s ease;

    &:hover {
        transform: translateX( -1px ) rotateY( 180deg );
        -ms-transform: translateX( -1px ) rotateY(180deg);
        -webkit-transform: translateX( -1px ) rotateY(180deg);
    }
}
`
const StyledLogo = () => {
    return <LogoWrapper> <LogoImg src = {logo}/> </LogoWrapper>
}

const AboutPage = () => (
	<div className="content">
		<StyledLogo/>
		<h1>WHAT IS FEASTMODE?</h1>
		<p>Ordering food with friends doesn't have to be difficult. <br/> <b>FeastMode</b> makes it easy. <br/> Pick your app. Pick your food. Pick your friends.</p>
		<h1>MEET THE DEVELOPERS</h1>
		<div className="grid">
			<figure className="effect-moses">
				<img src={Alexandra} alt="img24" />
				<figcaption>
					<h2>Alexandra <span>Loumidis</span></h2>
					<p>is a student at Harvey Mudd College <br /><br /> she is cool</p>
					<a href="#">View more</a>
				</figcaption>
			</figure>
			<figure className="effect-moses">
				<img src={Ignacio} alt="img24" />
				<figcaption>
					<h2>Ignacio <br /><span>Lista Rosales</span></h2>
					<p>is a student at Harvey Mudd College <br /><br /> he is dope</p>
					<a href="#">View more</a>
				</figcaption>
			</figure>
			<figure className="effect-moses">
				<img src={Cher} alt="img24" />
				<figcaption>
					<h2>Cher <br /><span>Ma</span></h2>
					<p>is a student at Harvey Mudd College<br /><br /> she is fly</p>
					<a href="#">View more</a>
				</figcaption>
			</figure>
		</div>
		<h1>SAY HI!</h1>
		<p> Phone: (857) 214-2392  |  Email: feastmode@gmail.com  |  Mailing Address: </p>
	</div>
)

export default AboutPage;
