import React, { useEffect, useState } from "react";
import "./UpdateUser.css";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
const UpdateProduct = () => {
  const { productId } = useParams();
  const [isUpdate, setIsUpdated] = useState(null);
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/singleProduct/${productId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [productId, isUpdate]);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(`http://localhost:5000/update/${productId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount) {
          setIsUpdated(true);
        } else {
          setIsUpdated(false);
        }
      });
    console.log(data);
  };
  return (
    <div>
      <h1>Updated Name: {product.name}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          defaultValue={product?.name}
          {...register("name")}
          required
        />
        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="p-2 m-2"
          type="text"
          defaultValue={product?.description}
          {...register("email", { required: true })}
          required
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="btn btn-success w-25" type="submit" value="Update" />
      </form>
    </div>
  );
};

export default UpdateProduct;
