const faqData = {
  categories: [
    { id: "software", name: "Software Solutions" },
    { id: "services", name: "Professional Services" },
    { id: "support", name: "Client Support" },
  ],
  items: [
    {
      id: 1,
      question: "Accounting Software Implementation",
      answer:
        "Our team provides comprehensive support in selecting and implementing the perfect accounting system tailored to your business needs, ensuring seamless integration with your existing workflows.",
      category: "software",
      tags: ["software", "implementation"],
    },
    {
      id: 2,
      question: "Mobile Accounting Application Features",
      answer:
        "Our reliable accounting app puts financial management at your fingertips with real-time reporting, expense tracking, and secure cloud synchronization across all your devices.",
      category: "software",
      tags: ["mobile", "app"],
    },
    {
      id: 3,
      question: "Automated Accounting & Bookkeeping",
      answer:
        "We help businesses automate their accounting processes to minimize errors and maintain accurate records, freeing you to focus on strategic decision-making rather than manual data entry.",
      category: "services",
      tags: ["bookkeeping", "automation"],
    },
    {
      id: 4,
      question: "Comprehensive Tax Services",
      answer:
        "Our tax professionals ensure you're always compliant while maximizing deductions. We handle everything from quarterly filings to annual returns, saving you time and avoiding penalties.",
      category: "services",
      tags: ["tax", "compliance"],
    },
    {
      id: 5,
      question: "CFO Services for Business Growth",
      answer:
        "Our certified experts provide strategic financial leadership, helping you manage cash flow, reduce costs, and plan for sustainable growth with tailored CFO services.",
      category: "services",
      tags: ["cfo", "strategy"],
    },
    {
      id: 6,
      question: "Customer Support Availability",
      answer:
        "We offer 24/5 support with emergency weekend coverage. Our average response time is under 30 minutes for priority cases, with multiple channels including chat, email, and phone.",
      category: "support",
      tags: ["support", "help"],
    },
  ],
};

export default faqData;
