"use client";
import {useEffect,useState} from "react";
import {notFound} from "next/navigation";
import ProductDetail from "./product-detail";
import {products,type Product} from "@/lib/products";
export default function ProductPageClient({id}:{id:string}){const productFallback=products.find(p=>p.id===id)??null;const[product,setProduct]=useState<Product|null>(productFallback);const[loaded,setLoaded]=useState(false);useEffect(()=>{let live=true;fetch(`/api/products/${encodeURIComponent(id)}`,{cache:"no-store"}).then(r=>r.ok?r.json():Promise.reject()).then(d=>{if(live&&d.product)setProduct(d.product)}).catch(()=>{}).finally(()=>{if(live)setLoaded(true)});return()=>{live=false}},[id]);if(!product&&loaded)return notFound();if(!product)return <main className="product-page"><div className="wrap product-loading-content"><div className="product-loading-image"/><div className="product-loading-copy"><span/><span/><span/><span/></div></div></main>;return <ProductDetail product={product}/>}
