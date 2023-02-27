import { Link } from "react-router-dom";

const Welcome= () => {

    return(
        <>
        <h1> Nom Nom </h1>
        <p> cooking made fun! </p>
        <br></br>
        <p>Nom Nom is an educational app that turns cooking into a fun group activity between parent and child!</p>
        <Link to="/login">Login</Link>
        <Link to="/main">Take a Look</Link>
        </>
    )


}

export default Welcome