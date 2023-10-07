import { observer } from "mobx-react-lite";
import Link from "next/link";

export const sButton = `py-2 px-4 border-2 border-zinc-800 bg-twitchpink hover:bg-twitchdarkpink rounded-md`;

const Index = () => {
  return (
    <div>
     <Link  href='/dnd'> dnd </Link>
    </div>
  );
};

export default observer(Index);
