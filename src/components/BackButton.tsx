import {  ChevronLeft } from "react-feather";
import { router } from "../router";

export function BackButton() {
  return (
    <button
      className="mb-6 fixed left-1 md:left-6 top-20 md:top-28 z-[100] bg-emerald-950 size-8 flex justify-center items-center rounded-full text-white"
      onClick={() => router.navigate(-1)}
    >
      <ChevronLeft />
    </button>
  );
}
