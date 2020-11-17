import React ,{Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid,Divider} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./choice.style";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CallIcon from '@material-ui/icons/Call';



const Choice = (props) => {

  const classes = useStyles();
    
          var najm = [1,2,3,4,5]
          var etoile =  najm.map(el=><StarIcon />)

          return (
            <Fragment >
              <Grid container  className={classes.page} justify="center"  lg={12}>
              <Grid container  className={classes.container} item  lg={10} >
               <Grid container lg={6} xs={12}>
                 <img src="../../../casquette.jpg" style={{height:"70%",width:"80%"}}></img>
              </Grid> 
              <Grid container item lg={6} justify="center">
                <Grid direction="column"  item > 
                  <Typography variant="h4">
                    La Jaguardia
                  </Typography>
                  <Grid item className={classes.prix} >80€</Grid>
                  <Grid item>
                       {etoile}
                  </Grid>
                  <Divider className={classes.divider} />

                    <Accordion >
                       <AccordionSummary
                             expandIcon={<ExpandMoreIcon />}
                             aria-controls="panel1a-content"
                             id="panel1a-header"
                       >
                            <Typography className={classes.heading}>Description</Typography>
                       </AccordionSummary>
                       <AccordionDetails>
                           <Typography variant="p">
                               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                              sit amet blandit leo lobortis eget.
                          </Typography>
                      </AccordionDetails>
                </Accordion> 
                <Divider  className={classes.divider}/>
              <Button variant="contained"  color="primary"><ShoppingCartIcon/><Typography className={classes.buttonTypoStyle}>Ajouter au panier </Typography></Button> 
              <Divider  className={classes.divider} />
              <Typography>
                Have questions about this product (SKU: 0X2E615)
              </Typography>
              <Divider  className={classes.divider}/>
              <Typography>
                   <CallIcon/>  019638111777
              </Typography>
              </Grid>
                </Grid>
              </Grid>
              </Grid>
        
           </Fragment>
          )
        };
        
        
export default Choice;