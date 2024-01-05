"use client";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";
import { AppValueType } from "@/@types";
import { appValueToLable } from "@/lib/utils";

export default function ChangeTypeBtn() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()!;
  const type = (searchParams.get("type") ?? AppValueType.out) as AppValueType;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <input className="tgl tgl-flip" id="qieh" type="checkbox" readOnly checked={
        type === AppValueType.in
      }></input>
      <label
        onClick={() =>
          router.push(
            pathname +
              (type === AppValueType.out
                ? "?" + createQueryString("type", AppValueType.in)
                : ""),
          )
        }
        className="tgl-btn"
        data-tg-on={appValueToLable(AppValueType.in)}
        data-tg-off={appValueToLable(AppValueType.out)}
        htmlFor="qieh"
      ></label>
    </>
  );
}
