import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
    const navigate = useNavigate();

    return (<div className="flex flex-col items-center justify-center p-6 ">
        <img alt="Empty Cart" className=" w-60 h-60  mb-4 rounded-full" src="https://i.guim.co.uk/img/media/fe1e34da640c5c56ed16f76ce6f994fa9343d09d/0_174_3408_2046/master/3408.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=67773a9d419786091c958b2ad08eae5e"  />
        <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold text-gray-800">Technical Error Occured</h2>
            <p className="mt-2 w-2/3 mx-auto text-gray-600 text-center">It looks like we've hit a snag! Please bear with us while we resolve this technical issue. In the meantime, feel free to explore our categories and discover the perfect items that might catch your interest!</p>
            <button
                onClick={() => {
                    // handle order placement
                    navigate("/")
                }}
                type="button"
                aria-label="Place Order"
                className="flex mx-auto mt-4 items-center space-x-2 bg-amber-400 px-4 py-2 rounded-lg shadow-md transition-colors duration-200 hover:bg-yellow-400 hover:scale-105 hover:shadow-xl"
            >
                <h2 className="text-lg font-semibold">Return to HomePage</h2>
            </button>
        </div>
    </div>)
}

export default ErrorPage;