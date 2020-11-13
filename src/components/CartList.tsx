import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clear, inc, remove } from '../store/productSlice';
import { ProductItem } from '../store/state';

import { List, Avatar, Skeleton, Row, Col } from 'antd';
import PlusIcon from '@ant-design/icons/PlusSquareTwoTone';
import MinusIcon from '@ant-design/icons/MinusSquareTwoTone';
import DeleteTwoTone from '@ant-design/icons/DeleteTwoTone';

export default function CartList() {
    const dispatch = useDispatch();
    const items = useSelector((state: ProductItem[]) => state)

    let totalPrice = items.reduce((total, pro) => total + (pro.price) * pro.quantity, 0)

    return (
        <Row align="top" justify="center">
            <Col
                span={24}>
                <h1>Cart</h1>
                <p>This is the cart Page.</p>
            </Col>
            <Col xs={22} sm={12} md={12} lg={12}>
                <List bordered
                    itemLayout="horizontal"
                    size="large"
                    footer={
                        <div style={{
                            textAlign: 'end'
                        }}>
                            Total: $ <b>{totalPrice}</b>
                        </div>
                    }
                    dataSource={items.filter(product => product.added)}
                    renderItem={item => (
                        <List.Item
                            key={item.id}
                            actions={[
                                item.quantity > 0 ?
                                    <MinusIcon
                                        onClick={() => dispatch(remove(item))}
                                        style={{
                                            fontSize: '18px', color: '#08c'
                                        }}
                                    />
                                    : null
                                ,
                                < PlusIcon
                                    onClick={() => dispatch(inc(item))}
                                    style={{
                                        fontSize: '18px', color: '#08c'
                                    }} />,
                                <DeleteTwoTone onClick={() => dispatch(clear(item))} />
                            ]}
                        >
                            <Skeleton avatar title={false} loading={item.loading} active>
                                <List.Item.Meta
                                    avatar={
                                        <Avatar alt={item.name} src={item.imgUrl} />
                                    }
                                    title={item.name}
                                    description={`$ ${item.price}`}
                                />
                                <div>{`Qty ${item.quantity}`}</div>
                            </Skeleton>
                        </List.Item>
                    )}
                />
            </Col>
        </Row >
    );
}


        //         {items.map(item => (
        // <List dense={false} key={item.payload.id}>
        //     {console.log("quantity" , item.payload.quantity)}
        //     <ListItem>
        //         <ListItemAvatar>
        //             <Avatar alt={item.payload.name} src={item.payload.imgUrl} className={classes.medium} />
        //         </ListItemAvatar>
        //         <ListItemText style={{ marginLeft: '5%' }}
        //             primary={item.payload.name}
        //         />

        //         <ListItemSecondaryAction onClick={() => handleClick(item)}>
        //             <IconButton edge="end" aria-label="delete" size="medium" style={{ fontWeight: '900' }}>
        //                 <DeleteIcon />
        //             </IconButton>
        //         </ListItemSecondaryAction>
        //     </ListItem>
        // </List>
        //       <Card className={classes.root}>
        //       <CardMedia
        //           className={classes.media}
        //           image={item.imgUrl}
        //           title={item.name}
        //       />
        //       <CardActions disableSpacing>
        //           <IconButton aria-label="add to favorites">
        //               <FavoriteIcon />
        //           </IconButton>
        //           <IconButton aria-label="share">
        //               <ShareIcon />
        //           </IconButton>
        //       </CardActions>
        //   </Card>
        //         ))}
        //     
        //     }

// export default function Product() {
//     return (
//         <div>
//             <div>
//                 <Outlet />
//             </div>

//         </div>
//     )
// }
 // <div className="flex items-center bg-gray-100 mb-10 shadow" key={item.id}>
                    //     <div className="flex-auto text-left px-4 py-2 m-2">
                    //         <p className="text-gray-900 leading-none">{item.name}</p>
                    //         <p className="text-gray-600">{item.price}</p>
                    //     </div>
                    //     <div className="flex-auto text-right px-4 py-2 m-2">
                    //         <Link to={`/edit/${item.id}`}>
                    //             <button onClick={() => editItem(item.id)} className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold mr-3 py-2 px-4 rounded-full inline-flex items-center">
                    //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                    //             </button>
                    //         </Link>
                    //         <button onClick={() => remove(item.id)} className="block bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center">
                    //             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                    //         </button>
                    //     </div>
                    // </div>