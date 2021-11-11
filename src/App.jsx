import styled, { css } from "styled-components";
import Feature from "./components/Feature";
import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import Price from "./components/Price";
import Service from "./components/Service";

const Container = styled.div`
	height: 100vh;
	overflow: hidden;
	position: relative;
`;

// Common CSS
const Shape = css`
	width: 100%;
	height: 100%;
	position: absolute;
	z-index: -1;
	top: 0;
	left: 0;
`;

const IntroShape = styled.div`
	${Shape}
	clip-path: polygon(63% 0, 100% 0%, 100% 100%, 53% 100%);
	background-color: crimson;
`;

const FeatureShape = styled.div`
	${Shape}
	clip-path: polygon(0 0, 53% 0%, 32% 100%, 0% 100%);
	background-color: pink;
`;

const ServiceShape = styled.div`
	${Shape}
	clip-path: polygon(0 0, 32% 0%, 32% 100%, 0% 100%);
	background-color: #f88497;
`;

const PriceShape = styled.div`
	${Shape}
	clip-path: polygon(32% 0, 100% 0%, 100% 100%, 67% 100%);
	background-color: crimson;
`;

const App = () => {
	return (
		<>
			<Container>
				<Navbar/>
				<Intro/>
				<IntroShape/>
			</Container>
	
			<Container>
				<Feature />
				<FeatureShape />
			</Container>

			<Container>
				<Service/>
				<ServiceShape/>
			</Container>

			<Container>
				<Price />
				<PriceShape/>
			</Container>
		</>
	);
};

export default App;