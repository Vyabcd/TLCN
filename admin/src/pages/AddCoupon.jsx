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
  .btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    background-color: #f3f3f3;
    padding: 1 rem;
    height: 60px;
    width: 350px;
    display: flex;
    justify-content: space-between;
    align-items: center;
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

                    <Typography.Title className="input-title">
                      Code
                    </Typography.Title>
                    <Form.Item name="code">
                      <Input size="large" placeholder="Enter Coupon Code" />
                    </Form.Item>
                    <Typography.Title className="input-title">
                      Sua lai
                    </Typography.Title>
                    <Form.Item name="code">
                      <Input size="large" placeholder="Enter Coupon Code" />
                    </Form.Item>
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
              {/* Parent */}
              <Card className="col-2-item" size="large" title={`Day`}>
                <Typography.Title className="input-title">
                  Category parent
                </Typography.Title>
                <Form.Item name="day">
                  <DatePicker onChange={onChange} needConfirm />
                </Form.Item>
              </Card>
            </div>
          </div>
          {/* BUTTON SUBMIT */}
          <div className="btn">
            <Button
              danger
              size="large"
              onClick={() => {
                Modal.confirm({
                  title: "Confirm",
                  content: "Do you want to cancel?",
                  footer: (_, { OkBtn, CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <OkBtn />
                    </>
                  ),
                });
              }}
            >
              Cancel
            </Button>

            <Button
              size="large"
              type="primary"
              htmlType="submit"
              onClick={() => {
                Modal.confirm({
                  title: "Confirm",
                  content: "Do you want submit?",
                  footer: (_, { OkBtn, CancelBtn }) => (
                    <>
                      <CancelBtn />
                      <OkBtn />
                    </>
                  ),
                });
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </Wrapper>
    </HelmetProvider>
  );
};

export default AddCoupon;
