import React, { useEffect, useState } from "react";
import "./Dashboard.css";
const Dashboard = () => {
  const [orders, setOrders] = useState([]);

  const email = "ami@gmail.com";

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [email]);
  console.log(orders);
  return (
    <div>
      <h1>I am Dashboard {orders.length}</h1>
      <div className="all-products">
        <div className="row container text-center">
          {orders?.map((pd, index) => (
            <div className="col-md-6 col-lg-4">
              <div className=" border border p-2 m-2">
                <h4>{pd.email}</h4>
                <h5>{pd?.name}</h5>
                <h5>{pd?.price}</h5>
                <h6>{pd?.description}</h6>
                <button className="btn btn-danger m-2">delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
