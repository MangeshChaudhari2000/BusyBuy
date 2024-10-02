import { useEffect, useState } from "react";
import { useBusyBuy } from "../BusyContext";
import OrderBox from "../Component/OrderBox";
import { useNavigate } from "react-router-dom";
const MyOrder = () => {
    const value = useBusyBuy();
    console.log(value.myOrder);
    const navigate = useNavigate();

    useEffect(() => {
        value.getMyOrder();
    }, [value.myOrder])

    return (<>
        <p className="text-center m-4 text-2xl font-bold text-cyan-900">Your Orders</p>
        <div className="mb-8">
            {value.myOrder.length > 0 ?
                <div>
                    {value.myOrder.map((data) => <OrderBox key={data.Created_ts} orderDetails={data} />)}
                </div>
                : <div className="flex flex-col items-center justify-center p-6 ">
                    <img src="https://cdn-icons-png.flaticon.com/128/13543/13543366.png" alt="Empty Cart" className="-rotate-12 w-60 p-8 mb-4 bg-gray-200 rounded-full" />
                    <div className="text-center mt-8">
                        <h2 className="text-2xl font-semibold text-gray-800">You haven't Placed any Order Yet</h2>
                        <p className="mt-2 text-gray-600 text-center">It seems like your order is still in the wings! Browse our categories to discover the perfect items to complete your purchase!</p>
                        <button
                            onClick={() => {
                                // handle order placement
                                navigate("/MyCart")
                            }}
                            type="button"
                            aria-label="Place Order"
                            className="flex mx-auto mt-4 items-center space-x-2 bg-amber-400 px-4 py-2 rounded-lg shadow-md transition-colors duration-200 hover:bg-yellow-400 hover:scale-105 hover:shadow-xl"
                        >
                            <h2 className="text-lg font-semibold">Return to Your Carts</h2>
                        </button>
                    </div>
                </div>}
        </div>
    </>)
}

export default MyOrder;