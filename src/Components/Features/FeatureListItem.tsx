import React from "react";

interface FeatureListItemProps {
  icon: string;
  text: string;
}

export const FeatureListItem: React.FC<FeatureListItemProps> = ({
  icon,
  text,
}) => {
  return (
    <li className="flex gap-2 mb-2">
      <span className="material-symbols-outlined text-primary text-lg">
        {icon}
      </span>{" "}
      <p className="text-greyText">{text}</p>
    </li>
  );
};
