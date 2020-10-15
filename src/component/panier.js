import React,{Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {Typography,Button, ButtonGroup} from "@material-ui/core";
import { Grid } from '@material-ui/core';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {connect} from "react-redux"


 function BasicTable(props) {


  const useStyles = makeStyles({
    centre:{
        textAlign:"center",
        marginTop:"3%",
        marginBottom:"5%"
    },
    btncmd:{
      width:"20%",
      height:"10%",
      justifyContent:"center"
    },
    panier:{
      height:"50%",
      justifyContent:"center",
      flexDirection:"column",
      alignItems:"center",
    },
    valider:{
      width:"100%",
    },
    dessouspanier:{
      height:"5%",
      width:"30%",
      justifyContent:"space-evenly",
    },
    total:{
      justifyContent:"space-between"
    }
  });
  







  const classes = useStyles();

const datas = props.data.map((el,i)=>{
  return   (
<TableRow >
                <TableCell component="th" scope="row">
                </TableCell>
                <TableCell align="left">{el.images}</TableCell>
                <TableCell align="center">
                  <ButtonGroup>
                    <Button color="primary" variant="contained" size="small">-</Button>
                    <Button disabled>5</Button>
                    <Button color="primary" variant="contained" size="small">+</Button>
                  </ButtonGroup>
                </TableCell>
                <TableCell align="right">05/10/2020</TableCell>
                <TableCell align="right">{el.prix}</TableCell>
                <TableCell align="right"><HighlightOffIcon /></TableCell>
</TableRow>)
}) ;

  return (
  
  <Fragment>
              <Typography variant="h2" className={classes.centre}>Mon panier </Typography>
              <Grid container direction="column">
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
                                       {datas}

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
                  <Grid container direction ="row" className={classes.dessouspanier}>

                    <Typography variant="h5">Total: 650€</Typography>
                  <Button variant="contained" className={classes.valider} color="primary">Valider</Button>
                 </Grid>
              </Grid>
          </Grid>
    </Fragment>
  )
};

function mapStateToProps(state){
  return {
    data:state.cartData
  }
}

export default connect(mapStateToProps,null)(BasicTable)