// components/ChosenUs.tsx
import { Card } from "../ui/card";

export default function ChosenUs() {
  return (
    <section className="py-14 px-16 lg:px-32 bg-white">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-20 text-slate-800">
        Why People 
        <span className="pl-3 text-green-500">Choose Us</span>
      </h2>

      {/* Responsive Flexbox Layout */}
      <div className="container flex  items-center  flex-wrap lg:flex-nowrap gap-6 py-16 max-w-6xl mx-auto">
        
        <Card className="drop-shadow-md min-w-72 lg:min-w-1/4 flex-1 p-6 text-center transition-colors outline-none border-1 border-slate-300 duration-300 hover:bg-muted/30 rounded-lg hover:bg-slate-100">
          <div className="text-4xl mb-4 flex justify-center">🎨</div>
          <p className="text-sm sm:text-base text-black">
            Creative tools and supplies that inspire imagination and learning.
          </p>
        </Card>
        <Card className="drop-shadow-md min-w-72 lg:min-w-1/4 flex-1 p-6 text-center transition-colors outline-none border-1 border-slate-300 duration-300 hover:bg-muted/30 rounded-lg hover:bg-slate-100">
          <div className="text-4xl mb-4 flex justify-center">🎨</div>
          <p className="text-sm sm:text-base text-black">
            Creative tools and supplies that inspire imagination and learning.
          </p>
        </Card>
        <Card className="drop-shadow-md min-w-72 lg:min-w-1/4 flex-1 p-6 text-center transition-colors outline-none border-1 border-slate-300 duration-300 hover:bg-muted/30 rounded-lg hover:bg-slate-100">
          <div className="text-4xl mb-4 flex justify-center">🎨</div>
          <p className="text-sm sm:text-base text-black">
            Creative tools and supplies that inspire imagination and learning.
          </p>
        </Card>
        <Card className="drop-shadow-md min-w-72 lg:min-w-1/4 flex-1 p-6 text-center transition-colors outline-none border-1 border-slate-300 duration-300 hover:bg-muted/30 rounded-lg hover:bg-slate-100">
          <div className="text-4xl mb-4 flex justify-center">🎨</div>
          <p className="text-sm sm:text-base text-black">
            Creative tools and supplies that inspire imagination and learning.
          </p>
        </Card>
      </div>
    </section>
  );
}
