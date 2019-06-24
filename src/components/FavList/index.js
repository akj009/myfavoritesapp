import React from 'react';

const FavList = ({elementList}) => {
    let counter = 1;
    return (<div>
        <h3>My Favorites List</h3>
        <table>
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
    </div>);
};

export default FavList;