import React from 'react';
import { useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';

import { add } from '../store/productSlice';
import data from "../store/state";
// import RatingComponent from './Rating';

import { Row, Col, Card, Button } from 'antd';
const { Meta } = Card;

export default function Product() {
    const dispatch = useDispatch();
    // console.log("dispatch", dispatch);
    // const abc = useSelector((state) => {
    //     return state;
    // });
    console.log(data);

    const handleClick = (item) => {
        console.log(item);
        dispatch(add(item))
    }

    return (
        <div style={{ margin: `5%` }}>
            {/* {console.log("data", data)} */}
            <Row justify="center">
                {data.length > 0 ? <>
                    {Object.entries(data).map((itm) => {
                        // let [{ imgUrl, name, id, price }] = itm;
                        let [slug, { imgUrl, name, id, price }] = itm;
                        return <Col xs={24} sm={12} md={8} key={id}>
                            {/* <Link className="product-link" to={`/products/${slug}`} style={{ textDecoration: 'none', color: 'white' }}> */}
                            <Card
                                // key={id}
                                style={{ margin: '5%' }}
                                cover={
                                    <img
                                        style={{
                                            padding: '5%'
                                        }}
                                        alt={imgUrl}
                                        src={imgUrl}
                                    />
                                }
                            >
                                <Meta
                                    style={{
                                        padding: '5%'
                                    }}
                                    description={name}
                                    title={`$ ${price}`}
                                />
                                {/* <RatingComponent rating={rating} /> */}
                                <Button ghost size="large" type="primary" block
                                    onClick={() => handleClick(add({ imgUrl, name, id, price, quantity: 1 }))}
                                >
                                    Add to cart
                                </Button>
                            </Card>
                            {/* </Link> */}
                        </Col>
                    })}
                </> : <p className="text-center bg-gray-100 text-gray-500 py-5">No data</p>
                }
            </Row>
        </div>
    );
}
