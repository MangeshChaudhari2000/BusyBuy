const OrderBox = ({ orderDetails }) => {
  console.log(orderDetails);

  return (
    <div className="mt-8 shadow-xl w-fit mx-auto p-4 rounded-lg hover:shadow-2xl transition-transform transform hover:scale-105">
      <h3 className="text-center text-xl antialiased font-semibold text-cyan-800 m-2">
        Order Placed on: {orderDetails.Created_ts}
      </h3>
      <table className="w-2/3 mx-auto border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-200 px-4 py-2 text-left">
              Product
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Price
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Quantity
            </th>
            <th className="border border-gray-200 px-4 py-2 text-left">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {orderDetails.Order.map((d, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="border border-gray-200 px-4 py-2 flex items-center">
                <img
                  className="w-10 h-10 m-2"
                  src={d.ProductUrl}
                  alt={d.Title}
                />
                <span>{d.Title}</span>
              </td>

              <td className="border border-gray-200 px-4 py-2">
                ${d.Price.toFixed(2)}
              </td>
              <td className="border border-gray-200 px-4 py-2">{d.Qty}</td>
              <td className="border border-gray-200 px-4 py-2">
                ${(d.Price * d.Qty).toFixed(2)}
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td
              colSpan="3"
              className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-800"
            >
              Total Price
            </td>
            <td className="border border-gray-300 px-6 py-4 text-sm font-bold text-gray-800">
              $
              {orderDetails.Order.reduce(
                (acc, item) => acc + item.Price * item.Qty,
                0
              ).toFixed(2)}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderBox;
