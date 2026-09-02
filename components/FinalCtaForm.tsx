import Link from "next/link";
import ContactForm from "./ContactForm";
import { CheckIcon } from "./icons";

const checklist = [
  "Free 30-minute strategy call, no obligation to continue",
  "A straight answer on whether Google Ads fits your market",
  "A realistic cost-per-lead estimate for your trade",
];

export default function FinalCtaForm() {
  return (
    <section className="section">
      <div className="content-wrap px-6">
        <div className="rounded-[32px] bg-white border border-border shadow-xl p-8 md:p-14">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <span className="caption-copy px-3 py-1.5 rounded-full bg-accent/10 text-accent w-fit">
                Ready When You Are
              </span>

              <h2 className="h2-style">
                No Contracts, No Guesswork, Just Leads You Can Actually Count.
              </h2>

              <p className="body-copy text-neutral">
                Tell me what is currently running in your account, and I will
                tell you plainly whether Google Ads is worth pursuing for
                your business right now.
              </p>

              <ul className="flex flex-col gap-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="w-5 h-5 mt-0.5 text-success shrink-0" />
                    <span className="body-copy">{item}</span>
                  </li>
                ))}
              </ul>

              <Link href="/book-a-call/" className="btn-primary w-fit">
                Book My Free 30-Minute Audit
              </Link>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
