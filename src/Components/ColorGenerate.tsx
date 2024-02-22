import { useState, useEffect } from "react";

export const ColorGenerate = () => {
  const [colors, setColors] = useState({
    color1: "",
    color2: "",
  });

  const fetchColors = async () => {
    try {
      const response1 = await fetch(
        `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`
      );

      const response2 = await fetch(
        `https://www.colr.org/json/color/random?query&timestamp=${new Date().getTime()}`
      );

      if (!response1.ok || !response2.ok)
        throw new Error("Failed to fetch colors");

      const data1 = await response1.json();
      const data2 = await response2.json();

      if (!data1 || !data1.new_color || !data2 || !data2.new_color)
        throw new Error("Color not found in response");

      const newColor1 = `#${data1.new_color}`;
      const newColor2 = `#${data2.new_color}`;

      setColors({ color1: newColor1, color2: newColor2 });
    } catch (error) {
      console.error("Error fetching colors:", error);
    }
  };

  useEffect(() => {
    fetchColors();
  }, []);

  return colors;
};
