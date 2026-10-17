"use client";
import {create} from "zustand";
import {persist,createJSONStorage} from "zustand/middleware";
import type {Product} from "./products";
type Line={product:Product;quantity:number};
type Store={cart:Line[];wishlist:string[];add:(p:Product)=>void;remove:(id:string)=>void;quantity:(id:string,q:number)=>void;toggleWish:(id:string)=>void;clear:()=>void};
export const useStore=create<Store>()(persist((set)=>({cart:[],wishlist:[],add:(p)=>set(s=>({cart:s.cart.some(x=>x.product.id===p.id)?s.cart.map(x=>x.product.id===p.id?{...x,quantity:x.quantity+1}:x):[...s.cart,{product:p,quantity:1}]})),remove:(id)=>set(s=>({cart:s.cart.filter(x=>x.product.id!==id)})),quantity:(id,q)=>set(s=>({cart:q<1?s.cart.filter(x=>x.product.id!==id):s.cart.map(x=>x.product.id===id?{...x,quantity:q}:x)})),toggleWish:(id)=>set(s=>({wishlist:s.wishlist.includes(id)?s.wishlist.filter(x=>x!==id):[...s.wishlist,id]})),clear:()=>set({cart:[]} )}),{name:"rentry-store",storage:createJSONStorage(()=>localStorage)}));
