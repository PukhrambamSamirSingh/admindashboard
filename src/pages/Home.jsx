import BarChartBox from "../components/BarChartBox"
import BigChartBox from "../components/BigChartBox"
import ChartBox from "../components/ChartBox"
import PieChartBox from "../components/PieChartBox"
import TopBox from "../components/TopBox"
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from "../data"

const Home = () => {
    return (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 auto-rows-[minmax(160px,auto)] grid-flow-dense">
            <div className="p-5 rounded-2xl border border-gray-700 row-span-3">
                <TopBox />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <ChartBox {...chartBoxUser} />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <ChartBox {...chartBoxProduct} />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700 row-span-3">
                <PieChartBox />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <ChartBox {...chartBoxRevenue} />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <ChartBox {...chartBoxConversion} />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700 hidden sm:flex col-span-2">
                <BigChartBox />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <BarChartBox {...barChartBoxVisit} />
            </div>
            <div className="p-5 rounded-2xl border border-gray-700">
                <BarChartBox {...barChartBoxRevenue} />
            </div>
        </div>
    )
}

export default Home
