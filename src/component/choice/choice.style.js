import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    taille:{
    marginTop:"10%",
    height:"100%"
    },
    container : {
      marginTop:"30%",
      background:"black",
      boxShadow:"1px 1px 10px 1px",
      position:"absolute"
    },
    description:{
      width:"20%"
    },
    page:{
      width:"100%",
      backgroundImage:"url('../../black.jpg')",
      backgroundSize:"cover",
      backgroundRepeat:"no-repeat"
    },
    prix:{
      height:"5%",
    },
    dur:{
      width:"100%"
    },
 
});


export default useStyles;