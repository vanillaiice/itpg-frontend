import { writable } from "svelte/store";

export let LoginStatus = writable(false);
export let NavigatorOnline = writable(false);

export const API_URL = import.meta.env.VITE_API_URL;
