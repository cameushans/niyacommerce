import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Grid} from '@material-ui/core';
import  "./choice.css"



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
              <Grid container >
                <Grid container item lg={3}>
                  <img className="rotate-90-vertical-bck" src="../../casquette.jpg"  alt="casq"></img>
                </Grid>
                <Grid container item lg={3}>
                  <img className={classes.pivote} src="../../casquette.jpg" alt="casq"></img>
                </Grid>
              </Grid>
            </Fragment>
          );
        }
        
        

export default Choice;