export const formFields = [
    { fieldType: "text", name: "firstName", label: "First Name", pattern: "[A-Za-z]{2,}" },
    { fieldType: "text", name: "lastName", label: "Last Name", pattern: "[A-Za-z]{2,}" },
    { fieldType: "email", name: "email", label: "Email" }, // No pattern needed for email as it's handled by the type attribute
    { fieldType: "text", name: "mobile", label: "Mobile", pattern: "^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$" },
    { fieldType: "text", name: "state", label: "State", pattern: "[A-Za-z]{2,}" },
    { fieldType: "text", name: "postcode", label: "Post Code"}
  ];    