import React, { useState, useEffect } from 'react';
import List from './List'

function Index19D2() {
    const [countries, setCountries] = useState(null);
    const [term, setTerm] = useState('');

    async function fetchData() {
        const data = await (await fetch('https://restcountries.com/v2/all')).json();
        setCountries(data);
        console.log(data);
    }

    useEffect(() => {
        fetchData();

    }, [])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter country name:</label>
                    <input
                        type="text"
                        className="input"
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
                <div>
                    {
                        countries ? (
                            <List countries={countries} term={term}/>
                            ) :
                            <div>loading...</div>
                    }
                </div>
            </div>
        </div>
    );
}

export default Index19D2;