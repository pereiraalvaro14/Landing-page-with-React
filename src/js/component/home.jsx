import React from "react";

import Card from "./card.jsx";
import Jumbotron from "./jumbotron.jsx";
import Navbar from "./navbar.jsx";
import Footer from "./footer.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="card-group">
					<Card
						img="https://cambridgecarbonmap.org/wp-content/uploads/2021/09/coding.png"
						title="Some Code"
						content="Esta es una imagen de prueba, donde se puede ver código ya que estoy estudiando en la academia 4Geeks y estoy haciendo un Bootcamp."
						button="Aprende a programar aquí"
						href="https://4geeksacademy.com/"
					/>
					<Card
						img="https://upload.wikimedia.org/wikipedia/commons/8/8f/Tomorrowland2015.jpg"
						title="Tomorrowland"
						content="Tomorrowland es un festival de música electrónica que se celebra en Boom-Belgica durante el verano."
						button="Ir a tomorrowland"
						href="https://www.tomorrowland.com/home/"
					/>
					<Card
						img="https://ucex.org/wp-content/uploads/2020/04/viajes.jpg"
						title="Viajando alrededor del mundo"
						content="Una vez que el virus viajero te pica, no hay antídoto posible y sé que estaré felizmente contagiado para el resto de mi vida”.

						– Michael Palin"
						button="Quieres viajar? - Pincha aquí"
						href="https://www.ryanair.com/es"
					/>
					<Card
						img="https://media.gq.com.mx/photos/60c024fe08f4b16bfa7c0207/master/pass/Portugal%20(1).jpg"
						title="Portugal Campeon Eurocopa 2016"
						content="En el año 2016 Portugal salió campeon de la Eurocopa celebrada en Francia. Algo completamente inesperado que tuve la felicidad de poder vivir."
						button="Ver imagenes de la Eurocopa"
						href="https://www.google.es/search?q=Eurocopa+2016&hl=es-419&sxsrf=APq-WBscOCBtUlWXJaI041Y-u8Q_2ekALQ:1644923427503&source=lnms&tbm=isch&sa=X&ved=2ahUKEwj0sdCkyYH2AhUQ4YUKHfj4B-wQ_AUoAXoECAEQAw&biw=1536&bih=754&dpr=1.25"
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default Home;
