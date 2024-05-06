import { ContactInfo } from "@/components/contact_info/ContactInfo";
import InquireForm from "@/components/inquire_form/InquireForm";
import "./contact.css";

export const metadata = {
  title: "Contact - EDE",
  description: "Contact - Estudio del Espacio",
};

export default function Contact() {
  return (
    <>
      <main className="contact-main">
        <InquireForm />
        <ContactInfo />
      </main>
    </>
  );
}
