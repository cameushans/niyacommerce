import React from 'react';
import {Typography, Grid} from "@material-ui/core"
import Button from '@material-ui/core/Button';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const UseStyle = makeStyles({
   
Jerry:{
    height:"50%",
    borderRadius:"30px"
    
},

taille:{
height:"100%",
width:"100%",
marginTop:"5%",

},

yellow:{
    height:"30%",
    backgroundColor:"yellow"
},

black:{
    height:"20%",
    width:"30%",
    backgroundColor:"white"
},

green:{
    height:"20%",
    width:"30%",
    backgroundColor:"green",
},

white:{
    height:"20%",
    width:"30%",
    backgroundColor:"white",
}
    
})

const Smile = () => {

    const classes = UseStyle()


    return (

        <Grid container className={classes.taille}>
            <Grid item container style={{backgroundColor:"blue"}} className={classes.Jerry} justify="flex-start" direction="row" alignItems="center" lg={12}>
                <Grid item className={classes.yellow} container justify="center" lg={12}>
                    <h1>Jerry</h1>
                </Grid>
                <Grid item className={classes.black} lg={6}>
                    <h1>Hans</h1>
                </Grid>
                <Grid item className={classes.green} lg={6}>
                    <h1>Rayane</h1>
                </Grid>
                <Grid item className={classes.white} lg={6}>
                    <h1>Unknown</h1>
                </Grid>
                
            </Grid>
            <Grid item container className={classes.Jerry} justify="center" alignItems="center" lg={6}>
                <h1>Jerry</h1>
            </Grid>
            <Grid item container justify="center" lg={3}>
                <h1>Jerry</h1>
            </Grid>

        </Grid>
            


        
  

    )
}

export default Smile;