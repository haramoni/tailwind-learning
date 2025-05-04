import { LogOut } from "lucide-react";
import { ButtonVariant } from "../Button/Button";
import Image from "next/image";

export function Profile() {
  return (
    <div className="flex profile items-center gap-3">
      <Image
        src="https://github.com/haramoni.png"
        className="h-10 w-10 rounded-full"
        width={30}
        height={30}
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-100">
          Júlia Haramoni
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-300">
          jharamoni@gmail.com
        </span>
      </div>
      <ButtonVariant
        type="button"
        variant="ghost"
      >
        <LogOut className="h-5 w-5 text-zinc-500" />
      </ButtonVariant>
    </div>
  );
}
