import React from 'react'

function greet({name, sex}) {
    let status;
    if(name==='Peter'){
         status = "Hello Peter";
    }
    else{
        status = "My friend";
    }
return <p>MY NAME IS: {name}  {status} your sex is: {sex}</p>;   
}
export default greet