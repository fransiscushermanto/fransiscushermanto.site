import dynamic from "next/dynamic";

const Contact = dynamic(() =>
  import("@/components/modules/contact").then((module) => module.Contact),
);

export default function ContactPage() {
  return <Contact />;
}
