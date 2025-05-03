'use client';

import ProductCard from './ProductCard.jsx';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { assets } from '../../assets/assets.js';

const products = [
  {
    id: 1, 
    name: 'Wooden Desk',
    price: 199.99,
    image: assets.product_item_1,
  },
  {
    id: 2,
    name: 'Modern Chair',
    price: 79.5,
    image: assets.product_item_2,
  },
  {
    id: 3,
    name: 'Office Lamp',
    price: 49.99,
    image: assets.product_item_3,
  },
  {
    id: 4,
    name: 'Bookshelf',
    price: 129.99,
    image: assets.product_item_4,
  },
  {
    id: 5,
    name: 'Coffee Table',
    price: 149.0,
    image: assets.product_item_5,
  },
  {
    id: 6,
    name: 'Sofa Set',
    price: 899.99,
    image: assets.product_item_6,
  },
];

export default function Collections() {
  return (
    <section className="container py-14 px-16 lg:px-32 max-w-7xl mx-auto mt-15">
      <h2 className="text-4xl font-bold text-center mb-20">Our 
         <span className="inline-block pl-2 text-green-500"> Collections</span>
        </h2>

      <Carousel
        opts={{
          align: 'center',
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className='py-10 drop-shadow-md'>
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 md:pl-6 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 drop-shadow-sm ">
              <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <div className="flex justify-center mt-6 space-x-2">
          <CarouselPrevious className="h-8 w-8" />
          <CarouselNext className="h-8 w-8" />
        </div>
      </Carousel>
    </section>
  );
}