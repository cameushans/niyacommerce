import React  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography,List,ListItem } from '@material-ui/core';

const Footer = () => {

    const useStyles = makeStyles({
        taille:{
            width:"15%",
        },
        container : {
            height:"8vh",
            backgroundColor:"grey",
            position:"absolute",
            marginTop:"%"
         
        },
        list: {
            padding:0
        }
    })

    const classes = useStyles()
    return (
              <Grid container  className={classes.container} justify="space-around">
                  <Grid item direction="column" className={classes.taille}> 
                      <Typography variant = "p">
                      QUI SOMMES NOUS ?         
                      </Typography>
                  </Grid>
                  <Grid item direction="column" className={classes.taille}> 
                  <List>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>Boire</ListItem>                    
                          </List>
                  </Grid>
                  <Grid item direction="column" className={classes.taille}> 
                          <List>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>achetez</ListItem>               
                          </List>
                  </Grid>
              </Grid>
    )
}

export default Footer;