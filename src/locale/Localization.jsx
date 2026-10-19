import { ConfigProvider } from 'antd';

export default function Localization({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#2563EB',
          colorLink: '#1D4ED8',
          colorInfo: '#2563EB',
          borderRadius: 8,
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
}
