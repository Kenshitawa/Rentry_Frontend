"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Minus, MessageCircle, Plus, ShoppingBag, X } from "lucide-react";
import { kes } from "@/lib/products";
import { useStore } from "@/lib/store";

type Props = {
  open: boolean;
  onClose: () => void;
  onCheckout: () => void;
  onWhatsApp: () => void;
};

export function CartPanel({ open, onClose, onCheckout, onWhatsApp }: Props) {
  const cart = useStore((state) => state.cart);
  const remove = useStore((state) => state.remove);
  const setQuantity = useStore((state) => state.quantity);
  const count = cart.reduce((sum, line) => sum + line.quantity, 0);
  const total = cart.reduce((sum, line) => sum + line.product.price * line.quantity, 0);

  return <>
    <button className="cart-float" onClick={() => open ? onClose() : window.dispatchEvent(new Event("rentry:open-cart"))} aria-label={`Open cart, ${count} items, ${kes(total)}`}>
      <ShoppingBag size={19}/><span className="cart-float-copy"><b>{count ? `${count} item${count === 1 ? "" : "s"}` : "Your cart"}</b><small>{count ? kes(total) : "Ready when you are"}</small></span><ArrowRight className="cart-float-arrow" size={16}/>
    </button>
    <AnimatePresence>{open && <motion.div className="overlay cart-overlay" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.aside className="drawer cart-drawer" onClick={(event) => event.stopPropagation()} initial={{ x: 40 }} animate={{ x: 0 }} exit={{ x: 40 }}>
        <div className="drawer-head"><div><h3>Your cart <span className="cart-head-count">({count})</span></h3><small className="cart-head-note">Review quantities and your running total</small></div><button className="close-btn" onClick={onClose} aria-label="Close cart"><X size={17}/></button></div>
        {cart.length ? <><div className="drawer-items">{cart.map(({ product, quantity }) => <div className="drawer-item" key={product.id}>
          <img src={product.image} alt=""/><div className="cart-line-copy"><h4>{product.name}</h4><span>{kes(product.price)} each</span><div className="qty cart-qty"><button aria-label={`Remove one ${product.name}`} onClick={() => setQuantity(product.id, quantity - 1)}><Minus size={12}/></button><b>{quantity}</b><button aria-label={`Add one ${product.name}`} onClick={() => setQuantity(product.id, Math.min(product.stock, quantity + 1))} disabled={quantity >= product.stock}><Plus size={12}/></button><button className="cart-remove" onClick={() => remove(product.id)}>Remove</button></div></div><b className="cart-line-total">{kes(product.price * quantity)}</b>
        </div>)}</div><div className="drawer-total"><div className="cart-subtotal"><span>Subtotal</span><strong>{kes(total)}</strong></div><small className="cart-delivery-note">Delivery is confirmed at checkout.</small><button className="btn btn-primary cart-checkout" onClick={onCheckout}>Continue to checkout <ArrowRight size={16}/></button><button className="btn cart-whatsapp" onClick={onWhatsApp}><MessageCircle size={16}/> Ask or order on WhatsApp</button></div></> : <div className="empty"><div><ShoppingBag size={35} style={{ margin: "auto auto 12px" }}/><p>Your cart is ready for a good tool.</p><button className="btn btn-primary" onClick={onClose}>Explore equipment</button></div></div>}
      </motion.aside>
    </motion.div>}</AnimatePresence>
  </>;
}
