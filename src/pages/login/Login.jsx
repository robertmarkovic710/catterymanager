import "./Login.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signin } from "../../api/authApi";

import {
  Button,
  Card,
  ConfigProvider,
  Form,
  Input,
  Typography,
  message,
} from "antd";

import {
  LockOutlined,
  MailOutlined,
  LoginOutlined,
  SafetyCertificateOutlined,
  HeartOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const handleLogin = async (values) => {
    try {
      const data = await signin(values.email, values.password);

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      navigate("/home");
    } catch (error) {
      console.log(error);
      message.error("Email ili lozinka nisu ispravni");
    }
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#9cc7b8",
          borderRadius: 16,
          fontFamily: "Inter, system-ui, sans-serif",
        },
        components: {
          Button: {
            controlHeightLG: 50,
            borderRadius: 16,
            fontWeight: 700,
          },
          Input: {
            controlHeightLG: 50,
            borderRadius: 16,
          },
          Card: {
            borderRadiusLG: 30,
          },
        },
      }}
    >
      <div className="login-page">
        <div className="login-orb login-orb-one"></div>
        <div className="login-orb login-orb-two"></div>
        <div className="login-orb login-orb-three"></div>

        <div className="login-shell">
          <section className="login-hero">
            <div className="login-logo">
              <span className="login-logo-icon">🐾</span>
              <span>CatteryManager</span>
            </div>

            <div className="login-hero-content">
              <p className="login-kicker">Informacijski sustav</p>

              <Title level={1} className="login-hero-title">
                Pametnije vođenje uzgoja mačaka.
              </Title>

              <Text className="login-hero-text">
                Prati mačke, legla, izložbe i važne podatke na jednom mjestu —
                brzo, pregledno i bez papira po ladicama.
              </Text>

              <div className="login-feature-grid">
                <div className="login-feature-card">
                  <DashboardOutlined />
                  <div>
                    <strong>Pregledan dashboard</strong>
                    <span>Brzi ulaz u sve module</span>
                  </div>
                </div>

                <div className="login-feature-card">
                  <HeartOutlined />
                  <div>
                    <strong>Mačke i legla</strong>
                    <span>Podaci uvijek pri ruci</span>
                  </div>
                </div>

                <div className="login-feature-card">
                  <SafetyCertificateOutlined />
                  <div>
                    <strong>Siguran pristup</strong>
                    <span>Prijava korisnika kroz sustav</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="login-panel">
            <Card className="login-card">
              <div className="login-card-header">
                <div className="login-card-badge">
                  <LoginOutlined />
                </div>

                <Title level={2} className="login-card-title">
                  Dobrodošao natrag
                </Title>

                <Text className="login-card-subtitle">
                  Prijavi se za nastavak rada u sustavu.
                </Text>
              </div>

              <Form
                layout="vertical"
                onFinish={handleLogin}
                requiredMark={false}
                className="login-form"
              >
                <Form.Item
                  label="E-mail"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Unesi e-mail",
                    },
                    {
                      type: "email",
                      message: "Unesi ispravan e-mail",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    prefix={<MailOutlined />}
                    placeholder="Unesite e-mail"
                    autoComplete="email"
                  />
                </Form.Item>

                <Form.Item
                  label="Lozinka"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: "Unesi lozinku",
                    },
                  ]}
                >
                  <Input.Password
                    size="large"
                    prefix={<LockOutlined />}
                    placeholder="Unesite lozinku"
                    autoComplete="current-password"
                  />
                </Form.Item>

                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  icon={<LoginOutlined />}
                  className="login-submit-button"
                >
                  Prijavi se
                </Button>

                <div className="login-register-row">
                  <span>Nemaš račun?</span>

                  <button
                    type="button"
                    className="login-register-link"
                    onClick={() => navigate("/register")}
                  >
                    Registriraj se
                  </button>
                </div>
              </Form>
            </Card>
          </section>
        </div>
      </div>
    </ConfigProvider>
  );
}