import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Form, Input } from 'antd';

import useLanguage from '@/locale/useLanguage';
import { register } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import RegisterForm from '@/forms/RegisterForm';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const RegisterFormContainer = ({ isLoading, isSuccess, form, onFinish, translate }) => (
  <Loading isLoading={isLoading}>
    {isSuccess ? (
      <Alert
        type="success"
        showIcon
        message="Registration successful"
        description="Your account has been created successfully. You can now sign in."
      />
    ) : (
      <Form
        form={form}
        layout="vertical"
        name="register"
        className="login-form"
        onFinish={onFinish}
      >
        <RegisterForm />

        <Form.Item
          name="confirm_password"
          label={translate('confirm_password')}
          dependencies={['password']}
          rules={[
            { required: true, message: 'Please confirm your password.' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Passwords do not match.'));
              },
            }),
          ]}
        >
          <Input.Password size="large" />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            loading={isLoading}
            size="large"
            block
          >
            Create account
          </Button>
        </Form.Item>

        <div style={{ textAlign: 'center' }}>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </Form>
    )}
  </Loading>
);

const RegisterPage = () => {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const { isLoading, isSuccess } = useSelector(selectAuth);
  const [form] = Form.useForm();

  useEffect(() => {
    dispatch({ type: 'AUTH_RESET_STATE' });
  }, [dispatch]);

  const onFinish = (values) => {
    const { confirm_password, ...registerData } = values;
    dispatch(register({ registerData }));
  };

  return (
    <AuthModule
      authContent={
        <RegisterFormContainer
          isLoading={isLoading}
          isSuccess={isSuccess}
          form={form}
          onFinish={onFinish}
          translate={translate}
        />
      }
      AUTH_TITLE="Create your Bizora account"
    />
  );
};

export default RegisterPage;

