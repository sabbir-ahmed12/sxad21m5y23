import { useEffect } from "react";

export default function useGlobeWidget({ url }) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "//clustrmaps.com/globe.js?d=XfPN6nLJI6Q1xG_D-Wze9Tdf4FqJERVIzCFeLO4eOR4";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
}
