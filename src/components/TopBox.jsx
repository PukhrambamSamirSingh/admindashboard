import { topDealUsers } from "../data"

const TopBox = () => {
    return (
        <div>
            <h1 className="mb-5 font-bold text-2xl">Top Deals</h1>
            <div className="">
                {topDealUsers.map((user) => (
                    <div className="flex items-center justify-between mb-7" key={user.id}>
                        <div className="flex items-center gap-5">
                            <img className="w-10 h-10 rounded-full object-cover" src={user.img} alt="" />
                            <div className="flex flex-col">
                                <span className="text-sm font-semibold">{user.username}</span>
                                <span className="text-xs">{user.email}</span>
                            </div>
                        </div>
                        <span className="font-semibold">${user.amount}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default TopBox
