import { LogOut } from "lucide-react";
import { ButtonVariant } from "../Button/Button";

export function Profile() {
  return (
    <div className="flex profile items-center gap-3">
      <img
        src="https://github.com/haramoni.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Júlia Haramoni
        </span>
        <span className="truncate text-sm text-zinc-500">
          jharamoni@gmail.com
        </span>
      </div>
      <ButtonVariant type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </ButtonVariant>
    </div>
  );
}
