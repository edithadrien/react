import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import DefinitionSearch from '../components/DefinitionSearch';
import NotFound from '../components/NotFound';


export default function Definition(){
    const [word, setWord] = useState();
    const [notFound, setNotFound] = useState(false);
    const [error, setError] = useState(false);
    let { search } = useParams();
    const navigate = useNavigate();
     
    useEffect(() => {        
           fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + search)
           .then((response) => {
            if (response.status === 404){
                setNotFound(true);
            } else if(response.status === 401){
                navigate('/login');
            } else if(response.status === 500){
                //setServerError(true);
                setError(true);
            }

            if (!response.ok){
                setError(true);

                throw new Error('Something went wrong!')
            }
            return response.json();
        })

           .then((data) => {
                setWord(data[0].meanings);
           })
           .catch((e) =>{
            console.log(e.message);
           });  
    }, []);

    if (notFound === true){
        return (
            <>
            
            <NotFound />
            <Link to="/dictionary">Search another</Link>
            </>)
    }
    if (error === true){
        return (
            <>
            
            <p>Something went wrong, try again?</p>
            <Link to="/dictionary">Search another</Link>
            </>)
    }
    return (
    <>
        <h1>Here is a definition:</h1>
        {word ? <>
            {word.map((meaning) => {
            return <p key={uuidv4()}>
                {meaning.partOfSpeech} : {meaning.definitions[0].definition}
            </p>
        })}
        <p>Search again:</p>
        <DefinitionSearch />
        
        </>
        : null}
    </>
    
    );
}