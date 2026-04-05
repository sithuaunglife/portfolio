import React, { ReactNode } from "react";
import ContactSection from "./ContactSection";
import { contact } from "@/data/contact";

type Props = {
  children: ReactNode;
};

const ContactLayout = ({ children }: Props) => {
  return (
    <div>
      <ContactSection contact={contact} />
      {children}
    </div>
  );
};

export default ContactLayout;
