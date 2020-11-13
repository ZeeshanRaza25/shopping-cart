import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductItem } from '../store/state';

import { Row, Col, Badge } from 'antd';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';

const style = { background: 'white', color: 'black', padding: '2px 0', fontSize: '14' };

export default function MyHeader() {
  const products = useSelector((state: ProductItem[]) => state)
  // console.log(products)
  let numberOfItems = Object.values(products).filter(products => products.added).length

  return (
    <>
      <Row justify="center" style={{
        fontSize: 17,
        fontWeight: "lighter",
        color: 'black',
        textDecoration: 'none',
        textUnderlinePosition: 'auto',
        paddingTop: '2%',
        paddingBottom: '1%'
      }}>
        <Col className="gutter-row" xs={6} sm={3} md={2} lg={2}>
          <Link to="/" style={{
            color: 'black',
            fontWeight: 'lighter',
            fontSize: 23
          }} >
            Store
          </Link>
        </Col>
        <Col className="gutter-row" xs={6} sm={3} md={2} lg={2}>
          <Link to="/about"
            style={{
              color: 'black',
              fontWeight: 'lighter',
              fontSize: 23
            }}  >
            About
          </Link>
        </Col>
        <Col className="gutter-row" style={style} xs={4} sm={2} md={2} lg={2} >
          <Link to="/cartlist" style={{
            color: 'black',
            fontWeight: 'lighter',
            fontSize: 25
          }} >
            {
              numberOfItems === undefined ?
                <Badge count={0} offset={[5, 1]} showZero size="default" >
                  <ShoppingCartOutlined style={{ fontSize: 23, color: 'black', fontWeight: 'lighter' }} />
                </Badge>
                : <Badge count={numberOfItems} offset={[5, 1]} showZero size="default" >
                  <ShoppingCartOutlined style={{ fontSize: 23, color: 'black', fontWeight: 'lighter' }} />
                </Badge>
            }
          </Link>
        </Col>
      </Row>
    </>
  )
}