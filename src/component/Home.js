import React, {useState} from 'react';
import {Grid,makeStyles,Typography,Button} from "@material-ui/core";
import {Link} from "react-router-dom";
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import {connect} from "react-redux";


const Home = (props) =>{
    const [hide,setHide] = useState(false)


    const useStyles = makeStyles({
        root: {
          backgroundImage:"url(' ../../ecommerce.jpg')",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover",

          width:"100%",
          height:"50%",
          alignItems:"center",
          justifyContent:"center",
          color:"white",
        },
        rootTwo: {
            backgroundImage:"url(' ../../vagues.jpg')",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",

            width:"100%",
            height:"50%",
            alignItems:"center",
            justifyContent:"center",
            color:"white",
          },
        contient:{
            height:"100%",
        },
        contain: {
            backgroundColor:"tan",
            opacity:0.7
        },
        link:{
            textDecoration:"none"
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
            background:"linear-gradient(#ffffff, #FFA858)"
        },

        btnshop:{
            background:"linear-gradient( #C6CACD,#ffffff)"
        }
      });
      const classes = useStyles();

    return (
        <Grid container 
             direction="row"
             justify="center"
             className={classes.contient}
             onClick={()=>{setHide(false);props.hideMenu()}}
                  >

            <Grid container item direction="column" className={classes.root}  onMouseEnter={()=>{console.log("raté")}}>
            <Typography  variant="h5">
                <Link className={classes.link} to="/Shop">
            <Button  variant="contained" className={classes.btnshop} size="large">
            <CardGiftcardIcon />
            <Typography variant="h7"className={classes.typo}>Shop</Typography>

              </Button>
              </Link>
                </Typography>
            </Grid>

            <Grid container item direction="column" className={classes.rootTwo} onMouseEnter={()=>{console.log("raté")}}>
                <Link className={classes.link} to="/Smile">

                    <Button variant="contained" className={classes.btnsmile} size="large">
                <InsertEmoticonIcon />
                <Typography variant="h7" className={classes.typo}>Smile</Typography>

                    </Button>
                    </Link>
                     
               
                </Grid>

        </Grid>

    )
}

function mapDispatchToProps(dispatch){
    return {
    showMenu: function(){
          dispatch({type:"SHOW"})
    } ,
    hideMenu: function(){
         dispatch({type:"HIDE"})
    }
  
  }
  }
  

  export default connect(null, mapDispatchToProps)(Home);