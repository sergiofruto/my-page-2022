import React from "react";

export default function WorkationHero() {
  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-5 bg-white">
      <div className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2">
        <div className="xl:max-w-xl">
          <img className="h-10" src="/logo-brand.svg" alt="workation" />
          <img
            className="mt-6 sm:mt-8 rounded-lg shadow-sm sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
            src="/beach-work.jpg"
            alt="Beach Photo"
          />
          <h1 className="mt-6 sm:mt-8 sm:text-4xl text-2xl lg:text-3xl font-bold text-gray-900 xl:text-4xl">
            You can work from everywhere.
            <br className="hidden lg:inline" />
            <span className="text-brand block">Take advantage of it.</span>
          </h1>
          <p className="mt-2 sm:mt-4 sm:text-xl text-gray-600">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum,
            modi odio. Cupiditate, totam earum? Dignissimos, saepe eius neque
            blanditiis beatae odio atque odit? Exercitationem, architecto.
            Dignissimos provident soluta cumque aspernatur?
          </p>
          <div className="mt-4 space-x-2">
            <a
              href=""
              className="btn btn-primary px-10 hover:-translate-y-0.5 transform transition"
            >
              Book your escape
            </a>
            <a href="" className="btn btn-secondary px-10">
              Learn More
            </a>
          </div>
        </div>
      </div>
      <div className="hidden relative lg:block 2xl:col-span-3">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="/beach-work.jpg"
          alt="Beach Photo"
        />
      </div>
    </div>
  );
}