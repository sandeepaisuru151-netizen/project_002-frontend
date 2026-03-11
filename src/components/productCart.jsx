export default function ProductCart(props) {

    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:-translate-y-1">

            <img
                src={props.image}
                alt={props.name}
                className="w-full h-56 object-cover"
            />

            <div className="p-5 space-y-3">

                <h1 className="text-xl font-semibold text-gray-800">
                    {props.name}
                </h1>

                <p className="text-lg font-bold text-green-600">
                    LKR {props.price}
                </p>

                <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                    Buy Now
                </button>

            </div>

        </div>
    );
}