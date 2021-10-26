import React from 'react';

function List({countries,term}) {
    return (
        <div className="ui celled list">
            {countries.filter(country => {
                return country.name.toLowerCase().startsWith(term.toLowerCase())
            }).map((element) => {
                return <div
                key={element.alpha2Code}
                className="item">
                <p>{element.name}</p>
                </div>
            })}
        </div>
    );
}

export default List;