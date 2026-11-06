import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Logo } from "@/components/nuru/Logo";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Seramet" },
      {
        name: "description",
        content:
          "How Seramet handles personal data, restaurant records and connected delivery services, and how to contact us about your privacy.",
      },
      { property: "og:title", content: "Privacy Policy | Seramet" },
      { property: "og:url", content: "https://seramet.co.ke/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://seramet.co.ke/privacy" }],
  }),
  component: PrivacyPolicy,
});

const sections = [
  {
    title: "Who operates Seramet",
    paragraphs: [
      "Seramet is operated by Emmanuel Odhiambo Onyango, trading as Seramet, in Kenya. This notice covers the Seramet website, restaurant point-of-sale service and its connected delivery services. Seramet is not described here as an incorporated company.",
      "For account administration, support and service security, the operator determines how personal data is used. Restaurants determine how they use their customer and employee records; Seramet processes those records on their behalf to provide the service. Delivery platforms also handle information under their own privacy notices.",
    ],
  },
  {
    title: "Information handled by the service",
    paragraphs: [
      "Depending on the features used, records may include account names, email addresses, business and branch details, employee roles, support messages, order items and instructions, customer contact and delivery details, invoices, receipts, payment references and reconciliation records. Delivery instructions and order notes may contain personal information; please include only what is needed to fulfil an order.",
      "The service also handles authentication and session information, device identifiers, access logs and audit records. Where a restaurant enables attendance geofencing, employee location is checked when recording a clock-in or clock-out. This notice does not authorise continuous location tracking.",
      "Payment providers handle their own payment authentication. Do not send card security codes, mobile-money PINs, passwords or integration secrets by email or through support messages.",
    ],
  },
  {
    title: "Why information is used",
    paragraphs: [
      "Information is used to administer accounts, authenticate authorised staff, operate restaurant workflows, fulfil orders, maintain financial records, support customers, investigate faults, prevent misuse and meet applicable legal obligations. The relevant basis depends on the activity: providing an agreed service, complying with law, legitimate operational and security interests, or consent where required.",
      "Restaurant customers and employees should also consult the restaurant's own notice for its purposes and legal basis. Permission to use an integration is not permission to use delivery-platform customer data for unrelated advertising.",
    ],
  },
  {
    title: "Uber Eats and other delivery connections",
    paragraphs: [
      "When a restaurant authorises a delivery connection, Seramet can receive the order, store and fulfilment information supplied by that platform and send supported acceptance, preparation, availability and fulfilment updates. Only information needed for the configured connection should be exchanged. Platform customer data is used for the restaurant service, not sold or used for unrelated marketing.",
      "A test connection is separate from a live merchant connection. Test-store information is used to validate the integration. A restaurant can request disconnection through the privacy contact below; disconnecting does not automatically erase records that must be retained for accounting, disputes or legal obligations.",
    ],
  },
  {
    title: "Access, service providers and international processing",
    paragraphs: [
      "Access depends on assigned business, branch and role permissions. Hosting, database, authentication, email and connected payment or delivery providers process information as needed to supply their services. The current infrastructure includes Cloudflare and Supabase for the POS and Vercel for the public website. Authorised restaurants and their staff can access records within their permitted scope. Information may also be disclosed where required by law or necessary to investigate a security incident.",
      "Service providers may process information outside Kenya, including in European regions. Applicable transfer requirements must be addressed for the relevant processing arrangement. Contact us for details about providers, processing locations and safeguards relevant to your account; this notice does not claim that data remains exclusively in Kenya.",
    ],
  },
  {
    title: "Storage, security and retention",
    paragraphs: [
      "Seramet uses access controls, protected server-side credentials and audit records to limit and investigate access. No service can guarantee absolute security. Tell us promptly if you suspect unauthorised access, without sending passwords or secret keys.",
      "Retention depends on the record's purpose, the restaurant's instructions, applicable accounting and legal obligations, and unresolved disputes or security investigations. There is no single retention period for every record. Contact us for the retention arrangements that apply to your data. Deletion requests are assessed against those requirements; records in backups may remain until the applicable backup retention cycle ends.",
    ],
  },
  {
    title: "Cookies and local browser storage",
    paragraphs: [
      "Cookies and browser storage support sign-in, session security, device registration, preferences and, where enabled, offline operation. Clearing this storage can sign you out or remove locally pending work. Optional tracking, if introduced, requires its own disclosure and any consent required by law; this notice is not consent to optional tracking.",
    ],
  },
  {
    title: "Your choices and requests",
    paragraphs: [
      "You can ask about the data held about you, request access or correction, and request deletion, restriction, objection or portability where applicable. You can withdraw consent where processing relies on consent. Some requests are subject to legal limits, and proportionate identity verification may be needed before information is released or changed.",
      "For records controlled by a restaurant, contact that restaurant first or ask us to help route the request. You can also raise concerns with Kenya's Office of the Data Protection Commissioner. Do not include sensitive documents in an initial email; we will agree an appropriate way to verify and handle your request.",
    ],
  },
  {
    title: "Updates to this notice",
    paragraphs: [
      "This notice will be updated when the operator, service or processing arrangements change. The date below identifies this version. Material changes will be communicated where required. Company registration, if completed, will be reflected here rather than assumed in advance.",
    ],
  },
];

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-6">
          <a href="/" aria-label="Seramet home">
            <Logo />
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Home
          </a>
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <h1 className="font-display text-3xl font-semibold">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: 6 November 2026</p>
        <p className="mt-6 leading-7">
          Privacy contact:{" "}
          <a
            className="break-words text-gold underline underline-offset-4"
            href="mailto:admin@seramet.co.ke"
          >
            admin@seramet.co.ke
          </a>
        </p>
        <div className="mt-10 space-y-9">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-3 leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </div>
        <p className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          <a href="https://www.odpc.go.ke/" className="underline underline-offset-4">
            Office of the Data Protection Commissioner, Kenya
          </a>
        </p>
      </main>
    </div>
  );
}
