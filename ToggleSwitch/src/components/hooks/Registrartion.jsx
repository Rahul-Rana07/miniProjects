import "./Registrattion.css"

export const Registrartion =() =>
{
    return(
        <>
        <form >
            <div >
                <h1>Sign Up</h1>
                <p>Please fill in this form to create an account.</p>
                <label >
                    <b>First Name</b>
                </label>
                <input 
                type="text"
                name ="First Name"
                placeholder="Enter first Name"
                required
                />

                <label >
                    <b>Last Name</b>
                </label>
                <input 
                type="text"
                name ="Last Name"
                placeholder="Enter last Name"
                required
                />

                <label>
                    <b>Email</b>
                </label>
                <input 
                type="text"
                name ="email"
                placeholder="Enter email"
                required
                />

                <label >
                    <b>Password</b>
                </label>
                <input 
                type="password"
                name ="password"
                placeholder="Enter password"
                required
                />

                <label >
                    <b>Phone Number</b>
                </label>
                <input 
                type="number"
                name ="number"
                placeholder="8847675965"
                required
                />

                <p>By creating an account you agree to our 
                    <a href ="#" style={{collor:"dodgerblue"}}> Terms & privacy </a>
                </p> 

                <button>Sign Up</button>
            </div>
        </form>
        </>
    )
}