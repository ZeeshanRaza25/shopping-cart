import React from 'react';
import { useParams } from 'react-router-dom';
// import { shoe } from '../Context/Shoe';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Rating } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
// import { useDispatch } from 'react-redux'
// import { add } from '../store/productSlice';
import data from "../store/state";

export const ProductDetail = () => {
    // const dispatch = useDispatch();
    // const items = useSelector((state) => {
    //     return state.productReducer.items
    // })
    const { slug } = useParams();
    const x = data.items[slug];
    // console.log(x);
    return (
        <Grid container direction="row"
            justify="center"
            alignItems="center"
            spacing={0}
        >
            <Grid item xs={12} sm={12} md={12}>
                <Typography align="center" style={{ paddingTop: '3%', color: '#424242', textAlign: 'center' }} variant="h5" component="h2" gutterBottom>
                    {x.name}
                </Typography>
            </Grid>
            {/* <Grid item xs={2} /> */}
            <Grid item direction="row"
                justify="center"
                alignItems="center"
                xs={8} sm={3} md={6}>
                <Grid item xs={6} ><img height="40%" width="40%" src={x.imgUrl} alt={x.name} /></Grid>
                <Grid item xs={6} ><img height="40%" width="40%" src={x.img1} alt={x.name} /></Grid>
                {/* <Grid item xs={6} ><img height="40%" width="40%" src={x.img2} alt={x.name} /></Grid> */}
            </Grid>
            {/* <Grid item xs={2} /> */}
            <Grid item xs={12} >
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Typography variant="h6" color="textSecondary" style={{ textAlign: 'center', marginBottom: '1%' }} component="h6">
                        Rating
                    </Typography>
                    <Typography variant="h5" color="textSecondary" style={{ textAlign: 'center' }} component="legend">
                        <Rating name="read-only" value={x.rating} readOnly />
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12} >
                <Typography align="center" style={{ color: '#424242', marginBottom: '8%' }} variant="h5" component="h2" gutterBottom>
                    Price: $ {x.price}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Button
                style={{
                    textAlign: 'center'
                }}
                    // onClick={() => dispatch(add(x))}
                    variant="outlined" size="medium" color="primary">
                    ADD TO CART
            </Button>
            </Grid>
        </Grid>
    )
}

export default ProductDetail;