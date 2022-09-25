export default function HeaderLink(props) {
  return (
    <a
      href={props.href}
      className="transform hover:scale-110 flex py-2 pr-4 pl-3 text-gray-700 rounded  md:border-0 md:p-0 dark:text-white dark:hover:text-gray-400"
    >
      {props.icon}
      {props.title}
    </a>
  );
}
