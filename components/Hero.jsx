import React from "react";

const Hero = ({isSuccess}) => {
  return (
    <section className="hero">
      <div className="container hero__container">

      {isSuccess ? (

        <h1>Succesfully checked out cart items! (Test Payment)</h1>
      ) : (
        <>

        <h1>Discover the Perfect Brew</h1>
      <p>Welcome to our enchanting tea emporium, where every sip is an invitation to savor tranquility. </p>
      <button className="btn btn--white"><a href="#products">See Our Products</a></button>
        </>

      )}
      

      </div>
    </section>
  );
};

export default Hero;
