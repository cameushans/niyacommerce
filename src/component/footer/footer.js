import React  from 'react';
import { Grid, Typography,List,ListItem } from '@material-ui/core';
import useStyles from "./footer.style";

const Footer = () => {
    const classes = useStyles();

    
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