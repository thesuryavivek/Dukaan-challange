import { FC } from "react";

interface CardProps {
  heading: string;
  stat: string;
}

const Card: FC<CardProps> = ({ heading, stat }) => {
  return (
    <div className="bg-white p-5 flex flex-col gap-4 rounded-md flex-1 shadow-custom">
      <h5>{heading}</h5>
      <span className="font-medium text-3xl">{stat}</span>
    </div>
  );
};

export default Card;
