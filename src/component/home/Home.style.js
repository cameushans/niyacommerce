import {Grid,makeStyles,Typography,Button} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      backgroundImage:"url(' ../../black.jpg')",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height:"100%",
      alignItems:"center",
      justifyContent:"center",
      color:"white",
    },
    rootTwo: {
        backgroundImage:"url(' ../../daisy.jpg')",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        color:"white",
      },
    contient:{
        height:"100%",
    },
    link:{
        textDecorationColor:"red"
    },
    title:{
        width:"100%",
        justifyContent:"center",
    },
    typo:{
        textDecoration:"none",
         color:"#000000",
         fontFamily:"Sansita Swashed, cursive",
         fontWeight:"bold",
         marginLeft:"3%"
    },
    btnsmile:{
        background:"linear-gradient(#ffffff,#6B268C)"
    },
    btnshop:{
        background:"linear-gradient( #C6CACD,#ffffff)"
    }
  });

  export default useStyles;