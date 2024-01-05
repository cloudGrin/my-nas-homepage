import { AppValueType } from "@/@types";

export function appValueToLable(type: AppValueType) {
  return type === AppValueType.in ? "内网" : "外网";
}
