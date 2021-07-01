import React from "react";
import "./styles/product.scss";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const Product = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
      <div className="container">
        <div className="container-product-home">
          <div className="container-product-home-left">
            <div className="container-product-home-left-border">
              <div>
                <p>Special Offer</p>
              </div>
              <div>
                <img
                  alt=""
                  src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/GamePad-300x300.jpg"
                />
              </div>
              <div>
                <Link to="/a">Game Console Controller + USB 3.0 Cable</Link>
              </div>
              <div>
                <h1>$99.00</h1>
              </div>
            </div>
          </div>
          <div className="container-product-home-right">
            <div className="header-tag-product">
              <AppBar position="static" color="default">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  variant="fullWidth"
                  aria-label="full width tabs example"
                >
                  <Tab label="Featured" {...a11yProps(0)} />
                  <Tab label="On SaleTop" {...a11yProps(1)} />
                  <Tab label="Product Rated" {...a11yProps(2)} />
                </Tabs>
              </AppBar>
            </div>

            <SwipeableViews
              style={{ with: "100%" }}
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={value}
              onChangeIndex={handleChangeIndex}
            >
              <TabPanel
                className="TabPanel"
                value={value}
                index={0}
                dir={theme.direction}
              >
                <div className="list-product">
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      {[0, 1, 2, 4, 5, 6].map((value) => (
                        <Grid className="product-item-home" key={value} item>
                          <Paper className="paper">
                            <p className="brand-name-home">Audio Speakers</p>
                            <p className="product-name-home">
                              Wireless Audio System Multiroom 360
                            </p>
                            <Link to="/a" className="product-img-home">
                              <img
                                alt=""
                                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/Smartwatch-300x300.jpg"
                              />
                            </Link>
                            <div className="price-product-home">
                              <p>$ 1.900.00</p>
                              <p>
                                <del>$ 2.900.00</del>
                              </p>
                            </div>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value={value} index={1} dir={theme.direction}>
                <div className="list-product">
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      {[0, 1, 2, 4, 5, 6].map((value) => (
                        <Grid className="product-item-home" key={value} item>
                          <Paper className="paper">
                            <p className="brand-name-home">Audio Speakers</p>
                            <p className="product-name-home">
                              Wireless Audio System Multiroom 360
                            </p>
                            <Link to="/a" className="product-img-home">
                              <img
                                alt=""
                                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/1-300x300.jpg"
                              />
                            </Link>
                            <div className="price-product-home">
                              <p>$ 1.900.00</p>
                              <p>
                                <del>$ 2.900.00</del>
                              </p>
                            </div>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
              <TabPanel value={value} index={2} dir={theme.direction}>
                <div className="list-product">
                  <Grid item xs={12}>
                    <Grid container justify="center" spacing={1}>
                      {[0, 1, 2, 4, 5, 6].map((value) => (
                        <Grid className="product-item-home" key={value} item>
                          <Paper className="paper">
                            <p className="brand-name-home">Audio Speakers</p>
                            <p className="product-name-home">
                              Wireless Audio System Multiroom 360
                            </p>
                            <Link to="/a" className="product-img-home">
                              <img
                                alt=""
                                src="https://demo2.chethemes.com/electro/wp-content/uploads/2016/03/Laptop-300x300.jpg"
                              />
                            </Link>
                            <div className="price-product-home">
                              <p>$ 1.900.00</p>
                              <p>
                                <del>$ 2.900.00</del>
                              </p>
                            </div>
                          </Paper>
                        </Grid>
                      ))}
                    </Grid>
                  </Grid>
                </div>
              </TabPanel>
            </SwipeableViews>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;