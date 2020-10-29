import React ,{Fragment,useState} from 'react';
import {Link} from "react-router-dom";
import {AppBar,Toolbar,Avatar,Button,Badge,List,ListItem, Typography} from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import {connect} from "react-redux";
import {Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import useStyles from "./Header.style"


 const Header = (props) => {
  const {className} = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
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
                        <Link to="/">
                            <Avatar src="../niya.jpeg" className={classes.avatar} />
                        </Link>
                      </div>

                      <div className={classes.menu}>
                              <Link className={classes.lien}  to ="/"><Button >Home</Button></Link>
                              <Link className={classes.lien} to ="/shop"><Button >Shop</Button></Link>
                              <Link className={classes.lien} to ="/smile"><Button >Smile</Button></Link>
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
                                        <Button color="primary" onClick={toggle}>Retour</Button>{' '}
                                        <Link to="/panier">
                                             <Button color="secondary" onClick={toggle}>Panier</Button>
                                        </Link>
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
        data:state.cartData
      }   
    };

export default connect(mapStateToProps, null)(Header);