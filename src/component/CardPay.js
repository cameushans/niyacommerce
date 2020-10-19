import React from 'react';
import {Grid,Typography} from "@material-ui/core";
import {CardElement,CardNumberElement,CardExpiryElement} from '@stripe/react-stripe-js';




const CardPay = ( props ) =>{ 


return (


    <Grid lg={6} style={{marginTop:"8%"}} >
        <Typography  variant="h3">Paye ta commande</Typography>
            <CardElement 
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            />
</Grid>
)
}


export default CardPay;