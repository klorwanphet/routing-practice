import React from 'react';

const Number = props => {
    var x = false
    if (isNaN(props.val)=== false){
            console.log('this is a number')
            x = true
    }
    else{
        console.log('this is a word')
    }
    return (
        <>{
            x?<h1>This is your number:{props.val}</h1>: <h1>this is your word:{props.val}</h1>
        }
        </>
    )

}

export default Number