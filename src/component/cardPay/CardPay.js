import React from 'react';
import {Grid,Typography,Button,TextField} from "@material-ui/core";
import {CardElement,CardNumberElement,CardExpiryElement} from '@stripe/react-stripe-js';
import useStyles from "./cardPay.style";





const CardPay = ( props ) =>{ 
    const classes = useStyles();   


 return (
    <div>
        <Typography variant="h3" className={classes.typo}>Finalise ta commande</Typography>


    <Grid   container  justify="center" alignItems="center" >
        <Grid container item direction="column" lg={3}  alignItems="center" justify="center">
        <form  style={{width:"100%"}}>
        <TextField id="outlined-search" label="Nom"  type="text"   variant="outlined" className={classes.card}/>
        <TextField id="outlined-search" label="Prenom" type="text"  variant="outlined"  className={classes.card}/>
        <TextField id="outlined-search" label="Telephone" type="number"   variant="outlined"   className={classes.card}/>
        <TextField variant="outlined" label="Email" type="email"  className={classes.card} />
            <CardElement 
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: 'blue',
                    '::placeholder': {
                    color: 'blue',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}

            />
            <Button color="primary" variant ="contained" className={classes.button}>Payer</Button>

            </form>
</Grid>
</Grid>
</div>
)
}


export default CardPay;