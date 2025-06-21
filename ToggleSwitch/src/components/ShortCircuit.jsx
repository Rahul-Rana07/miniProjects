import { useState } from "react";

export const ShortCircuit = () =>
{

    const [isLoggedIn , setIsLoggedIn] = useState(true);
    const [user , setUser] = useState("");
    return (
        <section>
            <h1>Welcome to ShortCiruit Evaluation! </h1>
            { isLoggedIn && <p>You are logged in!</p>}
            { user ? `hello ${user}` : " Please log in!"}

            <div>
                <button onClick={ () => setIsLoggedIn(!isLoggedIn)}>Toggle Login State</button>
                <button onClick ={ () => setUser("Rahul Rana")}>Set User</button>
                <button onClick ={ () => setUser("") }>Clear State</button>
            </div>

        </section>
    )
}