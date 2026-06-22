import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Heart, Landmark, Copy, CheckCircle2 } from "lucide-react";
import qrCodeImage from "../assets/qrcode.png"; // Adjust path as needed


const UPI_ID =
  (import.meta.env.VITE_UPI_ID as string | undefined) ?? "7019428321@sbi";
const UPI_PAYEE =
  (import.meta.env.VITE_UPI_PAYEE as string | undefined) ?? "DEVANAMPRIYA";

const BANK_DETAILS = {
  accountName: "DEVANAMPRIYA SAMRAT ASHOK BUDDA VIHAR TRUST (R) RAICHUR",
  accountNumber: "42908869183",
  ifsc: "SBIN0020203",
  bankName: "State Bank of India",
  branch: "Raichur Main, M.G. Road, Loharwadi, Raichur - 584101",
} as const;

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — Support DEVANAMPRIYA" },
      {
        name: "description",
        content:
          "Support DEVANAMPRIYA's work in education, dhamma, and social justice. Donate via UPI QR or bank transfer.",
      },
      { property: "og:title", content: "Donate — Support DEVANAMPRIYA" },
      {
        property: "og:description",
        content: "Your contribution funds education, dhamma, and humanitarian work.",
      },
    ],
  }),
  component: DonatePage,
});

function DonatePage() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        setCopied(label);
        setTimeout(() => setCopied(null), 2000);
      });
    }
  };

  const bankRows = [
    { label: "Account Name", value: BANK_DETAILS.accountName, key: "name" },
    { label: "Account Number", value: BANK_DETAILS.accountNumber, key: "account" },
    { label: "IFSC Code", value: BANK_DETAILS.ifsc, key: "ifsc" },
    { label: "Bank & Branch", value: `${BANK_DETAILS.bankName}, ${BANK_DETAILS.branch}`, key: "bank" },
  ];

  return (
    <div className="bg-[var(--royal-deep)] text-white min-h-screen pt-24 md:pt-28">
      {/* Hero Section */}
      <section className="container-page py-10 md:py-14 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold sm:text-4xl md:text-5xl"
        >
          Your Gift Lights the <span className="text-gradient-gold">Path of Dhamma</span>
        </motion.h1>
        <p className="mx-auto mt-4 max-w-2xl text-white/85 md:text-lg">
          Every contribution funds education, compassion drives, and social
          justice programs. Choose a way to give below.
        </p>
      </section>

      {/* Donation card */}
      <section className="container-page pb-20">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-6 text-[var(--royal-deep)] shadow-2xl md:p-10">
          <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--royal)]">
            <Heart className="h-4 w-4" /> Make a Donation
          </div>

          {/* QR Code Image */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7">
            <h3 className="text-lg font-semibold text-[var(--royal-deep)]">Scan & Pay via UPI</h3>
            <p className="mt-1 text-sm text-slate-500">
              Scan this QR with GPay, PhonePe, Paytm, or any UPI app.
            </p>

            <div className="mt-5 flex flex-col items-center gap-5 sm:flex-row sm:items-start">
              <div className="w-full max-w-[200px] aspect-square overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                <img
                  src={qrCodeImage}
                  alt="UPI QR Code"
                  className="w-full h-full object-cover"
                />
                              </div>
              <div className="flex-1 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-white p-3 text-sm text-slate-600">
                  <div>
                    <span className="font-semibold text-[var(--royal-deep)]">UPI ID:</span>{" "}
                    {UPI_ID}
                  </div>
                  <button
                    onClick={() => copyToClipboard(UPI_ID, "upi")}
                    className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-[var(--royal)] hover:bg-slate-100 transition"
                    title="Copy UPI ID"
                  >
                    {copied === "upi" ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-xs text-slate-500">
                  Copy the UPI ID above and use it in your UPI app to make a payment.
                </p>
              </div>
            </div>
          </div>

          {/* Bank transfer details */}
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:p-7">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--royal-deep)]">
              <Landmark className="h-5 w-5" /> Bank Transfer
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              You can also transfer directly to our account.
            </p>

            <div className="mt-5 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
              {bankRows.map(({ label, value, key }) => (
                <div
                  key={key}
                  className="flex items-center justify-between gap-4 px-4 py-3"
                >
                  <div>
                    <div className="text-xs text-slate-500">{label}</div>
                    <div className="font-semibold text-[var(--royal-deep)]">{value}</div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(value, key)}
                    className="flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold text-[var(--royal)] hover:bg-slate-100 transition"
                    title="Copy"
                  >
                    {copied === key ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" /> Copy
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            100% transparent · Every rupee supports our programs · Thank you for walking with us
          </p>
        </div>
      </section>
    </div>
  );
}