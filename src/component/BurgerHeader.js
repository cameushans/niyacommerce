import React,{Fragment,useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoodIcon from '@material-ui/icons/Mood';
import  {AppBar} from "@material-ui/core";
import Toolbar from '@material-ui/core/Toolbar';


const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  back:{
      backgroundColor:"white"
  }
});

const Burger = () =>{

    const classes = useStyles();
    const [state, setState] = useState({
      left: false,
    });

        const toggleDrawer = (anchor, open) => (event) => {
            if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
            setState({ ...state, [anchor]: open });
          };
        
          const list = (anchor) => (
            <div
              className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
              })}
              role="presentation"
              onClick={toggleDrawer(anchor, false)}
              onKeyDown={toggleDrawer(anchor, false)}
            >
              <List>
                {[{icon:<HomeIcon />,listText:'Home'}, 
               {icon:<HomeIcon />, listText:'Shop'},
                {icon:<MoodIcon />,listText: 'Smile'},
               {icon:<ShoppingCartIcon />,listText: 'Panier'}].map((text, index) => (
                  <ListItem button key={index}>
                    <ListItemIcon>{text.icon}</ListItemIcon>
                    <ListItemText primary={text.listText} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </div>
          );

        
          return (
          <AppBar className={classes.back}>
            <Fragment>
              {['left'].map((anchor) => (
                <Fragment key={anchor}>
                  <MenuIcon style={{cursor:"pointer"}} color="primary" onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </Drawer>
                </Fragment> 
                ))}
            </Fragment>
            </AppBar>
          );
}

export default Burger;