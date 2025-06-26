import { useState } from "react"
import "./Registrattion.css"

export const Registrartion =() =>
{


    const[firstName , setFirstName] = useState("");
    const[lastName , setLastName] = useState("");
    const[email , setEmail] = useState("");
    const[phoneNumber , setPhoneNumber] = useState("");
    const[password , setPassword] = useState("");

    const handleInputChange =(e) =>
    {
        const{name, value} = e.target;
        switch(name)
        {
            case  "firstName" : setFirstName(value);
            break;


            case  "lastName" : setLastName(value);
            break;

            case  "email" : setEmail(value);
            break;

            case  "phoneNumber" : setPhoneNumber(value);
            break;

            case  "password" : setPassword(value);
            break;
        }
    }

    const handleFormSubmit =(event) =>
    {
        event.preventDefault();
        const formData ={
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        }
        console.log(formData)
    }


    return(
        <>
        <section style={{textAlign : "center" , marginTop : "30px"}}>
            <p>
                hello, my name is 
                <span>
                    {firstName} {lastName }
                </span>
                 . my email adress is <span> {email} </span> and my phone number is <span> {phoneNumber}</span>
            </p>
        </section>
        <form onSubmit={handleFormSubmit} >
            <div className="container">
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label htmlFor="firstName">
                    <b>First Name</b>
                </label>
                <input className="inputField"
                type="text"
                name ="firstName"
                placeholder="Enter first Name"
                required
                value={firstName}
                onChange={handleInputChange}
                />

                <label htmlFor="lastName">
                    <b>Last Name</b>
                </label>
                <input className="inputField"
                type="text"
                name ="lastName"
                placeholder="Enter last Name"
                required
                value={lastName}
                onChange={handleInputChange}
                />

                <label htmlFor="email">
                    <b>Email</b>
                </label>
                <input className="inputField"
                type="text"
                name ="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={handleInputChange}
                />

                <label htmlFor="password">
                    <b>Password</b>
                </label>
                <input className="inputField"
                type="password"
                name ="password"
                placeholder="Enter password"
                required
                value={password}
                onChange={handleInputChange}
                />

                <label  htmlFor="phoneNumber">
                    <b>Phone Number</b>
                </label>
                <input className="inputField"
                type="number"
                name ="phoneNumber"
                placeholder="8847675965"
                required
                value={phoneNumber}
                onChange={handleInputChange}
                />

                <p>By creating an account you agree to our 
                    <a href ="#" style={{color:"dodgerblue"}}> Terms & privacy </a>
                </p> 
                
                <div>
                <button type="submit" className="btn">Sign Up</button>
                </div>
            </div>
        </form>
        </>
    )
}