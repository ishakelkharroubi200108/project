// components/Shop.tsx
import { ChoiceCard } from "./ChoiceCard.jsx";
import { assets } from '../../assets/assets.js';


export default function Shop() {
  return (
    <section className="py-14 px-16 lg:px-32 bg-slate-150">
      <h2 className="text-5xl font-bold text-center mb-24">
        Our <span className="text-green-600">  Shop Collections </span>
      </h2>

      <div className="container flex items-center justify-between flex-col md:flex-row gap-4 max-w-6xl mx-auto">
        <ChoiceCard
          title="Boys Shop Collection"
          imageUrl={assets.collection_boys}
          href="/shop/boys"
        />
        <ChoiceCard
          title="Girls Shop Collection"
          imageUrl={assets.collection_girls}
          href="/shop/girls"
        />
        <ChoiceCard
          title="Schools Collection"
          imageUrl={assets.collection_schools}
          href="/shop/schools"
        />
      </div>
    </section>
  );
}
