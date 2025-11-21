import { Mountains_of_Christmas } from "next/font/google";
import Products from "@/components/Products";
import DarkModeToggle from "@/components/DarkModeToggle";

// const pacifico = Pacifico({
//   variable: "--font-pacifico",
//   subsets: ["latin"],
//   weight: "400"
// });

const mountainsOfChristmas = Mountains_of_Christmas({
  variable: "--font-mountains-of-christmas",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false
});

export default function Home() {
  return (
    <div className="flex flex-col w-full font-poppins dark:bg-stone-950/10">
      <div className={`my-10 lg:text-5xl xl:text-5xl md:text-4xl sm: text-4xl px-4 font-extrabold text-red-800 dark:text-red-200/80 mx-auto text-center leading-normal ${mountainsOfChristmas.className}`}>
        🎄 Xmas List 2025 🎁
        <div className="absolute right-6 top-0">
          <DarkModeToggle />
        </div>
      </div>
      <Products />
    </div>
  );
}
