import Issue from "./Issue.js";

function Card(props)
{

	const handleClick = () => {
		console.log(props.issue._id);
	}

	return (
		<a href="/issue">
			<div key={props.issue._id} onClick={handleClick}>
                <h3>{props.issue.title}</h3>
                <p>{props.issue.description}</p>
                <p>Location: {props.issue.location.coordinates}</p>
            </div>
        </a>
	);
}

export default Card;