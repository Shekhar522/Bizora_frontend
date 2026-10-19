import {
  Card,
  Col,
  Row,
  Tag,
  Typography,
  Space,
  Divider,
} from 'antd';
import {
  TeamOutlined,
  FileTextOutlined,
  WalletOutlined,
  BarChartOutlined,
  SafetyCertificateOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

const features = [
  {
    icon: <TeamOutlined />,
    title: 'Customer Management',
    description:
      'Keep customer information organized and make business relationships easier to manage.',
  },
  {
    icon: <FileTextOutlined />,
    title: 'Smart Invoicing',
    description:
      'Create and manage invoices with a clear view of billing and payment status.',
  },
  {
    icon: <WalletOutlined />,
    title: 'Payment Tracking',
    description:
      'Track payments and keep your financial records organized in one workspace.',
  },
  {
    icon: <BarChartOutlined />,
    title: 'Business Overview',
    description:
      'Access important business information and understand your day-to-day operations.',
  },
];

const principles = [
  {
    icon: <ThunderboltOutlined />,
    title: 'Simplicity',
    description: 'Make everyday business tasks easier to manage.',
  },
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Clarity',
    description: 'Keep important business information organized and accessible.',
  },
  {
    icon: <RocketOutlined />,
    title: 'Growth',
    description: 'Build a more structured foundation for your business.',
  },
];

export default function About() {
  return (
    <div
      style={{
        maxWidth: 1180,
        margin: '0 auto',
        padding: '24px 20px 40px',
        color: '#172554',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 12,
          marginBottom: 24,
        }}
      >
        <div>
          <Text
            style={{
              color: '#2563eb',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: 2,
            }}
          >
            DISCOVER BIZORA
          </Text>
          <Title
            level={2}
            style={{ margin: '6px 0 0', color: '#172554' }}
          >
            About Us
          </Title>
        </div>
        <Tag
          color="blue"
          style={{ padding: '5px 12px', borderRadius: 20, margin: 0 }}
        >
          Business Management Platform
        </Tag>
      </div>

      <Card
        bordered={false}
        style={{
          borderRadius: 20,
          overflow: 'hidden',
          background: 'linear-gradient(120deg, #101f49 0%, #1749a4 65%, #2563eb 100%)',
          marginBottom: 28,
        }}
        styles={{ body: { padding: 0 } }}
      >
        <Row align="middle" gutter={[24, 24]}>
          <Col xs={24} md={15}>
            <div style={{ padding: '36px 30px' }}>
              <Tag
                style={{
                  color: '#dbeafe',
                  background: 'rgba(255,255,255,0.12)',
                  borderColor: 'rgba(255,255,255,0.25)',
                  borderRadius: 20,
                  padding: '4px 12px',
                  marginBottom: 16,
                }}
              >
                YOUR BUSINESS, ONE WORKSPACE
              </Tag>
              <Title
                level={1}
                style={{
                  color: '#ffffff',
                  fontSize: 'clamp(30px, 4vw, 44px)',
                  lineHeight: 1.2,
                  margin: '0 0 18px',
                }}
              >
                Manage smarter.
                <br />
                Grow with confidence.
              </Title>
              <Paragraph
                style={{
                  color: '#dbeafe',
                  fontSize: 16,
                  lineHeight: 1.9,
                  maxWidth: 540,
                  marginBottom: 22,
                }}
              >
                Bizora brings essential business management tools together
                to help you organize customers, handle invoices, track
                payments and manage everyday operations.
              </Paragraph>
              <Space wrap size={[8, 10]}>
                {['Organized', 'Practical', 'Business-focused'].map((item) => (
                  <span
                    key={item}
                    style={{
                      color: '#ffffff',
                      border: '1px solid rgba(255,255,255,0.3)',
                      borderRadius: 8,
                      padding: '7px 11px',
                      fontSize: 12,
                    }}
                  >
                    <CheckCircleOutlined style={{ marginRight: 7 }} />
                    {item}
                  </span>
                ))}
              </Space>
            </div>
          </Col>

          <Col xs={24} md={9}>
            <div
              style={{
                minHeight: 230,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
              }}
            >
              <div
                style={{
                  width: 190,
                  height: 190,
                  borderRadius: 36,
                  background: 'rgba(255,255,255,0.1)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transform: 'rotate(-5deg)',
                  boxShadow: '0 20px 50px rgba(0,0,0,0.12)',
                }}
              >
                <div
                  style={{
                    width: 145,
                    height: 145,
                    borderRadius: 28,
                    background: '#ffffff',
                    color: '#1749a4',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'rotate(5deg)',
                  }}
                >
                  <div style={{ fontSize: 48, fontWeight: 800, lineHeight: 1 }}>
                    B.
                  </div>
                  <Text
                    style={{
                      fontSize: 10,
                      letterSpacing: 3,
                      color: '#64748b',
                      marginTop: 9,
                    }}
                  >
                    BIZORA
                  </Text>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Card>

      <div style={{ marginBottom: 28 }}>
        <Title level={3} style={{ color: '#172554', marginBottom: 6 }}>
          Everything starts with better organization
        </Title>
        <Paragraph style={{ color: '#64748b', maxWidth: 720, fontSize: 15 }}>
          A unified workspace helps you spend less time switching between
          tasks and more time focusing on your business.
        </Paragraph>

        <Row gutter={[18, 18]} style={{ marginTop: 20 }}>
          {features.map((feature) => (
            <Col xs={24} sm={12} lg={6} key={feature.title}>
              <Card
                bordered
                style={{
                  height: '100%',
                  borderRadius: 14,
                  borderColor: '#e5eaf3',
                }}
                styles={{ body: { padding: 22 } }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 12,
                    background: '#eff6ff',
                    color: '#2563eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 22,
                    marginBottom: 18,
                  }}
                >
                  {feature.icon}
                </div>
                <Title
                  level={5}
                  style={{ color: '#172554', marginBottom: 9 }}
                >
                  {feature.title}
                </Title>
                <Text style={{ color: '#64748b', lineHeight: 1.8 }}>
                  {feature.description}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <Card
        bordered
        style={{
          borderRadius: 16,
          borderColor: '#e5eaf3',
          background: '#f8faff',
        }}
        styles={{ body: { padding: 26 } }}
      >
        <Row gutter={[24, 24]} align="middle">
          <Col xs={24} md={8}>
            <Text
              style={{
                color: '#2563eb',
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: 1.5,
              }}
            >
              WHAT GUIDES US
            </Text>
            <Title
              level={3}
              style={{ color: '#172554', margin: '10px 0' }}
            >
              Our approach
            </Title>
            <Paragraph style={{ color: '#64748b', marginBottom: 0 }}>
              Useful tools, clear workflows and a better organized
              business experience.
            </Paragraph>
          </Col>
          <Col xs={24} md={16}>
            <Row gutter={[18, 18]}>
              {principles.map((principle) => (
                <Col xs={24} sm={8} key={principle.title}>
                  <div style={{ color: '#2563eb', fontSize: 24 }}>
                    {principle.icon}
                  </div>
                  <Title
                    level={5}
                    style={{ color: '#172554', margin: '10px 0 6px' }}
                  >
                    {principle.title}
                  </Title>
                  <Text style={{ color: '#64748b', lineHeight: 1.8 }}>
                    {principle.description}
                  </Text>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Card>

      <Divider style={{ margin: '28px 0 18px', borderColor: '#e5eaf3' }} />

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: 10,
        }}
      >
        <Space size={8}>
          <div
            style={{
              background: '#2563eb',
              color: '#ffffff',
              borderRadius: 7,
              padding: '4px 7px',
              fontWeight: 800,
            }}
          >
            B.
          </div>
          <Text strong style={{ color: '#172554' }}>
            Bizora
          </Text>
          <Text style={{ color: '#94a3b8' }}>·</Text>
          <Text style={{ color: '#64748b' }}>
            Business Management
          </Text>
        </Space>
        <Text style={{ color: '#94a3b8', fontSize: 12 }}>
          © {new Date().getFullYear()} Bizora
        </Text>
      </div>
    </div>
  );
}
