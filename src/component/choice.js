import React from 'react';
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
        }
    })
          const classes = useStyles();
        
          return (
            <div>
              <Grid container>
                <Grid item lg={6}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image="../../eiv3578-8091-casquette-randonnee-homme-newton-4-0-noir.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href="/choice">
                    <Link to="/choice" >Ajouter au panier</Link>
                </Button>
              </CardActions>
            </Card>
            </Grid>
            </Grid>

            </div>
          );
        }
        
        

export default Choice;