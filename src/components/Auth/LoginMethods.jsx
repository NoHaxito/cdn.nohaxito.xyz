export default function LoginMethods(props){
    return (
      <a
        href={props.href}
        className="flex items-center justify-center mt-2 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600"
      >
        <div className="px-4 py-2">
          {props.icon}
        </div>

        <span className="w-5/6 px-4 py-3 font-bold text-center">
          Sign in with {props.name}
        </span>
      </a>
    );
}