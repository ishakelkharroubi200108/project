// components/ChoiceCard.tsx
import {Link} from "react-router-dom";


export function ChoiceCard({ title, imageUrl, href }) {
  return (
    <Link to={href} className='group'>
        <div className="relative overflow-hidden rounded-lg transition-all duration-300 py-0">
          {/* Image Container */}
          <div className="relative">
            {/* Image with hover scale effect */}
            <img
              src={imageUrl}
              alt={title}
              className="h-[360px] w-[320px] object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Overlay (always visible) */}
            <div className="absolute inset-0 bg-[#0007] bg-opacity-50 transition-all duration-300 group-hover:bg-[#0002]"></div>
          </div>
        </div>
    </Link>
  );
}
