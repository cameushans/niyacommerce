import React from 'react';
import {Typography, Grid} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link} from "react-router-dom";


const UseStyle = makeStyles({
   
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

})

const Smile = () => {

    const classes = UseStyle()


    return (

        <Grid container className={classes.conteneur}>
            <Grid container className={classes.contenu} alignItems="center" justify="center" justify="space-evenly">
                
            <Grid item container className={classes.invest} lg={4} sm={5} alignItems="center"  direction="column" justify="space-around">
                <h1>Vos dons</h1>
                <Link to="/investissement" className={classes.invesslien}>
                <Button  className={classes.buttninvest}>Où vont-ils ?</Button>
                </Link>

            </Grid>
            <Grid item container className={classes.abv} lg={4} sm={5} alignItems="center" direction="column" justify="space-around">
                <h1>Au bon vouloir</h1>
                <Button variant="outlined" className={classes.buttnabv}>En savoir plus</Button>

             </Grid>
            
            </Grid>
            
           </Grid>
            


            
            


        
  

    )
}

export default Smile;