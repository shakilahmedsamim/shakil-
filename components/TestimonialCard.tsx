import { StarIcon } from "./icons";

export default function TestimonialCard({
  quote,
  name,
  business,
  location,
}: {
  quote: string;
  name: string;
  business: string;
  location: string;
}) {
  return (
    <div className="bg-white rounded-2xl border border-border p-6 flex flex-col gap-4">
      <div className="flex gap-1 text-success">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon key={i} className="w-4 h-4" />
        ))}
      </div>
      <p className="body-copy">&quot;{quote}&quot;</p>
      <p className="caption-copy">
        {name} &middot; {business} &middot; {location}
      </p>
    </div>
  );
}
