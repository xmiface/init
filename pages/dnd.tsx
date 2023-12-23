import { TrashIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { observer } from "mobx-react-lite";
import { useMemo, useState } from "react";
import { Card } from "../store/DndStore";
import { RootStore } from "../store/RootStore";

const sNewPlace = "border-2 p-4 my-2 bg-green-900"

const Index = observer(() => {
    const [draggbleId, setDraggbleId] = useState<string | undefined>(undefined);
    const [underDragId, setUnderDragId] = useState<string | undefined>(undefined);

    const draggbleItem = useMemo(() => {
        return RootStore.dnd.items.find(el => el.id === draggbleId)
    }, [draggbleId])

    function handleOnDragStart(el: Card) {
        setDraggbleId(el.id);
    }

    function handleOnDragOver(event: Event, el: Card): void {
        event.preventDefault();
        setUnderDragId(el.id);
    }

    function handleOnDrop(event: Event, el: Card): void {
        event.preventDefault();
        if (!draggbleId) {
            return;
        }
        setDraggbleId(undefined);
        setUnderDragId(undefined);
        RootStore.dnd.swapItems(draggbleId, el.id)
    }

    function handleDragEnd(): void {
        setDraggbleId(undefined);
        setUnderDragId(undefined);
    }

    function handleRemove(event: Event, id: string) {
        event.stopPropagation();
        event.preventDefault();
        RootStore.dnd.removeItem(id)
    }

    const showNewPlace = (id: string): Boolean => {
        return underDragId === id && id !== draggbleId
    }

    const sUnderDrag = (id: string) => clsx(
        "border-2 p-4 flex ",
        underDragId === id ? 'border-t-green-900 ' : ''
    )

    return <div className="flex flex-col">
        {RootStore.dnd.items.map((el, idx) => <div className="relative" key={el.id}>
            <div
                draggable
                className={clsx("p-2", `${draggbleId === el.id && 'bg-red-900'}`)}
                onDragStart={(e) => handleOnDragStart(el)}
                onDragEnd={handleDragEnd}
                onDragOver={(e) => handleOnDragOver(e, el)}
                onDrop={(e) => handleOnDrop(e, el)}
            >
                {showNewPlace(el.id) && <div className={sNewPlace}>
                    {draggbleItem?.title}
                </div>}

                <div className={sUnderDrag(el.id)}>
                    {el.title}
                </div>
            </div>

            {draggbleItem?.id !== el.id &&
                <button >
                    <TrashIcon className="h-6 w-6 absolute  right-6 bottom-[52px]"
                        onClick={(e) => handleRemove(e, el.id)}
                    />
                </button>
            }
        </div>)}
    </div >
})

export default Index;

