import React from 'react';
import {Grid,makeStyles,Typography,Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {connect} from "react-redux";


const Home = (props) =>{

    const useStyles = makeStyles({
        root: {
          backgroundImage:"url(' ../../black.jpg')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",
          height:"100%",
          alignItems:"center",
          justifyContent:"center",
          color:"white",
        },
        rootTwo: {
            backgroundImage:"url(' ../../daisy.jpg')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            height:"100%",
            alignItems:"center",
            justifyContent:"center",
            color:"white",
          },
        contient:{
            height:"100%",
        },
        link:{
            textDecorationColor:"red"
        },
        title:{
            width:"100%",
            justifyContent:"center",
        },
        typo:{
            textDecoration:"none",
             color:"#000000",
             fontFamily:"Sansita Swashed, cursive",
             fontWeight:"bold",
             marginLeft:"3%"
        },
        btnsmile:{
            background:"linear-gradient(#ffffff,#6B268C)"
        },
        btnshop:{
            background:"linear-gradient( #C6CACD,#ffffff)"
        }
      });

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