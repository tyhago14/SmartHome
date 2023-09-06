import "./Comp_Charts.css";
import ReactWeather /* useWeatherBit */ from "react-open-weather";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    ResponsiveContainer,
} from "recharts";

const data = [
    {
        name: "09h",
        Avisos: 300,
        Normal: 139,
        Sucesso: 221,
    },
    {
        name: "10h",
        Avisos: 200,
        Normal: 980,
        Sucesso: 229,
    },
    {
        name: "11h",
        Avisos: 278,
        Normal: 398,
        Sucesso: 200,
    },
    {
        name: "12h",
        Avisos: 189,
        Normal: 480,
        Sucesso: 211,
    },
    {
        name: "13h",
        Avisos: 239,
        Normal: 380,
        Sucesso: 250,
    },
];

export const Charts1 = () => {
    return (
        <div className="box-width">
            <div style={{ width: "100%", height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Normal" stackId="a" fill="#49b6ff" />
                        <Bar dataKey="Sucesso" stackId="a" fill="#7bb662" />
                        <Bar dataKey="Avisos" fill="#ffc658" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const Tempo = () => {
    const customStyles = {
        fontFamily: "Helvetica, sans-serif",
        gradientStart: "#0181C2",
        gradientMid: "#04A7F9",
        gradientEnd: "#fff",
        locationFontColor: "#FFF",
        todayTempFontColor: "#FFF",
        todayDateFontColor: "#B5DEF4",
        todayRangeFontColor: "#B5DEF4",
        todayDescFontColor: "#B5DEF4",
        todayInfoFontColor: "#B5DEF4",
        todayIconColor: "#FFF",
        forecastBackgroundColor: "#FFF",
        forecastSeparatorColor: "#DDD",
        forecastDateColor: "#777",
        forecastDescColor: "#777",
        forecastRangeColor: "#777",
        forecastIconColor: "#4BC4F7",
    };

    const data = {
        current: {
            date: "Fri 27 November",
            description: "Clear",
            icon: "SVG PATH",
            temperature: { current: "19", min: 15, max: 23 },
            wind: "2",
            humidity: 90,
        },
    };
    /*     const { data, isLoading, errorMessage } = useWeatherBit({
        key: "c6f1516f272d4c378b09f5423e73e77e",
        lat: "48.137154",
        lon: "11.576124",
        lang: "pt",
        unit: "M", // values are (M,S,I)
    }); */
    return (
        <ReactWeather
            theme={customStyles}
            /*             isLoading={isLoading}
            errorMessage={errorMessage} */
            data={data}
            lang="pt"
            locationLabel="Munich"
            unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
            showForecast={false}
        />
    );
};
