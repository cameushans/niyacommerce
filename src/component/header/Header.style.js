import {makeStyles,AppBar,Toolbar,Avatar,Button,Badge,List,ListItem, Typography} from "@material-ui/core";
import useStyle from "../smile/smile.style";

const useStyles = makeStyles({
    lien:{
      textDecoration:"none"
    },
    menu:{
      display:"flex",
      justifyContent:"space-around",
      width:"60%"
    },
    img:{
      width:"30%",
      height:"40%"
    },
    avatar:{
      width:"11%"
    },
    appbar:{
      height:"7.3%",
      zIndex:7
    },
    shoppcard:{
      cursor:"pointer",
    },
  });


  export default useStyles;