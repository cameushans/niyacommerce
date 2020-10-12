import React ,{Fragment,useState} from 'react';
import {Link} from "react-router-dom"
import {makeStyles,AppBar,Toolbar,Avatar,Button,Badge,Grid, Typography,Divider,List,ListItem} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart"
import {connect} from "react-redux";
import Burger from "./BurgerHeader";



 const Header = (props) => {
   const [hide,setHide] = useState(false)
   const  [width,SetWidth] = useState(window.innerWidth)

   console.log(width)
   

  const useStyles = makeStyles({
    nav:{
      display:"flex",
      justifyContent:"space-between"
    },
    logo:{
      width:"35%",
      height:"3,5rem",
      display:"flex",
      justifyContent:"flex-start"
      
    },
    bouton:{
      textDecoration:"none",
      display:"flex",
      justifyContent:"space-between",
      color:"black",
      fontWeight:"bold"
    

    },
    homeI:{
      marginLeft:"5%",
      width:"5%",
      height:"40%"
    },

    lien:{
      textDecoration:"none"
    },

    menu:{
      display:"flex",
      justifyContent:"space-around",
      width:"60%"
    },

    panier:{
      width:"10%",
      height:"3,5rem",
      display:"flex",
      justifyContent:"flex-end"
    },
    hidden:{
      width:"200px",
      backgroundColor:"white",
      height:"360px",
      position:"relative",
      marginTop:"430px",
      visibility:props.hide,
      zIndex:"5",
      borderRadius:"20px"
      
    },
    img:{
      width:"30%",
      height:"40%"
    },
    avatar:{
      width:"11%"
    },
    appbar:{
      height:"8%"
    },

    shoppcard:{
      cursor:"pointer",
    },

    btnpanier:{
      width:"100%",
    color:"white",


    },
conteneurbtn:{
  width:"100%",
  flexDirection:"column",
  justifyContent:"flex-end",
  height:"27.4%"
}
    
  });
  const classes = useStyles()

  var aff = ["../../casquette.jpg","../../casquette.jpg","../../casquette.jpg","../../casquette.jpg",]

  var renvoi = aff.map((el)=>{
     return  (
       <Fragment>
            <ListItem>
           <img  className={classes.img} alt="casquette"  src={el}/>
       </ListItem>
       <Divider/>
       </Fragment>
           )
  })
     


 return   (
   <Fragment>
  <AppBar color="transparent" position="static"  className={classes.appbar}>
    <Toolbar>
      <div className={classes.logo}>
        <Burger/>
      <Avatar src="../niya.jpeg" className={classes.avatar} />
      </div>
      <div className={classes.menu}>
      <Link className={classes.lien} to ="/"  onClick={()=>{setHide(false);props.hideMenu()}}><Button className={classes.bouton} >Home</Button></Link>
      <Link className={classes.lien} to ="/shop"   onClick={()=>{setHide(false);props.hideMenu()}}><Button className={classes.bouton}>Shop</Button></Link>
      <Link className={classes.lien} to ="/smile"   onClick={()=>{setHide(false);props.hideMenu()}}><Button className={classes.bouton}>Smile</Button></Link>
      
      </div>
       <Badge badgeContent={props.count} color="error">
             <ShoppingCartIcon className={classes.shoppcard} onClick={()=>{if(hide){setHide(!hide);props.hideMenu()}else{setHide(!hide);props.showMenu()}}} />
       </Badge>
          <Grid container direction="column" className={classes.hidden} >
            <List>
                {renvoi}
            </List>
                    <Grid item container className={classes.conteneurbtn}>
                     <Button variant ="contained" color="primary"  className={classes.btnpanier} href="/panier" sm={12} size="small">Voir panier</Button>
                     </Grid>
          </Grid>
      </Toolbar>
   </AppBar>
          </Fragment>
    )
}



function mapStateToProps(state){
      return {
        count:state.count,
        hide:state.hide
      }   
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
export default connect(mapStateToProps, mapDispatchToProps)(Header);