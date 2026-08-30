import Link from "next/link";

export default function CtaBand({
  heading = "Get a Free 30-Minute Audit of Your Ad Account",
  caption = "No payment required. We will look at your current account and tell you exactly what is costing you money.",
}: {
  heading?: string;
  caption?: string;
}) {
  return (
    <section className="bg-ink">
      <div className="content-wrap px-6 py-14 md:py-20 text-center flex flex-col items-center gap-5">
        <h2 className="h2-style !text-white max-w-[24ch]">{heading}</h2>
        <Link href="/book-a-call/" className="btn-primary bg-accent">
          Book Your Free 30-Minute Audit
        </Link>
        <p className="caption-copy !text-[#B0B0B5] max-w-[50ch]">{caption}</p>
      </div>
    </section>
  );
}
