export default function Card(props) {
  return (
    <div className="flex flex-col items-center sm:hover-none sm:hover:scale-0 md:hover:bg-gray-100/70 md:dark:hover:bg-gray-700/70 hover:transform md:hover:-translate-y-1 md:hover:scale-110 duration-400 transition-all ease-in-out delay-200 rounded-lg py-4">
      <div className="w-12 md:w-14 h-12 md:h-14 flex justify-center items-center text-indigo-500 mb-2 sm:mb-4">
        {props.icon}
      </div>

      <h3 className="text-lg md:text-xl font-semibold text-center mb-2">
        {props.title}
      </h3>
      <p className="text-gray-500 text-center mb-2">{props.description}</p>
    </div>
  );
}
