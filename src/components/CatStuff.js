import React from 'react';


function CatStuff({cats, activity, handleClick}) {
    const allCats = cats.map((cat) => {
        console.log(cat);
        return <li key={cat.id} onclick={() => {
            handleClick(cat.id);
        }}>{cat.id}</li>,
        <li key={cat.name}>{cat.name}</li>,
        <li key={cat.activity}>{cat.activity}</li>
    })
}



export default CatStuff;