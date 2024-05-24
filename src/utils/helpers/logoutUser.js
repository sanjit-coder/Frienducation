import toast from "react-hot-toast";

export const logoutUser = () => {
  if (typeof window !== undefined) {
    window.localStorage.clear();
    toast.success("Successfully logged out");
  }
};
