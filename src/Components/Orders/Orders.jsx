import { Container } from "@mui/system";
import ArrowForwardIos from "@mui/icons-material/ArrowForwardIos";
import React, { useEffect } from "react";
import "./Order.scss";
import { CardActionArea } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getOrderAsync } from "../redux/actions/OrderAll";
import GoBack from "../ComponentsStyle/GoBack";
import { useNavigate } from "react-router-dom";

const AllOrders = () => {
  const dispatch = useDispatch();
  const { uid } = useSelector((store) => store.user);
  const { restaurants } = useSelector((store) => store.restaurants);
  const orders = useSelector((store) => store.allOrders);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getOrderAsync(uid));
  }, []);

  const getRestaurantImage = (order) => {
    const { image } = restaurants.find(restaurant.id === order.restaurant);
    return image;
  };
  const getRestaurantName = (order) => {
    const { name } = restaurants.find(
      (restaurant) => restaurant.id === order.restaurant
    );
    return name;
  };

  const handleOrder = (id) => {
    navigate(`/orderdetail/${id}`); //ruta cambiar
  };
  return (
    <Container>
      <div className="allOrders">
        <section className="allOrders__title">
          <GoBack />
          <span>All Orders</span>
        </section>
        <section className="allOrders_ orders">
          {orders.map((order, index) => (
            <CardActionArea
              onClick={() => {
                handleOrder(order.id);
              }}
              key={index}
            >
              <aside className="allOrders__Orders__card">
                <div className="allOrders__orders__card__left">
                  <img src={getRestaurantImage(order)} alt="restaurant logo" />
                  <div className="allOrders__orders__card__left__restaurant">
                    <span className="allOrders__orders__card__left__name">
                      {getRestaurantName(order)}
                    </span>
                    <span className="allOrders__orders__card__left__price">
                      $ {order.total}
                    </span>
                  </div>
                </div>
                <div className="allOrders__orders__card__right">
                  <span className="allOrders__orders__card__right__state delivered">
                    Delivered <ArrowForwardIos sx={{ width: "10px" }} />
                  </span>
                </div>
              </aside>
            </CardActionArea>
          ))}
        </section>
      </div>
    </Container>
  );
};
 export default Orders;