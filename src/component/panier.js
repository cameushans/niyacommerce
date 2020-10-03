import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography,Button} from "@material-ui/core"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  centre:{
      textAlign:"center"
  }
});




export default function BasicTable(props) {
  const classes = useStyles();
  const [info,setInfo] = useState("");

  useEffect(() => {
    const fetching = async   () => {
      fetch("http://localhost:1337/paniers")
         .then((res)=>res.json())//toujours
         .then((resu)=>setInfo(resu[0].type[0].name))
     }
     fetching()
   }, [])
   console.log(info)
  
  return (
      <Fragment>
  <Typography variant="h2" className={classes.centre}>Mon panier </Typography>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Produit</TableCell>
            <TableCell align="right">Quantité</TableCell>
            <TableCell align="right">Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              <TableCell component="th" scope="row">
              </TableCell>
              <TableCell align="left"><img style={{width:"2%"}} src={info}></img></TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">1</TableCell>
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
    <Button color="primary">Valider la commande </Button>
    </Fragment>
  );
}