import { toast } from "react-toastify";

type ToastProps = {
  variant: "success" | "error";
  text: string;
};

const Toast = ({ variant, text }: ToastProps) => {
  return (
    <>
      {variant === "success" && toast.success(text)}
      {variant === "error" && toast.error(text)}
    </>
  );
};

export default Toast;
