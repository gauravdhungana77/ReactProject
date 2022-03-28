
import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
function Contacts() {
	const[value1,setvalue] = useState(
		{email:"",
		fname:"",
		message:"",
	}
	);


	const call =(event)=>{
		const{name,value}=event.target;
		setvalue((prevobj)=>{
			return{
				...prevobj,
				[name]:value
			}
		})
	}

	const userdata =( event)=>{
		event.preventDefault();
		alert(value1.fname + value1.email + value1.message)
	}

	

    return (
        <>
<div className="container mt-4">
	<div className="jumbotron">
		<h1>Feel Free to Contact</h1>
		<form  className="needs-validation" novalidate >
			{/* start of email */}
			<div className="form-group mt-5">
				<div className="row">
					<div className="col-md-4">
						<label for="email">E-mail</label>
					</div>
					<div className="col-sm-8">
						<input type="email" className="form-control" autoComplete="off"  onChange={call} value={value1.email} name="email" placeholder="Enter your email-address" id="email" required/>
						<div className="valid-feedback">Valid.</div>
						<div className="invalid-feedback">Please fill out this field.</div>
					</div>
				</div>
			</div>
			{/* end of email

			<start of fullname */}
			<div className="form-group mt-5">
				<div className="row">
					<div className="col-md-4">
						<label for="name">Full-Name</label>
					</div>
					<div className="col-sm-8">
						<input type="text" className="form-control" autoComplete="off" onChange={call} value={value1.fname} name="fname" placeholder="Your full name" id="label" required/>
						<div className="valid-feedback">Valid.</div>
						<div className="invalid-feedback">Please fill out this field.</div>
					</div>
				</div>
			</div>
			{/* end of password 

			<message section */}
			<div className="form-group mt-5">
				<div className="row">
					<div className="col-md-4">
						<label for="message">Message</label>
					</div>
					<div className="col-sm-8">
						<textarea  className="form-control" autoComplete="off" onChange={call} value={value1.message} name="message" placeholder="Leave your message here"  id="message" rows="5" required></textarea>
						<div className="valid-feedback">Valid.</div>
						<div className="invalid-feedback">Please fill out this field.</div>
					</div>
				</div>
			</div>
			
			<button type="submit" className="btn btn-primary" onClick={userdata}>Submit</button>
		</form>
	</div>	
</div>

<div className="container">
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.542334366343!2d87.63682335817956!3d26.663132175139342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e58ebe21f9dadf%3A0x50d0725189935987!2sUrlabari%20Chowk!5e0!3m2!1sen!2snp!4v1600170870360!5m2!1sen!2snp" width="100%" height="450" frameborder="0"  allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

</div>

        </>
        
	)

}

export default Contacts;

