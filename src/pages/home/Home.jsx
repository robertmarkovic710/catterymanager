import "./Home.css";

import { useNavigate } from "react-router-dom";

import {
    Button,
    Card,
    ConfigProvider,
    Progress,
    Typography,
} from "antd";

import {
    PlusOutlined,
    HeartOutlined,
    TrophyOutlined,
    DashboardOutlined,
    RightOutlined,
    ApartmentOutlined,
    CalendarOutlined,
    MedicineBoxOutlined,
    TeamOutlined,
    WarningOutlined,
    CheckCircleOutlined,
    BellOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

function Home({ cats = [], litters = [], exhibitions = [] }) {
    const navigate = useNavigate();

    const totalCats = cats.length;
    const totalLitters = litters.length;
    const totalExhibitions = exhibitions.length;

    const femaleCats = cats.filter((cat) => cat.gender === "Ženka").length;
    const maleCats = cats.filter((cat) => cat.gender === "Mužjak").length;

    const dashboardCards = [
        {
            title: "Dodaj leglo",
            text: "Unesi novo leglo i evidentiraj podatke o okotu.",
            path: "/addLitter",
            icon: <HeartOutlined />,
            label: "Legla",
        },
        {
            title: "Dodaj uzgojnu mačku",
            text: "Dodaj novu mačku u evidenciju uzgoja.",
            path: "/addCat",
            icon: <ApartmentOutlined />,
            label: "Mačke",
        },
        {
            title: "Dodaj novu izložbu",
            text: "Unesi izložbu i pripremi podatke za prijavu.",
            path: "/addExhibition",
            icon: <TrophyOutlined />,
            label: "Izložbe",
        },
    ];

    const statistics = [
        {
            label: "Ukupno mačaka",
            value: totalCats,
            icon: <TeamOutlined />,
        },
        {
            label: "Legla",
            value: totalLitters,
            icon: <HeartOutlined />,
        },
        {
            label: "Izložbe",
            value: totalExhibitions,
            icon: <TrophyOutlined />,
        },
        {
            label: "Ženke / Mužjaci",
            value: `${femaleCats} / ${maleCats}`,
            icon: <ApartmentOutlined />,
        },
    ];

    const upcomingTasks = [
        {
            title: "Pregled nadolazećih izložbi",
            date: "Ovaj tjedan",
            description: "Provjeri prijave i pripremi dokumentaciju.",
            status: "Planirano",
        },
        {
            title: "Ažuriranje podataka o leglima",
            date: "Uskoro",
            description: "Dopuni informacije o mačićima i roditeljima.",
            status: "Na čekanju",
        },
        {
            title: "Provjera evidencije mačaka",
            date: "Mjesečno",
            description: "Pregledaj jesu li svi osnovni podaci uneseni.",
            status: "Rutina",
        },
    ];

    const healthReminders = [
        {
            title: "Cijepljenja",
            description: "Provjeri termine za redovna cijepljenja.",
            priority: "Važno",
            icon: <MedicineBoxOutlined />,
        },
        {
            title: "Veterinarski pregledi",
            description: "Dodaj podsjetnik za sljedeći pregled.",
            priority: "Podsjetnik",
            icon: <BellOutlined />,
        },
        {
            title: "Zdravstvene napomene",
            description: "Pregledaj bilješke kod legla i mačaka.",
            priority: "Provjera",
            icon: <WarningOutlined />,
        },
    ];

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
                        controlHeightLG: 48,
                        borderRadius: 16,
                        fontWeight: 700,
                    },
                    Card: {
                        borderRadiusLG: 26,
                    },
                    Progress: {
                        defaultColor: "#9cc7b8",
                    },
                },
            }}
        >
            <div className="home-page">
                <div className="home-orb home-orb-one"></div>
                <div className="home-orb home-orb-two"></div>
                <div className="home-orb home-orb-three"></div>

                <main className="home-shell">
                    <section className="home-hero">
                        <div className="home-badge">
                            <DashboardOutlined />
                            <span>Upravljačka ploča</span>
                        </div>

                        <div className="home-hero-content">
                            <p className="home-kicker">CatteryManager</p>

                            <Title level={1} className="home-title">
                                Dobrodošao u sustav za vođenje uzgoja.
                            </Title>

                            <Text className="home-subtitle">
                                Prati stanje uzgajivačnice, dodaj nova legla, vodi evidenciju
                                mačaka i ne propusti važne obaveze.
                            </Text>

                            <div className="home-actions">
                                <Button
                                    type="primary"
                                    size="large"
                                    icon={<PlusOutlined />}
                                    onClick={() => navigate("/addCat")}
                                    className="home-primary-button"
                                >
                                    Dodaj mačku
                                </Button>

                                <Button
                                    size="large"
                                    onClick={() => navigate("/cats")}
                                    className="home-secondary-button"
                                >
                                    Pregled mačaka
                                </Button>
                            </div>
                        </div>

                        <div className="home-hero-summary">
                            <div>
                                <span className="home-hero-summary-number">{totalCats}</span>
                                <span className="home-hero-summary-label">Mačke</span>
                            </div>

                            <div>
                                <span className="home-hero-summary-number">{totalLitters}</span>
                                <span className="home-hero-summary-label">Legla</span>
                            </div>

                            <div>
                                <span className="home-hero-summary-number">
                                    {totalExhibitions}
                                </span>
                                <span className="home-hero-summary-label">Izložbe</span>
                            </div>
                        </div>
                    </section>

                    <section className="home-dashboard">
                        <div className="home-dashboard-header">
                            <div>
                                <p className="home-dashboard-kicker">Pregled sustava</p>

                                <Title level={2} className="home-dashboard-title">
                                    Uzgajivačnica danas
                                </Title>
                            </div>

                            <Text className="home-dashboard-text">
                                Kratki pregled statistike, obaveza i zdravstvenih podsjetnika.
                            </Text>
                        </div>

                        <div className="home-dashboard-scroll">
                            <section className="home-section">
                                <div className="home-section-header">
                                    <div>
                                        <p className="home-section-kicker">Statistika</p>
                                        <Title level={3} className="home-section-title">
                                            Statistika uzgajivačnice
                                        </Title>
                                    </div>
                                </div>

                                <div className="home-stat-grid">
                                    {statistics.map((item) => (
                                        <Card key={item.label} className="home-stat-card">
                                            <div className="home-stat-icon">{item.icon}</div>

                                            <div>
                                                <p className="home-stat-value">{item.value}</p>
                                                <p className="home-stat-label">{item.label}</p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>

                                <Card className="home-progress-card">
                                    <div className="home-progress-content">
                                        <div>
                                            <p className="home-progress-title">
                                                Popunjenost evidencije
                                            </p>
                                            <p className="home-progress-text">
                                                Procjena na temelju unesenih mačaka, legla i izložbi.
                                            </p>
                                        </div>

                                        <Progress
                                            type="circle"
                                            percent={
                                                totalCats || totalLitters || totalExhibitions ? 72 : 0
                                            }
                                            size={86}
                                        />
                                    </div>
                                </Card>
                            </section>

                            <section className="home-section">
                                <div className="home-section-header">
                                    <div>
                                        <p className="home-section-kicker">Obaveze</p>
                                        <Title level={3} className="home-section-title">
                                            Nadolazeće obaveze
                                        </Title>
                                    </div>

                                    <CalendarOutlined className="home-section-icon" />
                                </div>

                                <div className="home-task-list">
                                    {upcomingTasks.map((task) => (
                                        <div key={task.title} className="home-task-item">
                                            <div className="home-task-dot">
                                                <CheckCircleOutlined />
                                            </div>

                                            <div className="home-task-content">
                                                <div className="home-task-top">
                                                    <h4>{task.title}</h4>
                                                    <span>{task.date}</span>
                                                </div>

                                                <p>{task.description}</p>

                                                <small>{task.status}</small>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section className="home-section">
                                <div className="home-section-header">
                                    <div>
                                        <p className="home-section-kicker">Zdravlje</p>
                                        <Title level={3} className="home-section-title">
                                            Zdravstveni podsjetnici
                                        </Title>
                                    </div>

                                    <MedicineBoxOutlined className="home-section-icon" />
                                </div>

                                <div className="home-health-grid">
                                    {healthReminders.map((reminder) => (
                                        <Card key={reminder.title} className="home-health-card">
                                            <div className="home-health-icon">
                                                {reminder.icon}
                                            </div>

                                            <div className="home-health-content">
                                                <div className="home-health-top">
                                                    <h4>{reminder.title}</h4>
                                                    <span>{reminder.priority}</span>
                                                </div>

                                                <p>{reminder.description}</p>
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>

                            <section className="home-section">
                                <div className="home-section-header">
                                    <div>
                                        <p className="home-section-kicker">Akcije</p>
                                        <Title level={3} className="home-section-title">
                                            Brze akcije
                                        </Title>
                                    </div>
                                </div>

                                <div className="home-cards">
                                    {dashboardCards.map((card) => (
                                        <Card
                                            key={card.path}
                                            hoverable
                                            className="home-card"
                                            onClick={() => navigate(card.path)}
                                        >
                                            <div className="home-card-top">
                                                <div className="home-card-icon">{card.icon}</div>

                                                <span className="home-card-label">{card.label}</span>
                                            </div>

                                            <div className="home-card-content">
                                                <Title level={3} className="home-card-title">
                                                    {card.title}
                                                </Title>

                                                <Text className="home-card-text">{card.text}</Text>
                                            </div>

                                            <div className="home-card-footer">
                                                <span>Nastavi</span>
                                                <RightOutlined />
                                            </div>
                                        </Card>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
            </div>
        </ConfigProvider>
    );
}

export default Home;