import { Mountains_of_Christmas, Ribeye } from "next/font/google";
import Products from "@/components/Products";
import DarkModeToggle from "@/components/DarkModeToggle";

const ribeyeFont = Ribeye({
  variable: "--font-ribeye",
  subsets: ["latin"],
  weight: "400",
  adjustFontFallback: false
});

// const mountainsOfChristmas = Mountains_of_Christmas({
//   variable: "--font-mountains-of-christmas",
//   subsets: ["latin"],
//   weight: "400",
//   adjustFontFallback: false
// });

export default function Home() {
  return (
    <div className="flex flex-col w-full font-poppins dark:bg-stone-950/10">
      <div className={`
        my-10 lg:text-5xl xl:text-5xl md:text-4xl sm: text-4xl px-4 font-extrabold text-transparent mx-auto text-center leading-normal ${ribeyeFont.className} bg-clip-text bg-linear-to-b from-[#A64646] via-[#912828] to-[#CC5858]
      `}>
        🎄 Xmas List 2025 ⛄
        <div className="absolute right-6 top-0">
          <DarkModeToggle />
        </div>
      </div>
      <Products />
    </div>
  );
}
