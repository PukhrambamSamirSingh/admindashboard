import { Link } from "react-router-dom"
import { LineChart, Line, ResponsiveContainer, Tooltip } from 'recharts';
import PropTypes from "prop-types"

const ChartBox = (props) => {

    return (
        <div className="w-full flex flex-col gap-5 sm:gap-0 sm:flex-row h-full">
            <div className="w-full sm:w-2/3 flex flex-col gap-2 sm:gap-0 justify-between">
                <div className="flex items-center gap-2">
                    <img className="w-9 h-9 object-contain" src={props.img} alt="" />
                    <span className="text-md font-semibold">{props.title}</span>
                </div>
                <h1 className="text-2xl font-bold">{props.number}</h1>
                <Link to={"/"} style={{ color: props.color }}>
                    View all
                </Link>
            </div>
            <div className="w-full sm:w-1/3 flex flex-col justify-between">
                <div className="w-full h-full">
                    <ResponsiveContainer width="99%" height="100%">
                        <LineChart data={props.chartData}>
                            <Tooltip
                                contentStyle={{ background: "transparent", border: "none" }}
                                labelStyle={{ display: "none" }}
                                position={{ x: 10, y: 50 }}
                            />
                            <Line
                                type="monotone"
                                dataKey={props.dataKey}
                                stroke={props.color}
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="flex flex-col text-right">
                    <span className="font-bold text-xl" style={{ color: props.percentage < 0 ? "tomato" : "limegreen" }}>{props.percentage}%</span>
                    <span className="text-sm">this month</span>
                </div>
            </div>
        </div>
    )
}

export default ChartBox
ChartBox.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    chartData: PropTypes.array.isRequired,
    dataKey: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
};

