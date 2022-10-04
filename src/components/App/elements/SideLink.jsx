export default function SideLink(props) {
  return (
    <li>
      <a
        href={props.href}
        className="text-base text-gray-900 dark:text-white font-normal rounded-lg flex items-center p-2 hover:bg-gray-100 dark:hover:bg-slate-700/70 group"
      >
        {props.icon}
        <span className="ml-3">{props.name}</span>
      </a>
    </li>
  );
}
