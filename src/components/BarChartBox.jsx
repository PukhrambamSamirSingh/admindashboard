import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts"
import PropTypes from "prop-types"

const BarChartBox = (props) => {

    return (
        <div className="w-full h-full">
            <h1 className="text-xl font-bold mb-5">{props.title}</h1>
            <div className="h-full">
                <ResponsiveContainer width="99%" height={130}>
                    <BarChart data={props.chartData}>
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }}
                        />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox
BarChartBox.propTypes = {
    title: PropTypes.string.isRequired,
    chartData: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}
