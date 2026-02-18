import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Quotifii",
  description: "Terms and conditions for using Quotifii's insurance comparison services.",
};

export default function TermsOfUseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen overflow-y-auto">
      {children}
    </div>
  );
}
