import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Rentry Engineering Ltd | Tools that mean business",
  description: "Shop genuine engineering tools, power equipment, safety gear and hardware. Delivery across Kenya with M-Pesa and WhatsApp support.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Providers>{children}</Providers></body></html>;
}
