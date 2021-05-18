import React from 'react';

const Coloring = props => {


    return (
        <div>
            {/* { props.val },{ props.col1 },{ props.col2 } */}
            <h1 style={{color: props.col2, backgroundColor:props.col1}} >This is your word:{props.val}</h1>
        </div>    )

}

export default Coloring