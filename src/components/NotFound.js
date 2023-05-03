import { Link } from "react-router-dom"

export default function notFound(){
    return (
        <>
            <p>The page you are looking for was not found</p>
            <Link to="/customers">Go back</Link>
        </>
            )
}