import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Grid, Divider} from '@material-ui/core';
import  "./choice.css";
import {StarIcon}  from '@material-ui/icons';




const Choice = () => {
    const useStyles = makeStyles({
        taille:{
        marginTop:"10%",
        height:"100%"
        },
       
    
    })
          const classes = useStyles();
        
          return (
            <Fragment>
              <Grid container  direction="row">
                <Grid container item lg={6}>
                  <img  src="../../casquette.jpg"  alt="casq"></img>
                </Grid>
                <Grid container item direction="column" lg={6}>
                  <Typography variant="h1">
                    LE TITRE
                  </Typography>
                  <Typography> LE PRIX</Typography>
                  <Typography>De par sa structure hybride, extensible et légère, il sera votre parfait complément à mi-saison pour votre vie de tous les jours.
                       Il pourra être également porte sous votre parka Helvetica Mountain Pioneers en hiver pour vous assurer un max de chaleur si le besoin s’en faisait sentir.
                      Le blouson sport par excellence.
                  </Typography>

                </Grid>
                <Divider></Divider>
            
              </Grid>
            </Fragment>
          );
        }
        
        

export default Choice;