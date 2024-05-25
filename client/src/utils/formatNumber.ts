import { SpringValue } from "@react-spring/web";

export function formatNumberCurrency(number: SpringValue<number>) {
    return number.to((n) => n.toLocaleString('en-IN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      }))
  }