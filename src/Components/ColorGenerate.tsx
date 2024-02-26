import { useState, useEffect } from "react";

export const ColorGenerate = () => {
  const [colors, setColors] = useState({
    primary: "",
    primaryWithOpacity: "",
    secondary: "",
    secondaryWithOpacity: "",
  });

  const fetchColors = async () => {
    try {
      const timestamp = new Date().getTime();
      const response = await fetch(
        `https://www.colr.org/json/colors/random/2?timestamp=${timestamp}`
      );

      if (!response.ok) {
        throw new Error("Failed to fetch colors");
      }

      const data = await response.json();

      if (!data || !Array.isArray(data.colors) || data.colors.length < 2) {
        throw new Error("Colors not found in response");
      }

      const [color1, color2] = [data.colors[0].hex, data.colors[1].hex];

      const primary = `#${color1}`;
      const secondary = `#${color2}`;

      const primaryWithOpacity = hexToRgbWithOpacity(color1, 0.8);
      const secondaryWithOpacity = hexToRgbWithOpacity(color2, 0.8);

      setColors({
        primary,
        primaryWithOpacity,
        secondary,
        secondaryWithOpacity,
      });
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return colors;
};

const hexToRgbWithOpacity = (hex: string, opacity: number) => {
  hex = hex.replace("#", "");

  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};
