import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Grid} from '@material-ui/core';



const Choice = () => {
    const useStyles = makeStyles({
        taille:{
        marginTop:"10%",
        height:"100%"
        },
        pivote:{
          
        }
    })
          const classes = useStyles();
        
          return (
            <Fragment>
              <Grid container >
                <Grid container item lg={3}>
                  <img className={classes.pivote} src="../../casquette.jpg"></img>
                </Grid>
                <Grid container item lg={3}>
                  <img className={classes.pivote} src="../../casquette.jpg"></img>
                </Grid>
              </Grid>
      
    
            </Fragment>
          );
        }
        
        

export default Choice;