import React ,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography,List,ListItem } from '@material-ui/core';

const Footer = () => {

    const useStyles = makeStyles({
        taille:{
            width:"15%",
        },
        container : {
            height:"98px",
        },
        list: {
            padding:0
        }
    })

    const classes = useStyles()
    return (
        <Fragment>
              <Grid container  className={classes.container} justify="space-around">
                  <Grid item direction="column" className={classes.taille}> 
                      <Typography variant = "p">
                      QUI SOMMES NOUS ?
                   LE MANOIR LUXURY vous propose des vêtements et
                    accessoires de luxe uniques venant de grands créateurs !
                      </Typography>
                  </Grid>
                  <Grid item direction="column" className={classes.taille}> 
                  <List>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>Boire</ListItem>
                              <ListItem className={classes.list}>Dansez</ListItem>
                              <ListItem className={classes.list}>Chante</ListItem>
                          </List>
                  </Grid>
                  <Grid item direction="column" className={classes.taille}> 
                          <List>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>achetez</ListItem>
                              <ListItem className={classes.list}>achetez</ListItem>
                          </List>
                  </Grid>
              </Grid>
       </Fragment>
    )
}

export default Footer;