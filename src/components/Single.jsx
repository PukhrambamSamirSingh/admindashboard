import { Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import PropTypes from "prop-types"

const Single = (props) => {

    return (
        <div className="w-full flex flex-col gap-12 lg:flex-row">
            <div className="w-full lg:w-1/2">
                <div className="">
                    <div className="flex items-center gap-5">
                        {props.img && <img className="w-16 h-16 sm:w-32 sm:h-32 rounded-full object-cover" src={props.img} alt="" />}
                        <h1 className="text-xl font-semibold">{props.title}</h1>
                        <button className="border border-gray-600 rounded-md px-4 py-2">Update</button>
                    </div>
                    <div className="text-lg">
                        {Object.entries(props.info).map(item => (
                            <div className="mt-7 mb-7 flex gap-2" key={item[0]}>
                                <span className="font-semibold">{item[0]}:</span>
                                <span>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <hr className="hidden sm:flex w-[90%] h-0 border-spacing-0.5 border-gray-500" />
                <div className="hidden sm:flex mt-12 w-[90%] h-80">
                    {props.chart && <ResponsiveContainer width="99%" height="100%">
                        <LineChart
                            width={500}
                            height={300}
                            data={props.chart.data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            {props.chart.dataKeys.map((dataKey) => (
                                <Line key={dataKey.name} type="monotone" dataKey={dataKey.name} stroke={dataKey.color} />
                            ))}
                        </LineChart>
                    </ResponsiveContainer>}
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="mb-5 text-xl font-bold">Latest Activities</h2>
                {props.activities && <ul className="w-full">
                    {props.activities.map((activity) => (
                        <li key={activity.text} className="relative w-0.5 pt-10 bg-red-500 list">
                            <div className="w-64 sm:min-w-[400px] p-4 bg-gray-900/10">
                                <p className="mb-1">{activity.text}</p>
                                <span className="text-sm">{activity.time}</span>
                            </div>
                        </li>))}
                </ul>}
            </div>
        </div>
    )
}

export default Single
Single.propTypes = {
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    info: PropTypes.object.isRequired,
    chart: PropTypes.shape({
        dataKeys: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string.isRequired,
                color: PropTypes.string.isRequired,
            })
        ).isRequired,
        data: PropTypes.array.isRequired,
    }),
    activities: PropTypes.arrayOf(
        PropTypes.shape({
            time: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })
    ),
};
// Single.propTypes = {
//     id: PropTypes.number.isRequired,
//     img: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     info: PropTypes.object.isRequired,
//     chart: {
//         dataKeys: {
//             name: PropTypes.string.isRequired,
//             color: PropTypes.string.isRequired
//         }[],
//         data: PropTypes.array.isRequired
//     },
//     activities:{
//         time:PropTypes.string.isRequired,
//         text:PropTypes.string.isRequired
//     }
// }