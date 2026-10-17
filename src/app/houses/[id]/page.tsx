import HousePageClient from "./house-page-client";
export default async function HousePage({params}:{params:Promise<{id:string}>}){const{id}=await params;return <HousePageClient id={id}/>;}
