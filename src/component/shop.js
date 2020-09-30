import React from 'react';
import {Typography,Card,Grid,makeStyles} from "@material-ui/core"
import ImgMediaCard from "./Card"


const Shop = (props) => {
    const useStyles = makeStyles({
        taille:{
        marginTop:"10%"
        }
    })
    const classes = useStyles();


    return (
        <div>
        <Typography style={{textAlign:"center"}} variant="h2">
            Collections
        </Typography>
       <Grid   container direction="row" justify="center" alignItems="center"> 
           <Grid classeName={classes.taille}  container justify="center" item lg={4}>
                  <ImgMediaCard image={props.image} />
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={props.image} />
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={props.image}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={props.image}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={props.image}/>
           </Grid>
           <Grid container justify="center" item lg={4}>
                  <ImgMediaCard  image={props.image} />
           </Grid>
       </Grid>
       </div>
    )
}

export default Shop;