import { writable } from "svelte/store";

export const API_URL = import.meta.env.VITE_API_URL;
export let LoginStatus = writable(false);
export let NavigatorOnline = writable(false);
