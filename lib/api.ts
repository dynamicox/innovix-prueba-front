import { MarsImage } from "./types";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "DEMO_KEY";

export const fetchPhotos = async (): Promise<MarsImage[]> => {
  const res = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`
  );
  if (!res.ok) throw new Error("Failed to fetch data");
  const data = await res.json();
  return data.photos as MarsImage[];
};
