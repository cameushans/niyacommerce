import {Grid,makeStyles,Typography,Button} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      backgroundImage:"url(' ../../blackp.jpeg')",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      height:"100%",
      alignItems:"center",
      justifyContent:"center",
      color:"white",
      overflowX: "hidden",
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
        overflowX: "hidden",

    },
    link:{
        textDecoration:"none"
    },
    title:{
        width:"100%",
        justifyContent:"center",
    },
    typo:{
        textDecoration:"none",
         color:"white",
         marginLeft:"3%"
    },
    btnsmile:{
        background:"linear-gradient(#ffffff,#6B268C)"
    },
    btnshop:{
        background:"linear-gradient( #C6CACD,#ffffff)"
    },
    
  });

  export default useStyles;