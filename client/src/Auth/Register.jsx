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
        <Col xs={24} sm={24} md={12}>
          <Typography.Title level={3} strong className='title'>
            Create an Account
          </Typography.Title>
          <Typography.Text type='secondary' strong className='slogan'>
            Join for exclusive access!
          </Typography.Text>
          <Form layout='vertical' onFinish={handleRegister} autoComplete='off'>
            <Form.Item
              label="fullName"
              name="fullName"
              rules={[{ required: true, message: "Please input your Full Name!" }]}
            >
              <Input size="large" placeholder='Enter your Full Name' />
            </Form.Item>

            <Form.Item
              label="username"
              name="username"
              rules={[{ required: true, message: "Please input your Username!" }]}
            >
              <Input size="large" placeholder='Enter your Username' />
            </Form.Item>

            <Form.Item
              label="email"
              name="email"
              rules={[
                { required: true, message: "Please input your Email!" },
                { type: "email", message: "The input is not a valid Email!" },
              ]}
            >
              <Input size='large' placeholder='Enter your Email' />
            </Form.Item>

            <Form.Item
              label="password"
              name="password"
              rules={[{ required: true, message: "Please input your Password!" }]}
            >
              <Input.Password size='large' placeholder='Enter your Password' />
            </Form.Item>

            <Form.Item
              label="Confirm Password"
              name="passwordConfirm"
              dependencies={['password']}
              rules={[
                { required: true, message: "Please confirm your Password!" },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('The two passwords that you entered do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password size='large' placeholder='Confirm your Password' />
            </Form.Item>

            <Form.Item
              label="department"
              name="department"
              rules={[{ required: true, message: "Please select your Department!" }]}
            >
              <Select size="large" placeholder="Select your Department">
                <Option value="sales">Sales</Option>
                <Option value="hr">HR</Option>
                <Option value="engineering">Engineering</Option>
                <Option value="marketing">Marketing</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Register As"
              name="role"
              rules={[{ required: true, message: "Please select your role!" }]}
            >
              <Select size="large" placeholder="Select your role">
                <Option value="admin">Main Admin</Option>
                <Option value="project-manager">Project Admin</Option>
                <Option value="officer">Worker</Option>
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

        <Col xs={24} sm={24} md={12}>
          <img src={registerImage} alt="Register" className='auth-image' />
        </Col>
      </Row>
    </Card>
  );
};

export default Register;
