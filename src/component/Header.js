import React ,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import {makeStyles,AppBar,Toolbar,Avatar,Button,Badge,List,ListItem, Typography} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {connect} from "react-redux";
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


 const Header = (props) => {
  const {className} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const useStyles = makeStyles({
    lien:{
      textDecoration:"none"
    },
    menu:{
      display:"flex",
      justifyContent:"space-around",
      width:"60%"
    },
    img:{
      width:"30%",
      height:"40%"
    },
    avatar:{
      width:"11%"
    },
    appbar:{
      height:"8%",
      zIndex:7
    },
    shoppcard:{
      cursor:"pointer",
    },
  });


  const classes = useStyles();

  const item = props.data.map((el,i)=>{
    return (
      <ListItem>
            <img  className={classes.img} alt="casquette"  src={el.images}/>
            <Typography variant="p">{el.nom}</Typography>
       </ListItem>
    )
  }) 




 return   (
   <Fragment>
        <AppBar color="white" position="fixed"  className={classes.appbar}>
            <Toolbar>

                      <div className={classes.logo}>
                              <Avatar src="../niya.jpeg" className={classes.avatar} />
                      </div>

                      <div className={classes.menu}>
                              <Link className={classes.lien} to ="/"><Button id="#Acc" className={classes.bouton}>Home</Button></Link>
                              <Link className={classes.lien} to ="/shop"><Button className={classes.bouton}>Shop</Button></Link>
                              <Link className={classes.lien} to ="/smile"><Button className={classes.bouton}>Smile</Button></Link>
                      </div>

                      <Badge badgeContent={props.count} color="error">
                            <ShoppingCartIcon className={classes.shoppcard} onClick={()=>{toggle()}} />
                      </Badge>              

                      <Modal isOpen={modal} toggle={toggle} className={className} zIndex={10}>
                                     <ModalHeader toggle={toggle}>Panier</ModalHeader>
                                    <ModalBody>
                                          <List>
                                             {item}
                                        </List>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                                    </ModalFooter>
                      </Modal>

               </Toolbar>
         </AppBar>
   </Fragment>
    )
};

function mapStateToProps(state){
      return {
        count:state.count,
        hide:state.hide,
        data:state.cartData
      }   
    };

 function mapDispatchToProps(dispatch){
        return {
        showMenu: function(){
              dispatch({type:"SHOW"})
        } ,
        hideMenu: function(){
             dispatch({type:"HIDE"})
        }
      }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);