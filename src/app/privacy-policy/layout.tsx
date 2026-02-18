import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Quotifii",
  description: "Privacy policy for using Quotifii's insurance comparison services.",
};

export default function PrivacyPolicyLayout({
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
