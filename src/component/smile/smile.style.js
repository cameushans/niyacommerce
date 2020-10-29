import { makeStyles } from '@material-ui/core/styles';


const useStyle = makeStyles({
    invest:{
        height:"30%",
        width:"100%",
        backgroundImage:"url('../../inves.jpg')",
        borderRadius:"10px",
        boxShadow:"5px 5px 5px black",
    },
    conteneur:{
    height:"100%",
    width:"100%",
    opacity:"0.7",
    backgroundImage:"url('../../sourireee.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
    },
    contenu:{
        height:"100%",
        width:"100%"
    },
    buttninvest:{
        fontWeight:"bolder",
        fontSize:"20px",
        color:"red",
        fontFamily:"Sansita Swashed, cursive",
        backgroundColor:"black"
    },
    abv:{
        height:"30%",
        width:"100%",
        borderRadius:"10px",
        boxShadow:"5px 5px 5px black",
        backgroundImage:"url('../../don.jpg')",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
    },
     buttnabv:{
        fontWeight:"bolder",
        fontSize:"20px",
        color:"red",
        fontFamily:"Sansita Swashed, cursive",
        backgroundColor:"white"
    },
    invesslien:{
        textDecoration:"none"
    }
    });


    export default useStyle;
    