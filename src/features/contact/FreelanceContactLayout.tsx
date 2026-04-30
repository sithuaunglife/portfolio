import React, { ReactNode } from "react";
import { contact } from "@/data/contact";
import FreelanceContactSection from "./FreelanceContactSection";

type Props = {
  children? : ReactNode;
};

const FreelanceContactLayout = ({ children }: Props) => {
  return (
    <div>
      <FreelanceContactSection contact={contact} />
      {children}
    </div>
  );
};

export default FreelanceContactLayout;
