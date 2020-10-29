import React from 'react';
import {Grid,Typography,Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {connect} from "react-redux";
import useStyles from "./Home.style"


const Home = (props) =>{

     const classes = useStyles();

    return (
        <Grid container 
             direction="row"
      
             className={classes.contient} >

                        <Grid container item className={classes.root} lg={12}>
                                 <Link className={classes.link} to="/Shop">
                                <Button  variant="contained" className={classes.btnshop} size="large">
                                    <CardGiftcardIcon />
                                    <Typography variant="h7"className={classes.typo}>Shop</Typography>
                                </Button>
                                </Link>
                        </Grid>

                {/*        <Grid container item direction="column" className={classes.rootTwo} lg={6}>
                            <Link className={classes.link} to="/Smile">
                               <Button variant="contained" className={classes.btnsmile} size="large">
                                    <InsertEmoticonIcon />
                                    <Typography variant="h7" className={classes.typo}>Smile</Typography>
                              </Button>
                            </Link>
                        </Grid> */}

                </Grid>
    )
}

  export default connect(null, null)(Home);