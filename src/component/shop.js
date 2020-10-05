import React , {useEffect,useState,Fragment} from 'react';
import {Typography,Grid,makeStyles} from "@material-ui/core"
import ImgMediaCard from "./Card";
import {connect} from "react-redux";


const Shop = (props) => {
    
       const [info,setInfo] = useState("");

       const useStyles = makeStyles({
        taille:{
        marginTop:"10%"
        }
    })
    
    const classes = useStyles();

    useEffect(() => {
       const fetching = async   () => {
         fetch("http://localhost:1337/paniers")
            .then((res)=>res.json())//toujours
            .then((resu)=>setInfo(resu[0].type[0].name))
        }
        fetching()
      }, [])


    return (
        <div>
        <Typography style={{textAlign:"center", marginTop:"5%"}} variant="h2">
            Collections
        </Typography>
       <Grid   container direction="row" justify="center" alignItems="center"> 
           <Grid classeName={classes.taille}  container justify="center" item lg={4}>
                  <ImgMediaCard image={info} />
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={info} />
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={info}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={info}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={info}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={info} />
           </Grid>
       </Grid>
       </div>
    )
}

function MapDispatchToProps(dispatch){
    return {
           clickCkrease : function (){
                 dispatch({type: "INCREASE"})
           }
       }

}

export default connect(null, MapDispatchToProps)(Shop);