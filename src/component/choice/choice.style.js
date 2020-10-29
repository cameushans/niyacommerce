import { makeStyles } from '@material-ui/core/styles';
import useStyle from '../smile/smile.style';


const useStyles = makeStyles({
    taille:{
    marginTop:"10%",
    height:"100%"
    },
    container : {
      marginTop:"30%",
      height:"50vh",

      boxShadow:"1px 1px 10px 1px",
      backgroundColor:"white",
      position:"absolute"
    },
    description:{
      width:"20%"
    },
    page:{
      width:"100%",
      height:"70%",
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
    accordion:{
      height:"100%"
    }
});


export default useStyles;