import React from 'react';

const FavList = ({elementList}) => {
    let counter = 1;
    return (<div>
        <table>
            <thead>
                <tr>
                    <td>S.no.</td>
                    <td>Name</td>
                    <td>Rating</td>
                </tr>
            </thead>
            <tbody>
            {elementList && elementList.map(
                element => (
                    <tr key={element.name}>
                        <td>{counter++}</td>
                        <td>{element.name}</td>
                        <td>{element.rating}</td>
                    </tr>
                )
            )}
            </tbody>
        </table>
    </div>);
};

export default FavList;