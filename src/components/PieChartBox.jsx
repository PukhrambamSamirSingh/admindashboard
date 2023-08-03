import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"

const PieChartBox = () => {
    const data = [
        { name: "Mobile", value: 400, color: "#0088FE" },
        { name: "Desktop", value: 300, color: "#00C49F" },
        { name: "Laptop", value: 300, color: "#FFBB28" },
        { name: "Tablet", value: 200, color: "#FF8042" }
    ]
    return (
        <div className="w-full h-full flex flex-col justify-between">
            <h1 className="text-2xl font-bold">Leads by Source</h1>
            <div className="w-full h-full flex items-center justify-center">
                <ResponsiveContainer width="99%" height={300}>
                    <PieChart>
                        <Tooltip
                            contentStyle={{ background: "white", borderRadius: "5px" }}
                        />
                        <Pie
                            data={data}
                            innerRadius={"70%"}
                            outerRadius={"90%"}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((item) => (
                                <Cell key={item.name} fill={item.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-between gap-2 text-sm">
                {data.map((item) => (
                    <div key={item.name} className="flex flex-col gap-2 items-center">
                        <div className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                            <span>{item.name}</span>
                        </div>
                        <span>{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PieChartBox
