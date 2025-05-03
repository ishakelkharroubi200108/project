// app/components/SchoolPartners.tsx
import SchoolPartnersCard from "./SchoolPartnersCard.jsx";
import { assets } from '../../assets/assets.js';
const schools = [
  {
    id: 1,
    name: "Green Valley School",
    logo: assets.partner_1,
  },
  {
    id: 2,
    name: "Bright Minds Academy",
    logo: assets.partner_2,
  },
  {
    id: 3,
    name: "St. Mary’s International",
    logo: assets.partner_3,
  },
  {
    id: 4,
    name: "Tech High School",
    logo: assets.partner_4,
  },
];

export default function SchoolPartners() {
  return (
    <section className="container py-14 px-16 pg:px-32 max-w-7xl mx-auto">
      <div className="text-center mb-20 space-y-4">
        <h2 className="text-4xl font-bold mb-12">Our <span className='px-2 text-green-500'> Partner </span> Schools</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-10">
          We proudly collaborate with top-tier educational institutions to
          empower students and staff.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="drop-shadow-sm grid grid-cols-2 sm:grid-cols-2 py-20 md:grid-cols-3 lg:grid-cols-4 items-center gap-4 md:gap-6 cursor-pointer hover:bg-slate-150">
        {schools.map((school) => (
          <SchoolPartnersCard key={school.id} school={school} />
        ))}
      </div>
    </section>
  );
}
