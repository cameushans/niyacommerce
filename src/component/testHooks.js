import React ,{Fragment,useState} from 'react';



const Hooks = () => {


    const [compte,setCompte] = useState(0)


    return (
    <h1 onClick={()=>{setCompte(compte + 1)}}>
         {compte}
    </h1>
    )
}


export default Hooks