import React , { useState}from 'react';
import {Grid,makeStyles,Typography,Button} from "@material-ui/core";
import {Link} from "react-router-dom";


const Home = () =>{

    const useStyles = makeStyles({
        root: {
          backgroundImage:"url(' ../../escalator-283448_1280.jpg')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",

          width:"100%",
          height:"50%",
          alignItems:"center",
          justifyContent:"center",
          color:"white",
        },
        rootTwo: {
            backgroundImage:"url(' ../../flower-4783048_1280.jpg')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",

            width:"100%",
            height:"50%",
            alignItems:"center",
            justifyContent:"center",
            color:"white",
          },
        contient:{
            height:"100%",
        },
        contain: {
            backgroundColor:"tan",
            opacity:0.7
        },
        link:{
            textDecoration:"none",
            color:"white",
            fontSize:"2rem",
            fontFamily:"Caveat"
        }
      });
      const classes = useStyles();

    return (
        <Grid container 
             direction="row"
             justify="center"
             className={classes.contient}
                  >

            <Grid container item className={classes.root}  onMouseEnter={()=>{console.log("raté")}}>
            <Typography  variant="h1">
            <Button  size="large">
                      <Link   className={classes.link}  to="/Shop" >Shop</Link> 
                      </Button>
                </Typography>
            </Grid>

            <Grid container item  className={classes.rootTwo} onMouseEnter={()=>{console.log("raté")}}>
                <Typography  variant="h1">
                    <Button  size="large">
                         <Link className={classes.link} to="/smile">Smile</Link> 
                    </Button>
                     
                </Typography>
               
                </Grid>

        </Grid>

    )
}

export default Home;