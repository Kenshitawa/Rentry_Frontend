import Link from "next/link";
import {HouseProjectForm} from "@/app/house-project-form";
export default function ProjectEnquiryPage(){return <main className="house-detail-page"><div className="general-project-wrap"><Link className="house-back" href="/#projects">← Back to homes</Link><HouseProjectForm/></div></main>}
