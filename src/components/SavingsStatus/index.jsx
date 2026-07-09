import { IconSavings } from "../Icons";
import { ProgressBar } from "../ProgressBar";

export const SavingsStatus = () => {
  return (
    <div className="flex flex-col gap-8">
      <p className="m-0 text-secondary-income flex items-center gap-2 justify-center text-base leading-[125%] font-bold">
        <IconSavings />
        Economizar
      </p>
      <ProgressBar percent={42} />
    </div>
  );
};
