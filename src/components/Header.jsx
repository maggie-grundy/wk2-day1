export default function Header(){
    let isLoggedIn = true
    let message = "Please sign in"
    if(isLoggedIn){
        message = "Welcome back!"
    }

    return (
        <>
        <header>
            <h1>My React App</h1>
            <ul>
                {
                    [
                        <li>Home</li>, 
                        <li>About</li>, 
                        <li>Contact</li>
                    ]
                }
            </ul>
            <p>
                {message}
            </p>
        </header>
        </>
    );
}

//Other method - ternary operator or 'short circuit?'
/* 
let isLoggedIn = false

{isLoggedIn && "Welcome back!"}
{!isLoggedIn && "Please sign in!"}

*/