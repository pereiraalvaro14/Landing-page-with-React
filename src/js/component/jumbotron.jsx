import React from "react";

const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<div className="container">
				<h1>Aprendiendo React.</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna
					aliqua. Ut enim ad minim veniam, quis nostrud exercitation
					ullamco laboris nisi ut aliquip ex ea commodo consequat.
				</p>
				<p>
					<a
						className="btn btn-primary btn-lg"
						role="button"
						href="https://developer.mozilla.org/es/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/React_getting_started"
						target="_blank">
						Primeros pasos React - Pincha aqui.
					</a>
				</p>
			</div>
		</div>
	);
};

export default Jumbotron;
