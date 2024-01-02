const DailyEntry = () => {
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
        <tbody>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Anul Mehta
            </th>
            <td className="px-6 py-4">HairCut</td>
            <td className="px-6 py-4">Quick</td>
            <td className="px-6 py-4">9782063740</td>
            <td className="px-6 py-4">anul@gmail.com</td>
            <td className="px-6 py-4">04-01-2024</td>
            <td className="px-6 py-4">04:30 pm</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DailyEntry;
