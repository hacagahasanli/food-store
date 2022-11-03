import React, { useEffect } from "react";
import {
  Container,
  OrdersSection,
  OrdersTableContainer,
  OrdersTable,
  OrdersTableRow,
  fetchOrderedItems,
  getLocaleStorage,
  useSelector,
} from "../../index";
import "../../Orders.css";

const OrdersSub = () => {
  const orderedItems = useSelector((state) => state.cartSlice.orders);
  const array = orderedItems.map((item) => {
    return item.item;
  });
  return (
    <OrdersSection>
      <Container>
        <OrdersTableContainer>
          <OrdersTable>
            <thead>
              <OrdersTableRow>
                <th>#</th>
                <th>Order ID</th>
                <th colSpan="2">All Product</th>
                <th colSpan="2">Date</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th></th>
              </OrdersTableRow>
            </thead>
            <tbody>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
            </tbody>
            <tbody>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
              <OrdersTableRow>
                <td>1</td>
                <td>#985240</td>
                <td colSpan="2">......</td>
                <td colSpan="2">Aug 17, 2022, 1:32 AM</td>
                <td>$15</td>
                <td>15</td>
                <td>$225</td>
                <td>
                  <button>Delete</button>
                </td>
              </OrdersTableRow>
            </tbody>
          </OrdersTable>
        </OrdersTableContainer>
      </Container>
    </OrdersSection>
  );
};

export default OrdersSub;
