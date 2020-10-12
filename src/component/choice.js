import React ,{Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link,Grid, Divider} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';







const Choice = (props) => {
    const useStyles = makeStyles({
        taille:{
        marginTop:"10%",
        height:"100%"
        },
        container : {
          marginTop:"5%"
        },

        description:{
          justifyContent:"space-evenly",
        }
    })

const items = [
  {
    src: "../../casquette.jpg",
    caption: 'Slide 1'
  },
  {
    src: "../../casquette.jpg",
    altText: 'Slide 2',
    caption: 'Slide 2'
  },
  {
    src:  "../../casquette.jpg",
    altText: 'Slide 3',
    caption: 'Slide 3'
  }
];
          const classes = useStyles();
            const [activeIndex, setActiveIndex] = useState(0);
            const [animating, setAnimating] = useState(false);
          
            const next = () => {
              if (animating) return;
              const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
              setActiveIndex(nextIndex);
            }
          
            const previous = () => {
              if (animating) return;
              const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
              setActiveIndex(nextIndex);
            }
          
            const goToIndex = (newIndex) => {
              if (animating) return;
              setActiveIndex(newIndex);
            }
          
            const slides = items.map((item) => {
              return (
                <CarouselItem
                  onExiting={() => setAnimating(true)}
                  onExited={() => setAnimating(false)}
                  key={item.src}
                >
                  <img src={item.src} alt={item.altText} />
                  <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
              );
            });
          
          var najm = [1,2,3,4,5]
          var etoile =  najm.map(el=><StarIcon />)

          return (
            <Fragment>
              <Grid container style={{height:"100%"}} direction="row" className={classes.container}>
                <Grid container item lg={9} >
                <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
              >
                <CarouselIndicators  items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl  direction="prev"  directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
                </Grid>
                <Divider/>
                <Grid container className={classes.description} item direction="column" lg={3} >
                  <Typography variant="h3">
                    Le titre
                  </Typography>
                  <Grid item>
                    {etoile}
                  </Grid>
                  <Typography variant="h5"> 80€</Typography>
                  <Typography variant="p"> 
                     de par sa structure hybride, extensible et légère, il sera votre 
                    parfait complément à mi-saison pour votre vie de tous les jours.
                  </Typography>
                  <Button variant="contained" color="primary">Ajouter au panier</Button>
                </Grid>
              </Grid>
            </Fragment>
          );
        }
        
        

export default Choice;