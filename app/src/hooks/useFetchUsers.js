import { useState } from "react"
import axios from "axios";
import Pokemon from "../class/Pokemon";

export const useFetchUsers = () => {
    const [userList, setUserList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);


    const onClickFetchUser = async () => {
        setIsLoading(true);
        setIsError(false);

        console.log('Start');
        let pokemon;
        await fetch('https://pokeapi.co/api/v2/pokemon/25')
            .then(async response  => {
                console.log('response.ok:', response.ok);
                console.log('response.status:', response.status);
                console.log('response.statusText:', response.statusText);
                const json = await response.json();
                console.log(json);
                console.log(json.name);
                console.log(json.sprites.front_default);
                
                pokemon = new Pokemon(json.name, json.sprites.front_default);
                console.log(pokemon);
            })
            .catch(error => {
                console.error('エラーが発生しました', error);
            });

        setUserList([pokemon]);
        console.log('Success');
        console.log(userList);
        setIsLoading(false);
    }

    return { userList, isLoading, isError, onClickFetchUser }
}