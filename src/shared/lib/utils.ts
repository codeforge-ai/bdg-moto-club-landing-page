import { clsx } from "clsx";
import type { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function submitFormspree(formData: Record<string, string>) {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (!endpoint)
    throw new Error("Formspree endpoint not set in environment variables");
  return axios.post(endpoint, formData, {
    headers: { Accept: "application/json" },
  });
}
