import moment from "moment/moment";
const BookedData = (booking) => {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              SERVICES
            </th>
            <th scope="col" className="px-6 py-3">
              NOTES
            </th>
            <th scope="col" className="px-6 py-3">
              MOBILE
            </th>
            <th scope="col" className="px-6 py-3">
              EMAIL
            </th>
            <th scope="col" className="px-6 py-3">
              Date
            </th>
            <th scope="col" className="px-6 py-3">
              Time
            </th>
          </tr>
        </thead>

        {booking?.data?.map((item, index) => {
          return (
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  key={index}
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item?.fullName}
                </th>
                <td className="px-6 py-4">{item?.services}</td>
                <td className="px-6 py-4">{item?.notes}</td>
                <td className="px-6 py-4">{item?.mobile}</td>
                <td className="px-6 py-4">{item?.email}</td>
                <td className="px-6 py-4">
                  {moment?.utc(item?.appointDate)?.format("DD-MM-YYYY")}
                </td>
                <td className="px-6 py-4">{item?.appointTime}</td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default BookedData;
