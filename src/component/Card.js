import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core'; 
import {connect} from "react-redux";
import {Grid}  from "@material-ui/core"

const useStyles = makeStyles({
  root: {
    width: "70%",
    marginTop:"10%"
  },
});

 function ImgMediaCard(props) {
  const classes = useStyles();


  console.log(props)
  return (
    <Grid classeName={classes.taille}  container justify="center" item lg={4}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.images}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
             {props.nom}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
               {props.prix}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button  size="small" color="primary">
          Voir
        </Button>
        <Link to="/choice" >
        <Button size="small" color="primary" onClick={()=>{props.clickCkrease()}} >
            Ajouter au panier
        </Button>
          </Link>
      </CardActions>
    </Card>
    </Grid>
  );
}




function MapDispatchToProps(dispatch){
  return {
         clickCkrease : function (){
               dispatch({type: "INCREASE"})
         }
     }
}

export default connect(null, MapDispatchToProps)(ImgMediaCard);