import Link from "next/link";
import Image from "next/image";
import { getAllApplicationsByType } from "@/lib/actions";
import ChangeTypeBtn from "./changeTypeBtn";
import { AppValueType } from "@/@types";
import { appValueToLable } from "@/lib/utils";

export default async function Home({
  searchParams,
}: {
  searchParams: { type: AppValueType | undefined };
}) {
  const type = searchParams.type ?? AppValueType.out;
  const data = await getAllApplicationsByType(appValueToLable(type))!;
  return (
    <>
      <header className="fixed right-[4%] top-4 z-10 md:top-14">
        <ChangeTypeBtn />
      </header>
      <main>
        <div className="container mx-auto mt-28 grid grid-cols-[repeat(auto-fill,_minmax(5rem,_1fr))] gap-4 sm:grid-cols-[repeat(auto-fill,_minmax(8rem,_1fr))] lg:mt-60">
          {data?.apps.map((app) => (
            <Link href={app.url} key={app.id} target="_blank">
              <div className="relative">
                <figure className="">
                  <Image
                    src={app.logo}
                    alt={app.name}
                    width="128"
                    height="128"
                    className="h-20 w-20 hover:animate-shake_bounce sm:h-32 sm:w-32"
                  />
                  <figcaption className="text-center text-xs text-white shadow-black drop-shadow-lg md:text-sm">
                    {app.name}
                  </figcaption>
                </figure>
                {app.requireLogin && (
                  <Image
                    src="/images/auth.png"
                    alt=""
                    width="20"
                    height="20"
                    className="absolute left-16 top-1 h-5 w-5 sm:left-[6.5rem] sm:top-2 sm:h-8  sm:w-8"
                  />
                )}
              </div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
