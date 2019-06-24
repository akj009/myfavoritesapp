import React from 'react';

const FavList = ({elementList}) => {
    let counter = 1;
    return (
        <div  className="demo-card-wide mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <h3>My Favorites List</h3>
            </div>
            <div className="mdl-card__supporting-text">
                <table className="mdl-data-table mdl-js-data-table">
                    <thead>
                        <tr>
                            <th>S.no.</th>
                            <th align="left">Name</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>
                    {elementList && elementList.length > 0 ? elementList.map(
                        element => (
                            <tr key={element.name}>
                                <td>{counter++}</td>
                                <td>{element.name}</td>
                                <td>{element.score}</td>
                            </tr>
                        )
                    ) : (<tr><td colSpan={3}>"loading list"</td></tr>)}
                    </tbody>
                </table>
            </div>
    </div>);
};

export default FavList;