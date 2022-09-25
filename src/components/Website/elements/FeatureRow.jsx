export default function CardRow(props) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-12 xl:gap-16 select-none">
      {props.children}
    </div>
  );
}
