import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import customFetch from "../utils/customFetch.js";
import styled from "styled-components";
import { FormRow, FormRowSelect } from "../components/index.js";
import {
  Modal,
  Button,
  Select,
  Form,
  Input,
  Typography,
  Card,
  Breadcrumb,
  DatePicker,
  InputNumber,
  Space,
} from "antd";
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/coupon", data);
    return redirect("/all-coupon");
  } catch (error) {
    return error;
  }
};

const Wrapper = styled.div`
  width: 100%;
  .title {
    text-align: left;
    font-size: 1.5rem;
    font-weight: bold;
    color: #00193b;
    margin-bottom: 1rem;
  }
  .input-title {
    font-size: 0.95rem;
    font-weight: 400;
  }
  .col-1 {
    width: 60%;
    height: fit-content;
  }
  .col-2 {
    width: 40%;
    height: fit-content;
  }
  .col-2-item {
    border: 1px solid lightgray;
    border-radius: 10px;
  }
  .col-1-item {
    border: 1px solid lightgray;
    border-radius: 10px;
  }

  .discount {
    display: flex;
  }
  .discount-item-1 {
    flex-grow: 7;
    box-sizing: border-box;
    padding-right: 10px;
  }
  .discount-item-2 {
    flex-grow: 3;
    box-sizing: border-box;
    padding-left: 10px;
  }
`;

const AddCoupon = () => {
  // const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  //Modal
  const [open, setModalOpen] = useState(false);
  //Mở Modal (Confirm box)
  const showModal = () => {
    setModalOpen(true);
  };
  //Đóng Modal sau khi xác nhận
  const handleOk = () => {
    setModalOpen(false);
  };
  //Đóng Modal sau khi xác nhận
  //Đóng ReviewOpen sau khi xác nhận
  const handleCancel = () => {
    setModalOpen(false);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <HelmetProvider>
      <Wrapper>
        <Breadcrumb
          style={{ paddingBottom: "1rem" }}
          items={[
            {
              title: <a href="/">Dashboard</a>,
            },
            {
              title: "Add Coupon",
            },
          ]}
        />
        <Helmet>
          <meta charSet="utf-8" />
          <title>Add Coupon</title>
        </Helmet>
        <div className="title">Add Coupon</div>

        <Form
          name="basic"
          // initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div style={{ display: "flex", gap: "1.5rem", marginBottom: "4rem" }}>
            <div
              className="col-1"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Card
                className="col-1-item"
                size="large"
                title={`Coupon information`}
              >
                <div>
                  {/* INFORMATION FIELDS */}
                  <div>
                    <Typography.Title className="input-title">
                      Name
                    </Typography.Title>
                    <Form.Item name="name">
                      <Input size="large" placeholder="Enter Coupon Name" />
                    </Form.Item>

                    <div className="discount">
                      <div className="discount-item-1">
                        <Typography.Title className="input-title">
                          Code
                        </Typography.Title>
                        <Form.Item name="code">
                          <Input size="large" placeholder="Enter Coupon Code" />
                        </Form.Item>
                      </div>
                      <div className="discount-item-2">
                        <Typography.Title className="input-title">
                          Discount
                        </Typography.Title>
                        <Form.Item name="discount">
                          <InputNumber
                            suffix="%"
                            style={{ width: "100%" }}
                            size="large"
                            placeholder="eg. 10"
                          />
                        </Form.Item>
                      </div>
                    </div>
                    <Typography.Title className="input-title">
                      Description
                    </Typography.Title>
                    <Form.Item name="description">
                      <Input.TextArea
                        size="large"
                        placeholder="Type your description..."
                        autoSize={{
                          minRows: 7,
                          maxRows: 9,
                        }}
                      />
                    </Form.Item>
                  </div>
                </div>
              </Card>
            </div>
            <div
              className="col-2"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Card className="col-2-item" size="large" title={`Day`}>
                <Typography.Title className="input-title">
                  Day Start
                </Typography.Title>
                <Form.Item name="dayStart">
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    onChange={onChange}
                    needConfirm
                  />
                </Form.Item>
                <Typography.Title className="input-title">
                  Day End
                </Typography.Title>
                <Form.Item name="dayEnd">
                  <DatePicker
                    size="large"
                    style={{ width: "100%" }}
                    onChange={onChange}
                    needConfirm
                  />
                </Form.Item>
              </Card>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                size="large"
                style={{ width: 150 }}
              >
                Add Category
              </Button>
            </div>
          </div>
        </Form>
      </Wrapper>
    </HelmetProvider>
  );
};

export default AddCoupon;