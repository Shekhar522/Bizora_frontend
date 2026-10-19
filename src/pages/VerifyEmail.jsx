import { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button } from 'antd';

import { verify } from '@/redux/auth/actions';
import { selectAuth } from '@/redux/auth/selectors';
import useLanguage from '@/locale/useLanguage';
import Loading from '@/components/Loading';
import AuthModule from '@/modules/AuthModule';

const VerifyEmail = () => {
  const translate = useLanguage();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userId, emailToken } = useParams();
  const { isLoading, isSuccess } = useSelector(selectAuth);

  useEffect(() => {
    dispatch({ type: 'AUTH_RESET_STATE' });
    dispatch(verify({ userId, emailToken }));
  }, [dispatch, userId, emailToken]);

  useEffect(() => {
    if (isSuccess) navigate('/');
  }, [isSuccess, navigate]);

  return (
    <AuthModule
      AUTH_TITLE="Verify your email"
      authContent={
        <Loading isLoading={isLoading}>
          <Alert
            showIcon
            type={isSuccess ? 'success' : 'info'}
            message={isSuccess ? 'Email verified' : 'Verifying your email'}
            description={
              isSuccess
                ? 'Your email has been verified. Redirecting you to Bizora.'
                : 'Please wait while we verify your email address.'
            }
          />
          <div style={{ marginTop: 16, textAlign: 'center' }}>
            <Button type="link">
              <Link to="/login">{translate('already have account Login')}</Link>
            </Button>
          </div>
        </Loading>
      }
    />
  );
};

export default VerifyEmail;
