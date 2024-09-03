import React from "react";

const BrandsLogo = () => {
  return (
    <>
      <div className="container mb-12 mt-12 sm:mt-0">
        <h1 className="text-center">Powering next-gen companies</h1>
        <div className="py-6 md:px-32 flex flex-wrap items-center justify-evenly gap-3">
          <img src='1.svg' alt="ClickUp" />
          <img src='2.svg' alt="Dropbox" />
          <img src='3.svg' alt="segment" />
          <img src='4.svg' alt="GitHub" />
          <img src='5.svg' alt="intuit" />
        </div>
      </div>
    </>
  );
};

export default BrandsLogo;