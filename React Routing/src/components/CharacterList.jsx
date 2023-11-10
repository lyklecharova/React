import { useEffect, useState } from "react";
import CharacterListItem from "./CharacterListItem";
import styles from './CharacterList.module.css';

const baseUrl = 'https://swapi.dev/api';

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        fetch(`${baseUrl}/people`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results)
            })
    }, [])

    return (
        <div className = {styles.characterList}>

            {characters.map((character, index) =>

                <CharacterListItem key={character.name} id = {index+1} {...character}  />

            )}

        </div>
    );
};
export default CharacterList;