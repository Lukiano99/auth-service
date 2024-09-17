import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface TwoFactorCodeInputProps {
  disabled?: boolean;
  placeholder?: string;
  onChange: () => void;
}
const TwoFactorCodeInput = ({
  disabled = false,
  //   placeholder = "",
  onChange,
}: TwoFactorCodeInputProps) => {
  return (
    <InputOTP
      maxLength={6}
      disabled={disabled}
      placeholder={""}
      onChange={onChange}
      containerClassName="justify-between"
    >
      <InputOTPGroup>
        <InputOTPSlot className="size-12" index={0} />
        <InputOTPSlot className="size-12" index={1} />
        <InputOTPSlot className="size-12" index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />

      <InputOTPGroup>
        <InputOTPSlot className="size-12" index={3} />
        <InputOTPSlot className="size-12" index={4} />
        <InputOTPSlot className="size-12" index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
};

export default TwoFactorCodeInput;
