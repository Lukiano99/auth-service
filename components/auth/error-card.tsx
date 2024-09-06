import { TriangleAlertIcon } from "lucide-react";
import CardWrapper from "./card-wapper";

const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Oops! Something went wrong!"
      backButtonHref="auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex items-center justify-center">
        <TriangleAlertIcon className=" text-destructive" />
      </div>
    </CardWrapper>
  );
};

export default ErrorCard;
