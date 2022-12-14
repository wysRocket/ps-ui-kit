import React, {CSSProperties} from "react";
import {HTML5Backend} from "react-dnd-html5-backend";
import DraggableItem from "./DraggableItem";
import {DndHacked} from "./DndHacked";

interface IProps<P> {
  style?: CSSProperties;
  move: (dragIndex: number, hoverIndex: number) => void;
  idField?: string;
  type: string;
  renderer: (item: P) => React.ReactElement;
  items: P[];
}

export class DraggableList<P> extends React.Component<IProps<P>> {
  render() {
    const idField = this.props.idField || "identity";
    return (
      <DndHacked backend={HTML5Backend}>
        {this.props.items.map((item, index) => {
          const id = (item as any)[idField];
          return (
            <DraggableItem
              move={this.props.move}
              type={this.props.type}
              index={index}
              id={id}
              key={id}
            >
              {this.props.renderer(item)}
            </DraggableItem>
          );
        })}
      </DndHacked>
    );
  }
}
