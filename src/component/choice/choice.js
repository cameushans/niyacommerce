import React ,{Fragment, useState } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import {Carousel,CarouselItem, CarouselControl,CarouselIndicators,
   CarouselCaption
} from 'reactstrap';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from "./choice.style"


const Choice = (props) => {

  const classes = useStyles();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const items = [
    {
      src: "../../waves.jpg",
    },
    {
      src: "../../waves.jpg",
    },
    {
      src:  "../../waves.jpg",
    }
  ];
      
          
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
                  <img src={item.src} alt={item.altText}  style={{width:"100%"}}
/>
                  <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
              );
            });
          
          var najm = [1,2,3,4,5]
          var etoile =  najm.map(el=><StarIcon />)

          return (
            <Fragment >
              <Grid container  className={classes.page} justify="center" >
              <Grid container  className={classes.container} item  spacing={4} lg={9} md={12} >
                <Grid container  className={classes.accordion}  lg={6}  >
                <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className={classes.merde}
              >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev"  directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
              </Carousel>
                </Grid>
                <Grid direction="column"  item  lg={5} alignItems="center"> 
                  <Typography variant="h4">
                    La Jaguardia
                  </Typography>
                  <Grid item className={classes.prix} >80€</Grid>
                  <Grid item>
                       {etoile}
                  </Grid>
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
              <Button variant="contained"  color="primary">Ajouter au panier</Button>
                </Grid>
              </Grid>
              </Grid>
              <div style={{height:"900px"}}>

              </div>
              <di>

              </di>
           </Fragment>
          )
        };
        
        
export default Choice;