
import React,{Fragment,useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

const [parallax,setParallax] = useState(window.pageYOffset);
const useStyles = makeStyles({//hoisted in completion before de assigment
    centre:{
        textAlign:"center",
        marginTop:"3%",
        marginBottom:"5%"
    },
    dessouspanier:{
      height:"5%",
    },
    contient:{
      backgroundImage:"url(../../black.jpg)",
      height:"74vh",
      transform:`translateY( ${parallax  * 0.12}px)`,
      position:"static"
    },
    absolute:{
      position :"absolute",
      marginTop:"-60px",
      width:"100%"
    }
  });

  export default useStyles;