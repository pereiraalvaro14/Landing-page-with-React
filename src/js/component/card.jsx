import React from "react";

const Card = (props) => {
	return (
		<div className="card">
			<img src={props.img} />
			<div>
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.content}</p>
				<a
					href={props.href}
					target="_blank"
					className="btn btn-primary">
					{props.button}
				</a>
			</div>
		</div>
	);
};

export default Card;
