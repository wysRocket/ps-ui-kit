import {DndProvider, DndProviderProps} from "react-dnd";
import * as React from "react";

declare type DndHackedProps<BackendContext, BackendOptions> = DndProviderProps<BackendContext, BackendOptions> & {
    children: any;
};
export const DndHacked: React.FC<DndHackedProps<any, any>> = (props: DndHackedProps<any, any>) => (<DndProvider {...props}/>);
