import Image from "next/image";
import { clsx } from "clsx";

export function Logo({ className, height = 40 }: { className?: string; height?: number }) {
  const width = Math.round((height * 280) / 74);
  return (
    <Image
      src="/images/brand/logo.png"
      alt="Triple A del Norte"
      width={width}
      height={height}
      priority
      className={clsx("object-contain", className)}
    />
  );
}
