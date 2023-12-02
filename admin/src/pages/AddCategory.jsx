import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import customFetch from "../utils/customFetch.js";
import styled from "styled-components";
import { FormRow, FormRowSelect } from "../components";
import {
  Link,
  Form,
  redirect,
  useNavigation,
  useLoaderData,
} from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  if (data.parent === "") delete data.parent;
  try {
    await customFetch.post("/category", data);
    return redirect("/add-category");
  } catch (error) {
    return error;
  }
};

export const loader = async () => {
  try {
    const categories = await customFetch
      .get("/category/get/parent")
      .then(({ data }) => data.categories);
    return { categories };
  } catch (error) {
    return error;
  }
};

const Wrapper = styled.div`
  width: 100%;

  .title {
    font-size: 2rem;
    font-weight: bold;
    color: #f1f1f1;
    margin-bottom: 1rem;
  }
  .form-add {
    height: 600px;
    width: 600px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: aqua;
    box-shadow: 0px 3px 14px rgba(226, 225, 225, 0.75);
    border-color: #f1f1f1;
    border-radius: 10px;
    padding: 1rem;
  }

  .form-row {
    .form-label {
      font-size: 12px;
      font-weight: bold;
      color: #8d8d99;
    }
    .form-input {
      border: 1px solid #e2e1e1;
      border-radius: 8px;
      padding: 0 20px;
      height: 44px;
    }
    .form-select {
      border: 1px solid #e2e1e1;
      border-radius: 8px;
      padding: 0 20px;
      height: 44px;
    }
    textarea {
      resize: none;
      width: 100%;
      height: 120px;
      overflow: auto;
      padding: 1rem;
      border-radius: 10px;
      border: 0.5px solid lightgray;
    }
  }
  .btn {
    height: 50px;
    border-radius: 10px;
    background-color: #035ecf;
    color: white;
    font-size: 1.2rem;
    font-weight: bolder;
  }
`;

const AddCategory = () => {
  const { categories } = useLoaderData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <HelmetProvider>
      <Wrapper>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Category</title>
        </Helmet>

        <div className="title">Add Category</div>
        <Form method="post" className="form-add">
          <FormRow type="text" name="name" defaultValue="Laptop" />
          <div className="form-row">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              name="description"
              defaultValue="chung ta khong thuoc ve nhau"
            />
          </div>
          <FormRowSelect
            name="parent"
            labelText="Parent Category"
            list={categories || []}
            id
            optional
          />
          <button type="submit" className="btn" disabled={isSubmitting}>
            {isSubmitting ? "Adding..." : "Add"}
          </button>
        </Form>
      </Wrapper>
    </HelmetProvider>
  );
};

export default AddCategory;
