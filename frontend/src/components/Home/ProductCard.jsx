"use client";

import {Link} from "react-router-dom";
import { Card } from "../ui/card";


export default function ProductCard({ product }) {
  return (
    <Link to={`/products/${product.id}`} >
      <Card className="pt-0 pb-4 overflow-hidden group cursor-pointer transition-transform duration-300 h-full flex flex-col border-1 border-slate-300 outline-none ">
        <div className="relative flex items-center justify-center aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
            loading="lazy"
          />
        </div>
        <div className="p-3 sm:p-4 text-center md:text-left flex-1 flex flex-col justify-between">
          <h3 className="font-semibold line-clamp-1 text-sm sm:text-base mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground letter-spacing-2">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </Card>
    </Link>
  );
}
