import india from "@/assets/images/icons/currency/india.svg";

export const currencies = [{ code: "91", label: "India", icon: india }];
export const eventType = [{ code: "cc", label: "Coding Contest" }];
export const eventTypeValues = [{ code: "cc", label: "Coding Contest" }];

export const commonTextFieldStyles = {
  flexGrow: 1,
  width: "100%",
  marginBottom: "24px",
  borderRadius: "5px",
  backgroundColor: "#E1EBEE",
  color: "#128C7E",

  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#0080CF",
    },
  },
};

export const commonPlaceholderStyles = {
  sx: {
    "&::placeholder": {
      color: "#212121",
      opacity: "1 !important",
    },
  },
};

export const commonRadioButtonStyles = {
  color: "#E1EBEE",
  "&.Mui-checked": {
    color: "#0080CF",
  },
};
