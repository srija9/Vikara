import React, { useState } from 'react';
import axios from 'axios';


function NewIssue()
{
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [location, setLocation] = useState([]); // lat,lon
	const [files, setFiles] = useState('');
	const [targetFund, setFund] = useState(0);

	const handleSubmit = ()=>{
		console.log(title, description, location, files);

		const token = localStorage.getItem('vikaraToken');


		var formData = new FormData();

		formData.append('title', title);
		formData.append('description', description);
		formData.append('location', location);
		formData.append('targetFund', 0);

        for (const key of Object.keys(files)) {
            formData.append('photos', files[key])
        }

        axios.post("http://localhost:9000/issues/newIssue", formData, {     
    		headers: { 'content-type': 'multipart/form-data', 'authorization': 'Bearer ' + token }
    		
		}).then(res => {
            console.log(res.data)
        })
        .catch(err=>{
        	console.log(err);
        })

	}

	return (

		<div>
			<center><h1>Create New Issue</h1></center>

			<label>
           			<p>Title</p>
        			<input type="text" onChange={(e)=>{setTitle(e.target.value)}}/>
      		</label>
      		<label>
           			<p>Description</p>
        			<input type="textarea" onChange={(e)=>{setDescription(e.target.value)}}/>
      		</label>
      		<label>
           			<p>Fund Target</p>
        			<input type="Number" onChange={(e)=>{setFund(e.target.value)}}/>
      		</label>
      		<label>
           			<p>Location</p>
           			Longitude
        			<input type="number" onChange={(e)=>{setLocation([Number(e.target.value), location[1]])}}/>
        			Latitude
        			<input type="number" onChange={(e)=>{setLocation([location[0], Number(e.target.value)])}}/>
      		</label>
      		<label>
           			<p>Photos</p>
        			<input type="file" multiple onChange={(e)=>{setFiles(e.target.files)}}/>
      		</label>
      		
      		<button onClick={handleSubmit}>Create</button>
		</div>

		);
}
export default NewIssue;