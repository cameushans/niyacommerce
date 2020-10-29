import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core'; 
import {connect} from "react-redux";
import {Grid}  from "@material-ui/core";
import useStyles from "./Card.style";


 function ImgMediaCard(props) {


  const classes = useStyles();

  return (
    <Grid container justify="center" item lg={4}  sm={12} spacing={6}>
              <Card className={classes.root}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              height="400"
                              image= {props.images}
                            />
                                    <CardContent className={classes.detail}>
                                              <Typography gutterBottom variant="p" >
                                                {props.nom}
                                              </Typography>
                                              <Typography variant="body2" color="secondary" component="p">
                                                  {props.prix}€
                                              </Typography>
                                              
                                    </CardContent>
                          </CardActionArea>

                          <CardActions>
                              <Link to= "/choice" >
                                      <Button  size="small" color="primary">
                                            Voir
                                      </Button>
                                </Link>
                                <Button size="small" color="primary" onClick={()=>{
                                  props.clickCkrease()
                                  props.addToCart(props)}} >
                                    Ajouter au panier
                                </Button>
                          </CardActions>
              </Card>
    </Grid>
  )
};

function MapDispatchToProps(dispatch){
  return {
         clickCkrease : function (){
               dispatch({type: "INCREASE"})
         },
         addToCart : (data)=>dispatch({type:"ADD_DATA",payload:data})
     }
}

export default connect(null, MapDispatchToProps)(ImgMediaCard);