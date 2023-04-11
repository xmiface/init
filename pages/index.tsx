import { observer } from "mobx-react-lite";

const Index = () => {
  return (
    <div className="relative flex items-center justify-center h-[100vh] w-500">
      <p className="text-xl">im microservice</p>
    </div>
  );
};

export default observer(Index);
