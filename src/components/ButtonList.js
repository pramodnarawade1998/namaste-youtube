import Button from "./Button";

const list = [
  "flex",
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Soccer",
  "Cricket",
  "Cooking",
  "Food",
  "Valentines",
];

function ButtonList() {
  return (
    <div className="flex">
      {list.map((btn) => (
        <Button key={btn} name={btn} />
      ))}
    </div>
  );
}

export default ButtonList;
