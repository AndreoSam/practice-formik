import { useFormik } from "formik";
import React from "react";
import { Container } from "react-bootstrap";

const Formic = () => {
  const formValidation = (value) => {
    const err = { name: "", email: "", phone: "", password: "" };
  };

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    validate: formValidation,
    onSubmit: (data) => {
      alert("Data submitted successfully");
      console.log("Submitted Values: ", data);
    },
  });

  return (
    <Container
      style={{
        border: "2px solid black",
        maxWidth: "300px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        position: "absolute",
        right: "0",
        left: "0",
        top: "0",
        bottom: "0",
        margin: "auto",
      }}
      onSubmit={formik.handleSubmit}
    >
      <form>
        <h4 style={{ margin: "0px", padding: "2px" }}>Form</h4>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          required
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </Container>
  );
};

export default Formic;
