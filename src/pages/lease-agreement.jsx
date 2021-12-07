import DocViewer from "react-doc-viewer";
import React from "react";

export default function leaseAgreementView() {
  const docs = [
    {
      uri: "https://lease-tool.s3.eu-west-1.amazonaws.com/Rental+Buddy+lease+agreement.docx",
    }, // Local File
  ];

  return <DocViewer documents={docs} />;
}
