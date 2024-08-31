export const formFields = [
    { fieldType: "text", name: "firstName", label: "First Name", pattern: "[A-Za-z]{2,}" },
    { fieldType: "text", name: "lastName", label: "Last Name", pattern: "[A-Za-z]{2,}" },
    { fieldType: "text", name: "email", label: "Email" }, // No pattern needed for email as it's handled by the type attribute
    { fieldType: "text", name: "mobile", label: "Mobile" },
    { fieldType: "text", name: "state", label: "State", pattern: "[A-Za-z]{2,}" },
    { fieldType: "text", name: "postcode", label: "Post Code"}
  ];    