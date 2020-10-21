import React from 'react';
import {Grid,Typography,Button,TextField} from "@material-ui/core";
import {CardElement,CardNumberElement,CardExpiryElement} from '@stripe/react-stripe-js';





const CardPay = ( props ) =>{ 


return (
    <div>
        <Typography variant="h3" style={{marginTop:"8%",textAlign:"center"}}>Finalise ta commande</Typography>


    <Grid   container  justify="center" >
        <Grid container item direction="column" lg={3}  alignItems="center" justify="center">
        <form  style={{width:"100%"}}>
        <TextField id="outlined-search" label="Nom"  type="text"   variant="outlined" style={{width:"100%",marginBottom:"5%"}}/>
        <TextField id="outlined-search" label="Prenom" type="text"  variant="outlined"  style={{width:"100%",marginBottom:"5%"}}/>
        <TextField id="outlined-search" label="Telephone" type="number"   variant="outlined"   style={{width:"100%",marginBottom:"5%"}}/>
        <TextField variant="outlined" label="Email" type="email"   style={{width:"100%",marginBottom:"5%"}} />
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
            <Button color="primary" variant ="contained" style={{marginTop:"5%",width:"30%"}}>Payer</Button>

            </form>
</Grid>
</Grid>
</div>
)
}


export default CardPay;