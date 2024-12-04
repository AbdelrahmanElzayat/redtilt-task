import React from "react";

const NewsLetterSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="dark:bg-[#390404] bg-gray-300 newsContainer sm:flex justify-between items-center p-4 rounded-lg">
          <div className="newsText flex flex-col mb-4 sm:mb-0">
            <span>Newsletter</span>
            <p>
              Be the first one to know about insights, technologies and
              innovations.
            </p>
          </div>
          <button className="px-4 py-3 bg-primary-dark hover:bg-primary-dark/90 rounded-lg text-text-dark">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetterSection;
