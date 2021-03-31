function Card(props)
{

	const handleClick = () => {
		console.log(props.issue._id);
	}

	return (

			<div key={props.issue._id} onClick={handleClick}>
                <h3>{props.issue.title}</h3>
                <p>{props.issue.description}</p>
                <p>Location: {props.issue.location.coordinates}</p>
            </div>

	);
}

export default Card;