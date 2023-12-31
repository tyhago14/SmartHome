import "./Comp_Charts.css";
import ReactWeather /* , { useWeatherBit }  */ from "react-open-weather";
import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    BarChart,
    Bar,
    ResponsiveContainer,
    Area,
    AreaChart,
    ComposedChart,
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

const data2 = [
    {
        name: "09h",
        Humidade: 80,
        Temperatura: 18,
        Bateria: 90,
    },
    {
        name: "10h",
        Humidade: 85,
        Temperatura: 19,
        Bateria: 87,
    },
    {
        name: "11h",
        Humidade: 93,
        Temperatura: 22,
        Bateria: 83,
    },
    {
        name: "12h",
        Humidade: 76,
        Temperatura: 22,
        Bateria: 79,
    },
    {
        name: "13h",
        Humidade: 50,
        Temperatura: 10,
        Bateria: 75,
    },
];

export const Charts1 = () => {
    return (
        <div className="box-width">
            <div style={{ width: "100%", height: 300 }}>
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

export const Chart2 = (width) => {
    var barSize = 50;
    if (width.value < 800) {
        barSize = 25;
    }
    console.log(width.value, barSize);
    return (
        <div className="box-width">
            <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={data2}
                        margin={{
                            top: 20,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis
                            yAxisId="left"
                            label={{
                                value: "Temperatura Cº",
                                angle: -90,
                                dx: -10,
                            }}
                        />
                        <YAxis
                            yAxisId="right"
                            orientation="right"
                            label={{
                                value: "Humidade %",
                                angle: -90,
                                dx: 10,
                            }}
                        />
                        <Tooltip />
                        <Legend />
                        <Area
                            yAxisId="right"
                            type="monotone"
                            dataKey="Humidade"
                            stackId="1"
                            stroke="#49b6ff"
                            fill="#49b6ff"
                        />
                        <Bar
                            yAxisId="left"
                            dataKey="Temperatura"
                            barSize={barSize}
                            fill="#ff7300"
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export const Chart3 = (width) => {
    var barSize = 50;
    if (width.value < 800) {
        barSize = 25;
    }
    console.log(width.value, barSize);
    return (
        <div className="box-width">
            <div style={{ width: "100%", height: 350 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={data2}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="Bateria"
                            stroke="#8884d8"
                            fill="#98bf45"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};
export const Tempo = () => {
    const customStyles = {
        fontFamily: "sans-serif",
        gradientStart: "#ffffffbb",
        gradientMid: "#ffffffbb",
        gradientEnd: "#ffffffbb",
        locationFontColor: "#2b8750",
        todayTempFontColor: "#2b8750",
        todayDateFontColor: "#219ebc",
        todayRangeFontColor: "#219ebc",
        todayDescFontColor: "#219ebc",
        todayInfoFontColor: "#219ebc",
        todayIconColor: "#f2d377",
        forecastBackgroundColor: "#ffffffbb",
        forecastSeparatorColor: "#ffffffbb",
        forecastDateColor: "#2b8750",
        forecastDescColor: "#2b8750",
        forecastRangeColor: "#2b8750",
        forecastIconColor: "#98bf45",
    };

    const data2 = {
        forecast: [
            {
                date: "Fri 27 November",
                description: "Clear",
                icon: "SVG PATH",
                temperature: { min: "-0", max: "6" },
                wind: "2",
                humidity: 60,
            },
            {
                date: "Sat 28 November",
                description: "Clouds",
                icon: "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
                temperature: { min: "-1", max: "6" },
                wind: "3",
                humidity: 67,
            },
            {
                date: "Sat 29 November",
                description: "Clouds",
                icon: "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
                temperature: { min: "-1", max: "6" },
                wind: "3",
                humidity: 67,
            },
            {
                date: "Sat 30 November",
                description: "Clouds",
                icon: "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
                temperature: { min: "-1", max: "6" },
                wind: "3",
                humidity: 67,
            },
            {
                date: "Sat 31 November",
                description: "Clouds",
                icon: "M0 20.328q0-2.484 1.547-4.414t3.969-2.477q0.641-2.938 2.969-4.805t5.359-1.867q2.953 0 5.273 1.82t3.008 4.664h0.453q2.938 0 5.016 2.070t2.078 5.008-2.078 5.023-5.016 2.086h-15.469q-1.438 0-2.758-0.563t-2.273-1.516-1.516-2.273-0.563-2.758zM2.422 20.328q0 1.906 1.375 3.273t3.313 1.367h15.469q1.938 0 3.313-1.367t1.375-3.273-1.375-3.266-3.313-1.359h-2.313q-0.25 0-0.25-0.25l-0.109-0.813q-0.25-2.359-1.977-3.914t-4.086-1.555-4.102 1.563-1.961 3.906l-0.109 0.703q0 0.25-0.266 0.25l-0.75 0.109q-1.797 0.156-3.016 1.484t-1.219 3.141zM17.172 5.797q-0.25 0.234 0.125 0.344 1.078 0.469 1.797 0.922 0.281 0.078 0.375-0.047 1.516-1.438 3.531-1.438t3.492 1.352 1.648 3.336l0.156 1.063h2.359q1.625 0 2.797 1.164t1.172 2.773q0 1.5-1.031 2.609t-2.547 1.281q-0.25 0-0.25 0.266v1.891q0 0.266 0.25 0.266 2.516-0.156 4.25-1.984t1.734-4.328q0-2.641-1.867-4.508t-4.508-1.867h-0.25q-0.656-2.5-2.742-4.117t-4.664-1.617q-3.531 0-5.828 2.641z",
                temperature: { min: "-1", max: "6" },
                wind: "3",
                humidity: 67,
            },
        ],
        current: {
            date: "Fri 27 November",
            description: "Céu limpo",
            icon: "M0 15.375q0-0.609 0.422-1.031 0.438-0.406 1-0.406h3.406q0.578 0 0.961 0.422t0.383 1.016-0.383 1.008-0.961 0.414h-3.406q-0.578 0-1-0.422t-0.422-1zM4.766 26.922q0-0.578 0.391-1.016l2.453-2.375q0.375-0.391 0.984-0.391 0.594 0 0.992 0.375t0.398 0.953q0 0.609-0.406 1.063l-2.375 2.375q-1.016 0.797-2.047 0-0.391-0.422-0.391-0.984zM4.766 3.844q0-0.578 0.391-1.016 0.484-0.406 1.063-0.406 0.547 0 0.984 0.406l2.375 2.453q0.406 0.375 0.406 0.984 0 0.594-0.398 0.992t-0.992 0.398q-0.609 0-0.984-0.406l-2.453-2.375q-0.391-0.422-0.391-1.031zM9.016 15.375q0-2.328 1.172-4.336t3.18-3.18 4.336-1.172q1.75 0 3.359 0.695t2.773 1.859 1.852 2.773 0.688 3.359q0 2.344-1.164 4.344t-3.164 3.164-4.344 1.164-4.344-1.164-3.172-3.164-1.172-4.344zM11.844 15.375q0 2.438 1.711 4.164t4.148 1.727 4.164-1.727 1.727-4.164q0-2.406-1.727-4.109t-4.164-1.703q-2.422 0-4.141 1.703t-1.719 4.109zM16.281 28.328q0-0.594 0.414-1t1.008-0.406q0.609 0 1.016 0.406t0.406 1v3.313q0 0.609-0.414 1.031t-1.008 0.422-1.008-0.422-0.414-1.031v-3.313zM16.281 2.5v-3.406q0-0.578 0.422-1t1-0.422 1 0.422 0.422 1v3.406q0 0.578-0.414 0.961t-1.008 0.383-1.008-0.383-0.414-0.961zM25.484 24.469q0-0.578 0.375-0.938 0.375-0.391 0.938-0.391 0.609 0 1 0.391l2.438 2.375q0.406 0.438 0.406 1.016t-0.406 0.984q-1 0.781-2 0l-2.375-2.375q-0.375-0.422-0.375-1.063zM25.484 6.266q0-0.625 0.375-0.984l2.375-2.453q0.438-0.406 0.984-0.406 0.594 0 1.008 0.422t0.414 1q0 0.625-0.406 1.031l-2.438 2.375q-0.453 0.406-1 0.406-0.563 0-0.938-0.398t-0.375-0.992zM29.25 15.375q0-0.594 0.406-1.031 0.406-0.406 0.953-0.406h3.375q0.578 0 1.008 0.43t0.43 1.008-0.43 1-1.008 0.422h-3.375q-0.578 0-0.969-0.414t-0.391-1.008z",
            temperature: { current: "27", min: -3, max: 1 },
            wind: "2",
            humidity: 90,
        },
    };
    /*     const { data, isLoading, errorMessage } = useWeatherBit({
        key: "c6f1516f272d4c378b09f5423e73e77e",
        lat: "41.34173074509396",
        lon: "-8.474624878878013",
        lang: "pt",
        unit: "M", // values are (M,S,I)
    });
    console.log(data, isLoading, errorMessage); */
    return (
        <ReactWeather
            theme={customStyles} /* 
            isLoading={isLoading}
            errorMessage={errorMessage} */
            data={data2}
            lang="pt"
            locationLabel="Santo Tirso"
            unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        />
    );
};
