import React from 'react';
import {AppBar,Toolbar,Badge,Avatar,makeStyles} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {connect} from "react-redux";


 const Header = (props) => {

  const useStyles = makeStyles({
    nav:{
      display:"flex",
      justifyContent:"space-between"
    }
  })

 const  classes = useStyles()

 return   (
<AppBar color="transparent" position="static" >
     <Toolbar  className={classes.nav} >
         <Avatar src="../E62BDD9D-8A4D-4619-9D0E-3B6CEBA89605.jpeg" className={classes.logo} />
         <Badge badgeContent={props.count} color="error">
                  <ShoppingCartIcon/>
         </Badge>
     </Toolbar>
</AppBar>
    )
}



function mapStateToProps(state){
      return {
        count:state.count
      }
}
export default connect(mapStateToProps, null)(Header);