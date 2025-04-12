import React, { createContext, useState, useContext } from "react";

const ContactContext = createContext();

export const ContactProvider = ({ children }) => {
  const [contactData, setContactData] = useState({
    subject: "",
    message: "",
    shouldFocus: false, // Add this new field
    shouldScroll: false, // Add this new field
  });

  return (
    <ContactContext.Provider value={{ contactData, setContactData }}>
      {children}
    </ContactContext.Provider>
  );
};

export const useContact = () => useContext(ContactContext);
