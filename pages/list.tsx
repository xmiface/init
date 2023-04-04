import Link from "next/link";

interface IListProps {}

class NavLink {
  title: any;
  path: any;
  constructor(title: string, path: string) {
    (this.title = title), (this.path = path);
  }
}

const links = [
  new NavLink("home", ""),
  new NavLink("cat 1", "/cat/1"),
  new NavLink("cat upload", "/cat/upload"),
  new NavLink("coingecko", "/coingecko"),
  new NavLink("coingecko coin", "/coingecko/coin/aave"),
  new NavLink("farm coin", "/farm"),
  new NavLink("fbx (unity3d require)", "/fbx"),
  new NavLink("sketchfab 3d", "/sketchfab"),
  new NavLink("landshaft", "/landshaft"),
  new NavLink("landshaft", "/landshaft"),
  new NavLink("quiz", "/quiz"),
  new NavLink("addQuiz", "/quiz/addQuiz"),
  new NavLink("editQuiz", "/quiz/editQuiz"),
  new NavLink("shopshop", "/shopshop"),
  new NavLink("shopshop item", "/shopshop/http://localhost:3000/shopshop/https%3A%2F%2Flexica.art%2Fapi%2Fv1%2Fsearch%3Fq%3Dlord-of-the-rings-Orc-supermarket-in-Mordor-shelves-of-mouldy-vegetables-dark-coloured-toiletries-and-animal-body-parts-eye-of-Sauron-working-on-each-checkout-8k-render-n-10"),
  new NavLink("themealdb", "/themealdb"),
  new NavLink("themealdb basket", "/themealdb/basket"),
  new NavLink("themealdb meal", "themealdb/meal/52874"),
  new NavLink("themealdb category", "/themealdb/category/Beef"),
  new NavLink("themealdb ingredient", "/themealdb/ingredient/Beef"),
  new NavLink("canvas", "/canvas"),
];

const List: FC<IListProps> = ({}) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-[1440px] mx-auto border-2">
        {links.map((el) => (
          <Link href={el.path}>{el.title}</Link>
        ))}
      </div>
    </>
  );
};

export default List;
