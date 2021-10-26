import React, { useState, useEffect } from 'react';

function Index19D1() {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const data = await (await fetch('https://swapi.dev/api/films/1/')).json();
        setMovies(data);
        console.log(data);
    }

    return (
        <div>
            {movies ?
                <div>
                    <p>{movies.title}</p>
                    <p>{movies.director}</p>
                </div>
                :
                <p>loading</p>
            }

        </div>
    );
}
export default Index19D1;