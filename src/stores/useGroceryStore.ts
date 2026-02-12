import {create} from 'zustand'


interface GroceryItem {
    id:number;
    text:string;
}
interface GroceryList {
    items: GroceryItem[];
    add: (text:string) => void; 
    remove: (id:number) => void; 
}
const useGroceryStore = create<GroceryList>((set)=>({
    items: [],

    add: (text:string)=> set((state)=>({
        items: [...state.items, {id:Date.now(),text}]
    })),
    remove: (id:number) => set((state)=>({
        items: state.items.filter((item)=>item.id !== id)
    }))


}))

export default useGroceryStore