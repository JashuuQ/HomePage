import React from "react";

interface Publication {
  title: string;
  description: string;
}

const publications: Publication[] = [
  {
    title: "Publication 1",
    description: "Brief description of Publication 1",
  },
  {
    title: "Publication 2",
    description: "Brief description of Publication 2",
  },
];

const Publications: React.FC = () => {
  return (
    <div>
      <h1>Publications</h1>
      <ul>
        {publications.map((publication, index) => (
          <li key={index}>
            <strong>{publication.title}</strong>: {publication.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Publications;
