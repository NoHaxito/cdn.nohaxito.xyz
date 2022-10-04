import { FaTimes } from "react-icons/fa/index.js";

export default function AlertCard(props) {
  return (
    <div className="flex p-4 mb-4 bg-red-100 rounded-lg dark:bg-red-200">
      <div className="ml-3 text-sm font-medium text-red-700">{props.error}</div>
      <button
        type="button"
        onClick={props.dismiss}
        className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
      >
        <FaTimes className="w-5 h-5" />
      </button>
    </div>
  );
}
