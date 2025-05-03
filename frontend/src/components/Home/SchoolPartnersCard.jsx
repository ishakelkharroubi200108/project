export default function SchoolPartnerCard({ school }) {
  return (
    <div className="drop-shadow-md flex flex-col items-center justify-center p-4 text-center bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
      <div className="w-20 h-20 md:w-24 md:h-24 relative mb-3">
        <img
          src={school.logo}
          alt={`${school.name} Logo`}
          className="object-contain"
        />
      </div>
      <h3 className="text-sm md:text-base font-medium text-slate-800">{school.name}</h3>
    </div>
  );
}