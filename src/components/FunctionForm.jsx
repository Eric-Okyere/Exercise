
import React, { useState } from "react";

function MyFunctionForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [gen, setGen] = useState("");
	const [customer, setCustomer] = useState([
		
	]);
	const handleSubmit = (e) => {
		e.preventDefault();
		setCustomer(
			[...customer, { name, email, gen }],
			setName(""),
			setEmail(""),
			setGen("")
		);
	};

	return (
		<>
			<form className="formdiv">
				<h1>Your Details Here</h1>
				<label>Name:</label>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
				/>
				<br />
				<label>Email:</label>
				<input
					type="text"
					name="email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
				/>
				<br />
				<label>Gen:</label>
				<input
					type="text"
					name="gen"
					value={gen}
					onChange={(e) => {
						setGen(e.target.value);
					}}
				/>
				<br />
				<button onClick={handleSubmit}>Submit</button>
			</form>
			{customer.map((item, index) => {
				return (
					<div className="formadd" key={index}>
						<h1>{item.name}</h1>
						<h2>{item.email}</h2>
						<h3>{item.gen}</h3>
					</div>
				);
			})}
		</>
	);
}

export default MyFunctionForm;