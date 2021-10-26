import React from "react";
import "./AddUser.css";
import { useForm } from "react-hook-form";
const AddUser = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/addProducts", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <div>
      <h1>Add User</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input
          className="p-2 m-2"
          {...register("name")}
          required
          placeholder="Product name"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          className="p-2 m-2"
          type="number"
          {...register("price", { required: true })}
          required
          placeholder="Price"
        />
        <input
          className="p-2 m-2"
          type="text"
          {...register("description", { required: true })}
          required
          placeholder="Description"
        />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <input className="p-1 mt-3 btn btn-danger" type="submit" />
      </form>
    </div>
  );
};

export default AddUser;
