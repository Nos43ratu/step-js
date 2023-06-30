import { ToggleTheme } from "@/entities/toggle-theme";
import { Card } from "@/entities/card";
import { useScrolled } from "@/shared/hooks/use_scrolled";
import clsx from "clsx";
import Link from "next/link";

export function Header() {
  const isScrolled = useScrolled(50);

  return (
    <header
      className={clsx(
        "w-full fixed z-20 pt-2",
        "transition transform duration-200 ease-out",
        isScrolled ? "-translate-y-[120%]" : "translate-y-0"
      )}
    >
      <Card className="grid max-w-7xl mx-auto grid-cols-3">
        <div className="py-4 px-8 flex">
          <Link href="/" className="text-cyan-500 hover:text-cyan-700">
            <h1 className="text-2xl font-bold cursor-pointer">
              STEP - JS course
            </h1>
          </Link>
        </div>

        <div className="py-6 px-8 flex">{/*<LessonTitle />*/}</div>

        <div className="py-6 px-8 flex justify-end">{/*<ToggleTheme />*/}</div>
      </Card>
    </header>
  );
}
