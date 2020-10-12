import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography,Button, ButtonGroup} from "@material-ui/core"
import { Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyles = makeStyles({

  centre:{
      textAlign:"center",
      marginTop:"3%",
      marginBottom:"5%"
  },

  btncmd:{
    width:"20%",
    height:"10%",
    justifyContent:"center",
    
  },

  panier:{
    height:"50%",
    justifyContent:"center",
    flexDirection:"column",
    alignItems:"center",
  },
  valider:{
      width:"50%",
    fontFamily:"Sansita Swashed, cursive",
  },
  disable : {
    fontWeight:"bolder"
  }
});




export default function BasicTable(props) {
  const classes = useStyles();
  const [info,setInfo] = useState("");

/*   useEffect(() => {
    const fetching = async   () => {
      fetch("http://localhost:1337/paniers")
         .then((res)=>res.json())//toujours
         .then((resu)=>setInfo(resu[0].type[0].name))
     }
     fetching()
   }, [])
   console.log(info) */
  
  return (
      <Fragment>
  <Typography variant="h2" className={classes.centre}>Mon panier </Typography>
  <Grid container className={classes.panier} lg={12}>
    <TableContainer component={Paper} style={{ width:"80%",boxShadow:"5px 5px 20px 5px"}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow> 
          <TableCell component="th" scope="row">
              </TableCell>
            <TableCell align="left"><h3>Produits</h3></TableCell>
            <TableCell align="center"><h3>Quantité</h3></TableCell>
            <TableCell align="right"><h3>Date</h3></TableCell>
            <TableCell align="right"><h3>Prix</h3></TableCell>
            <TableCell align="right"><h3>Retirer</h3></TableCell>


          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">Casquette</TableCell>
              <TableCell align="center">
                <ButtonGroup>
                   <Button color="primary" variant="contained" size="small">-</Button>
                   <Button disabled>5</Button>
                   <Button color="primary" variant="contained" size="small">+</Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="right">05/10/2020</TableCell>
              <TableCell align="right">78€</TableCell>
              <TableCell align="right"><HighlightOffIcon /></TableCell>


            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">Jogging</TableCell>
              <TableCell align="center">
                <ButtonGroup>
                   <Button color="primary" variant="contained" size="small">-</Button>
                   <Button disabled variant="text" className={classes.disable}>5</Button>
                   <Button color="primary" variant="contained" size="small">+</Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="right">05/10/2020</TableCell>
              <TableCell align="right">54€</TableCell>
              <TableCell align="right"><HighlightOffIcon /></TableCell>


            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left">Huile</TableCell>
              <TableCell align="center">
                <ButtonGroup>
                   <Button color="primary" variant="contained" size="small">-</Button>
                   <Button disabled>5</Button>
                   <Button color="primary" variant="contained" size="small">+</Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="right">05/10/2020</TableCell>
              <TableCell align="right">30€</TableCell>
              <TableCell align="right"><HighlightOffIcon /></TableCell>


            </TableRow>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="left"></TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Grid container direction ="column" className={classes.btncmd}>
      <Typography variant ="h5">Total :  679€</Typography>
     <Button variant="contained" className={classes.valider} color="primary">Valider</Button>
    </Grid>
    </Grid>
    </Fragment>
  );
}