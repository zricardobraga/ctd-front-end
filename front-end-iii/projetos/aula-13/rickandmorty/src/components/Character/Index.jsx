import { useState, useEffect } from "react";
import styles from "./character.module.css";

function Character() {
    const [characters, setCharacters] = useState([]);

    const url = 'https://rickandmortyapi.com/api';

    useEffect(() => {
        async function getAllCharacterFromRickAndMorty() {
            const response = await fetch(`${url}/character`)
            const characters = await response.json()
            setCharacters(characters.results)
        }
        getAllCharacterFromRickAndMorty()
    }, [])

    return (
        <>
            {characters && (characters.map((character, index) => {
                return (
                    <>
                        <div className={styles.card} key={index} >
                            <div className={styles.cardContent}>
                                <img src={character.image} alt="" className={styles.characterImg} />
                            </div>
                            <div className={styles.cardInfo}>
                                <div className={styles.nameAndStatus}>
                                    <h3>{character.name} </h3>
                                    <span>
                                        {character.status} - {character.species}
                                    </span>
                                </div>
                                <div>
                                    <h4 className={styles.lastLocation}>Last location known:</h4>
                                    <span>
                                        {character.location.name}
                                    </span>
                                </div>
                            </div>

                        </div>
                    </>
                )
            })
            )}
        </>
    );
}
export default Character;
