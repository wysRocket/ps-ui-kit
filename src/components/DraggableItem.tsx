import {CSSProperties, default as React, useRef} from "react";
import {DropTargetMonitor, useDrag, useDrop, XYCoord} from "react-dnd";

interface DragItem {
  index: number;
  id: string;
  type: string;
}

interface IProps {
  id: any;
  style?: CSSProperties;
  type: string;
  index: number;
  move: (dragIndex: number, hoverIndex: number) => void;
  children?: any;
}

const DraggableItem: React.FC<IProps> = ({ id, type, index, move, children, style }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [, drop] = useDrop({
    accept: type,
    hover(item: DragItem, monitor: DropTargetMonitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      move(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    item: { type, id, index },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ ...style, opacity }}>
      {children}
    </div>
  );
};

export default DraggableItem;
