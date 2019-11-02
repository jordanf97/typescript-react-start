import React from 'react';

const Index: React.FC = () => {
  return (
    <div className={"App"}>
      <div className={"w-full max-w-md mx-auto my-5"}>
        <div className={"bg-white shadow-md rounded px-12 py-8 pt-8"}>
          <h1 className={"text-center text-2xl mb-5"}> Base TypeScript React App </h1>
          <p className={"text-center"}>
            This is a base TypeScript React app utilizing tailwindcss, postcss and purgecss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
