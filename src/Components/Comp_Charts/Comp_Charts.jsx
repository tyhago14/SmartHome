import "./Comp_Charts.css";
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
