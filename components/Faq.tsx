export type FaqItem = { question: string; answer: string };

export default function Faq({
  items,
  schemaItems,
  emitSchema = true,
}: {
  items: FaqItem[];
  /** Full item set to include in the FAQPage schema, when it's broader
   * than what this instance visually renders (e.g. a second Faq on the
   * same page whose questions should still be covered by the one
   * page-wide schema block). Defaults to `items`. */
  schemaItems?: FaqItem[];
  /** Set false when another Faq on the same page already emits FAQPage
   * schema, since a page should only carry one FAQPage block. */
  emitSchema?: boolean;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (schemaItems ?? items).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <details key={item.question} className="group border-b border-border py-5">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none">
            <h3 className="h3-style !text-[19px] md:!text-[19px]">{item.question}</h3>
            <span className="shrink-0 w-6 h-6 flex items-center justify-center text-accent">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </span>
          </summary>
          <p className="body-copy text-neutral mt-3">{item.answer}</p>
        </details>
      ))}
      {emitSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </div>
  );
}
