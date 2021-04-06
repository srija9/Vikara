import React , {useState, useEffect} from 'react';
import axios from 'axios';


function Issue(props)
{

	const [images, setImages] = useState([{}]);

	const handleClick = () => {
		console.log(props.issue._id);

		//fetch the images.
	}

	return (

			<div key={props.issue._id} onClick={handleClick}>
                <h3>{props.issue.title}</h3>
                <p>{props.issue.description}</p>
                <p>Location: {props.issue.location.coordinates}</p>
            </div>
	);
}

export default Issue;
