import React from 'react';
import { Card, Row, Col, Typography, Form, Input, Button, Select, Alert, Spin } from 'antd';
import { Link } from 'react-router-dom';
import registerImage from "../assets/register.png";
import useSignup from '../hooks/useSignup';

const { Option } = Select;

const Register = () => {
  const { loading, error, registerUser } = useSignup();

  const handleRegister = (values) => {
    registerUser(values);
  };

  return (
    <Card className='form-container'>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Typography.Title level={3} strong className='title'>
            Create an Account
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>
            Join for exclusive access!
          </Typography.Text>
          <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please input your Full Name!" },
              ]}
            >
              <Input size="large" placeholder='Enter your Full Name' />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "The input is not a valid Email!" },
              ]}
            >
              <Input size='large' placeholder='Enter your Email' />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input.Password size='large' placeholder='Enter your Password' />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              rules={[
                { required: true, message: "Please confirm your Password!" },
              ]}
            >
              <Input.Password size='large' placeholder='Confirm your Password' />
            </Form.Item>

            <Form.Item
              label="Register As"
              name="role"
              rules={[
                { required: true, message: "Please select your role!" },
              ]}
            >
              <Select size="large" placeholder="Select your role">
                <Option value="admin">Admin</Option>
                <Option value="project-manager">Project Manager</Option>
                <Option value="officer">Officer</Option>
                <Option value="user">User</Option>
              </Select>
            </Form.Item>

            {error && (
              <Alert
                description={error}
                type='error'
                showIcon
                closable
                className='alert'
                onClose={() => setError('')}
              />
            )}

            <Form.Item>
              <Button
                type={loading ? 'default' : 'primary'}
                htmlType='submit'
                size='large'
                className='btn'
                disabled={loading}
              >
                {loading ? <Spin /> : 'Create Account'}
              </Button>
            </Form.Item>
            <Form.Item>
              <Link to="/login">
                <Button size='large' className='btn'>
                  Sign In
                </Button>
              </Link>
            </Form.Item>
          </Form>
        </Col>

        <Col span={12}>
          <img src={registerImage} alt="Register" className='auth-image' />
        </Col>
      </Row>
    </Card>
  );
};

export default Register;
