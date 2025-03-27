"use client"; // Yeh line sabse upar honi chahiye

import { CartProvider } from "react-use-cart";

export default function MyCartProvider({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
