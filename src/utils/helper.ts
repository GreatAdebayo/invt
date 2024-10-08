import { StatusVariantT } from "./type";

export const statusGenerator = (status: string): StatusVariantT => {
  switch (status) {
    case "processing":
    case "pending":
      return "yellow";

    case "success":
    case "completed":
    case "approved":
      return "green";

    case "failed":
    case "rejected":
      return "danger";

    default:
      return "yellow";
  }
};
