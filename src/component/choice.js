import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Grid, Divider} from '@material-ui/core';
import  "./choice.css";
import {Rate}  from '@material-ui/icons';
import StarIcon from '@material-ui/icons/Star';




const Choice = () => {
    const useStyles = makeStyles({
        taille:{
        marginTop:"10%",
        height:"100%"
        },
        container : {
          marginTop:"10%"
        }
    })
          const classes = useStyles();

          var najm = [1,2,3,4,5]
          var etoile =  najm.map(el=><StarIcon />)

          return (
            <Fragment>
              <Grid container  direction="row" className={classes.container}>
                <Grid container item lg={9} >
                  <img  src="../../casquette.jpg"  alt="casq"></img>
                </Grid>
                <Divider/>
                <Grid container item direction="column" lg={3} >
                  <Typography variant="h3">
                    Le titre
                  </Typography>
                  <Grid item>
                    {etoile}
                  </Grid>
                  
                  <Typography> 80€</Typography>
                  <Typography variant="p"> 
                     de par sa structure hybride, extensible et légère, il sera votre 
                    parfait complément à mi-saison pour votre vie de tous les jours.
                  </Typography>
                  <Button variant="contained" color="primary">Ajouter au panier</Button>
                </Grid>
                
            
              </Grid>
            </Fragment>
          );
        }
        
        

export default Choice;