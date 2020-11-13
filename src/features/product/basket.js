import React from 'react'
import { useSelector } from 'react-redux'

// import { store, remove } from "../../app/store/productSlice"

// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Card, Button, Row, Col } from 'antd';

const { Meta } = Card;

const Basket = () => {
  // const dispatch = useDispatch();
  const products = useSelector((state) => {
    // console.log("items", state);
    return state;
  });
  
  return (
    <div>
      <p>
        You have {products.filter(product => product.added).length} items in your basket
      </p>
      {
        products.map((item) => {
          return <Row>
            <Col sm={22} xs={24} md={12}>
              <Card
                style={{ width: `100%`, border: 1, borderColor: 'red' }}
                cover={
                  <img width={`100%`} height={`50%`}
                    alt={item.name}
                    src={item.img1}
                  />
                }
                actions={[
                  <Button style={{
                    width: `100%`
                  }} type="primary">Add to Cart</Button>
                ]}
              >
                <Meta
                  title={item.name}
                  description={item.price}
                />
              </Card>
            </Col>
          </Row>
        })
      }
    </div>
  )
}

export default Basket;