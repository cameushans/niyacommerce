import React from 'react';
import {Grid} from "@material-ui/core";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";
import useStyle from "./smile.style";



const Smile = () => {
 const classes = useStyle();

    return (

        <Grid container className={classes.conteneur}>
            <Grid container className={classes.contenu} alignItems="center" justify="center">
                
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
};

export default Smile;