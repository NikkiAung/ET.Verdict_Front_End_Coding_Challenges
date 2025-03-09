import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

function CustomersDisplay() {
  const { data } = useContext(AppContext);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Customer Posts</h1>
      
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.isArray(data) && data.length > 0 ? (
            data.map((item) => (
                <div key={item.id} className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h2>
                <p className="text-gray-600 text-sm">{item.body}</p>
                </div>
            ))
            ) : (
            <p className="text-gray-500 text-center">No data available</p>
        )}
      </div>
    </div>
  );
}

export default CustomersDisplay;
