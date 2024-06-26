import Image from "next/image"

import { cn } from "@/lib/utils"

const qualities = [
  {
    item: "CBD ingradients",
  },
  {
    item: "Sexual performance enhancers",
  },
  {
    item: "Enhance your workout",
  },
]

export default function DrinkQuality() {
  return (
    <section className={cn("w-11/12", "pt-10 sm:pt-20")}>
      <div
        className={cn(
          "rounded-full border border-transparent sm:border-white",
          "flex w-full items-center",
          "px-10",
          "mb-10 sm:mb-20"
        )}
      >
        <div
          className={cn(
            "flex items-center justify-between",
            "w-3/12",
            "hidden md:flex"
          )}
        >
          <Image
            src="/assets/images/fire.png"
            alt="pattern1"
            height={19}
            width={171}
            className="w-20 lg:w-44"
          />
          <Image
            src="/assets/images/settings.png"
            alt="pattern2"
            height={41}
            width={61}
            className="w-8 lg:w-16"
          />
        </div>
        <div
          className={cn(
            "mx-auto w-fit",
            "rounded-full border border-white text-center",
            "px-12 py-2"
          )}
        >
          <h5
            className={cn(
              "font-serif capitalize",
              "text-lg sm:text-2xl 2xl:text-4xl"
            )}
          >
            boost drink qualities
          </h5>
        </div>
        <div
          className={cn(
            "flex items-center justify-between",
            "w-3/12",
            "hidden md:flex"
          )}
        >
          <Image
            src="/assets/images/settings.png"
            alt="pattern2"
            height={41}
            width={61}
            className="w-8 lg:w-16"
          />
          <Image
            src="/assets/images/fire.png"
            alt="pattern1"
            height={19}
            width={171}
            className="w-20 lg:w-44"
          />
        </div>
      </div>
      <div
        className={cn(
          "flex items-center justify-between ",
          "sm:flex-no-wrap flex-wrap"
        )}
      >
        <div className="relative w-full sm:w-1/2">
          <Image
            src="/assets/images/quality.png"
            alt="energy"
            height={1000}
            width={854}
            className="mx-auto"
          />
        </div>
        <div className="w-full sm:w-1/2">
          <h2
            className={cn(
              "mb-5 font-bold uppercase leading-[100%] tracking-tighter sm:mb-10",
              "text-3xl md:text-4xl lg:text-7xl 2xl:text-9xl"
            )}
          >
            NATURAL TASTE AND POWER
          </h2>
          <ul
            className={cn(
              "ml-0 md:ml-5 lg:ml-16 xl:ml-24",
              "lg:text-md text-sm xl:text-xl 2xl:text-2xl",
              "font-medium"
            )}
          >
            <li
              className={cn(
                "relative",
                "before:absolute before:left-0 before:top-5 before:h-2 before:w-2 before:bg-list-icon before:bg-contain before:bg-no-repeat",
                "2xl:pl-24"
              )}
            >
              Boosts energy drink has many important vitamins and minerals. The
              Moringa leaves have 7 times more vitamin C than oranges and 15
              times more potassium than bananas. Moringa tree is also ritch with
              calcium, protein, iron, and amino acids, which help your body heal
              and build muscle, but at the same time has a unique and palatable
              taste.
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
