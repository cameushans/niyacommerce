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

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  }
});

const Burger = () =>{

    const classes = useStyles();
    const [state, setState] = useState({
      top: false,
      left: false,
      right: false,
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
            <Fragment>
              {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <Fragment key={anchor}>
                  <MenuIcon onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
                  <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                    {list(anchor)}
                  </Drawer>
                </Fragment> 
                ))}
            </Fragment>
          );
}

export default Burger;