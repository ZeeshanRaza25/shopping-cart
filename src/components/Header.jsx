import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Row, Col, Badge } from 'antd';
import ShoppingCartOutlined from '@ant-design/icons/ShoppingCartOutlined';

const style = { background: 'white', color: 'black', padding: '2px 0', fontSize: '14' };


export default function MyHeader() {
  // const dispatch = useDispatch();
  const numberOfItems = useSelector((state) => {
    // console.log("items", state.productReducer.selectedProduct.length);
    return state.productReducer.selectedProduct.length
  })
  // console.log(numberOfItems);
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
              numberOfItems === "undefined" ?
                <Badge count={0} offset={[5, 1]} showZero size="default" >
                  <ShoppingCartOutlined style={{ fontSize: 23, color: 'black', fontWeight: 'lighter' }} />
                </Badge>
                : <Badge count={numberOfItems} offset={[5, 1]} showZero size="default" >
                  <ShoppingCartOutlined style={{ fontSize: 23, color: 'black', fontWeight: 'lighter' }} />
                </Badge>
              /* <span>
                  cart ({numberOfItems})
              </span> */
            }
          </Link>
        </Col>
      </Row>
    </>
    // {/* // <div className={classes.grow}>
    // <AppBar position="static">
    //   <Toolbar>
    //     <Link to="/" className={classes.title}>
    //       <Typography variant="h6" >
    //         Shoe Store
    //     </Typography>
    //     </Link>
    //     <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
    //       Products &nbsp; &nbsp; &nbsp;
    //     </Link>
    //     <Link to="/cartlist" style={{ textDecoration: 'none', color: 'white' }}>
    //       <IconButton edge="start" aria-label="menu" color="inherit">
    //         <Badge badgeContent={numberOfItems} color="secondary">
    //           <AddShoppingCartSharpIcon />
    //         </Badge>
    //       </IconButton>
    //     </Link> */}
    // {/* <Grid container spacing={0}> */ }
    /* <Grid item xs={3} sm={4} md={6}>
              <Link to="/" className={classes.title} style={{ marginLeft: '5%' }}>
                <img alt="logo" src={require('../assets/logo.png')} height="100%" width="50%" />
              </Link>
            </Grid> */
    /* <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div> */
    /* <div className={classes.grow} />
          <Grid item xs={12} sm={3} md={2}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Grid>
          <Grid item xs={12} sm={3} md={2}>
            <Link to="/products" style={{ textDecoration: 'none', color: 'white' }}>
              Products
            </Link>
          </Grid> */
    /* <Grid item xs={12} sm={3} md={2}>
              <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
              About &nbsp;
              </Link>
            </Grid> */
    /* <Grid item xs={12} sm={3} md={2}>
            <div className={classes.sectionDesktop}>
              <Link to="/cartlist" style={{ textDecoration: 'none', color: 'white' }}>
                <IconButton aria-label="show 17 new notifications" color="inherit">
                  <Badge badgeContent={items.length} color="secondary">
                    <AddShoppingCartSharpIcon />
                  </Badge>
                </IconButton>
              </Link>
            </div>
          </Grid>
          </Grid> */
    //   </Toolbar>
    // </AppBar >
    // {/* </div> */}
  );
}

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// // import Button from '@material-ui/core/Button';
// // import IconButton from '@material-ui/core/IconButton';
// // import MenuIcon from '@material-ui/icons/Menu';
// import MyIcon from '@material-ui/icons/AcUnitRounded'
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   TypographicStyle: {
//     flex: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// const MyHeader = () => {
//   const classes = useStyles();
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography className={classes.TypographicStyle}><Link to="/">Home</Link></Typography>
//         {/* <MyIcon /> */}
//         {/* <Link to="/">Home</Link> {' '} {' '} */}
//         <Link to="/about">About</Link> {' '}
//         <Link to="/products">Product</Link> {' '}
//         {/* <Button color="inherit">Login</Button> */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default MyHeader;