import "./Register.css";

import { useNavigate } from "react-router-dom";
import { signup } from "../../api/authApi";

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
    UserOutlined,
    MailOutlined,
    LockOutlined,
    LoginOutlined,
    UserAddOutlined,
    EnvironmentOutlined,
    GlobalOutlined,
    SafetyCertificateOutlined,
    HeartOutlined,
    DashboardOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Register() {
    const navigate = useNavigate();

    const handleRegister = async (values) => {
        try {
            await signup(
                values.firstName,
                values.lastName,
                values.email,
                values.password,
                Number(values.countryCode),
                Number(values.cityMunicipalityCode)
            );

            message.success("Registracija uspješna. Sada se možeš prijaviti.");
            navigate("/login");
        } catch (error) {
            console.log(error);
            message.error(error.message || "Registracija nije uspjela");
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
            <div className="register-page">
                <div className="register-orb register-orb-one"></div>
                <div className="register-orb register-orb-two"></div>
                <div className="register-orb register-orb-three"></div>

                <div className="register-shell">
                    <section className="register-hero">
                        <div className="register-logo">
                            <span className="register-logo-icon">🐾</span>
                            <span>CatteryManager</span>
                        </div>

                        <div className="register-hero-content">
                            <p className="register-kicker">Novi korisnički račun</p>

                            <Title level={1} className="register-hero-title">
                                Pokreni svoj uzgojni sustav.
                            </Title>

                            <Text className="register-hero-text">
                                Kreiraj račun i vodi mačke, legla, izložbe i korisničke podatke
                                kroz jedan moderan i pregledan sustav.
                            </Text>

                            <div className="register-feature-grid">
                                <div className="register-feature-card">
                                    <UserAddOutlined />
                                    <div>
                                        <strong>Brza registracija</strong>
                                        <span>Unos osnovnih korisničkih podataka</span>
                                    </div>
                                </div>

                                <div className="register-feature-card">
                                    <DashboardOutlined />
                                    <div>
                                        <strong>Jedan dashboard</strong>
                                        <span>Svi moduli na jednom mjestu</span>
                                    </div>
                                </div>

                                <div className="register-feature-card">
                                    <SafetyCertificateOutlined />
                                    <div>
                                        <strong>Siguran pristup</strong>
                                        <span>Zaštićena prijava korisnika</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="register-panel">
                        <Card className="register-card">
                            <div className="register-card-header">
                                <div className="register-card-badge">
                                    <HeartOutlined />
                                </div>

                                <Title level={2} className="register-card-title">
                                    Registriraj se
                                </Title>

                                <Text className="register-card-subtitle">
                                    Unesi podatke za izradu korisničkog računa.
                                </Text>
                            </div>

                            <Form
                                layout="vertical"
                                onFinish={handleRegister}
                                requiredMark={false}
                                className="register-form"
                            >
                                <div className="register-form-row">
                                    <Form.Item
                                        label="Ime"
                                        name="firstName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Unesi ime",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            prefix={<UserOutlined />}
                                            placeholder="Ime"
                                            autoComplete="given-name"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="Prezime"
                                        name="lastName"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Unesi prezime",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            prefix={<UserOutlined />}
                                            placeholder="Prezime"
                                            autoComplete="family-name"
                                        />
                                    </Form.Item>
                                </div>

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

                                <div className="register-form-row">
                                    <Form.Item
                                        label="Country code"
                                        name="countryCode"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Unesi country code",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            type="number"
                                            prefix={<GlobalOutlined />}
                                            placeholder="Country"
                                        />
                                    </Form.Item>

                                    <Form.Item
                                        label="City code"
                                        name="cityMunicipalityCode"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Unesi city code",
                                            },
                                        ]}
                                    >
                                        <Input
                                            size="large"
                                            type="number"
                                            prefix={<EnvironmentOutlined />}
                                            placeholder="City"
                                        />
                                    </Form.Item>
                                </div>

                                <Form.Item
                                    label="Lozinka"
                                    name="password"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Unesi lozinku",
                                        },
                                        {
                                            min: 6,
                                            message: "Lozinka mora imati barem 6 znakova",
                                        },
                                    ]}
                                >
                                    <Input.Password
                                        size="large"
                                        prefix={<LockOutlined />}
                                        placeholder="Unesite lozinku"
                                        autoComplete="new-password"
                                    />
                                </Form.Item>

                                <Form.Item
                                    label="Ponovi lozinku"
                                    name="repeatPassword"
                                    dependencies={["password"]}
                                    rules={[
                                        {
                                            required: true,
                                            message: "Ponovi lozinku",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue("password") === value) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(
                                                    new Error("Lozinke se ne podudaraju")
                                                );
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password
                                        size="large"
                                        prefix={<LockOutlined />}
                                        placeholder="Ponovite lozinku"
                                        autoComplete="new-password"
                                    />
                                </Form.Item>

                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    size="large"
                                    block
                                    icon={<UserAddOutlined />}
                                    className="register-submit-button"
                                >
                                    Napravi račun
                                </Button>

                                <div className="register-login-row">
                                    <span>Imaš već račun?</span>

                                    <button
                                        type="button"
                                        className="register-login-link"
                                        onClick={() => navigate("/login")}
                                    >
                                        Prijavi se
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