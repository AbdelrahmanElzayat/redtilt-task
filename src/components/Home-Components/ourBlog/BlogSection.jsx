import React from "react";
import blogImg from "../../../assets/images/blog.png";
import { Link } from "react-router-dom";
const BlogSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="sectionHeading text-center pb-10 flex flex-col justify-center items-center gap-5">
          <span className="text-xl font-light text-slate-400">
            Read Our Blog
          </span>
          <h4 className="text-xl md:text-3xl lg:text-4xl text-center md:w-1/3 font-semibold">
            Read Daily news about startup companies
          </h4>
        </div>
        <div className="dark:bg-[#1A0202] bg-background-dark/100 flex flex-col lg:flex-row gap-5 py-16 px-5 rounded-lg border-[1px] border-slate-500">
          <div className="blogImg rounded-lg overflow-hidden">
            <img src={blogImg} alt="blog" className="max-w-full object-cover" />
          </div>
          <div className="blogContent flex flex-col justify-between gap-5 text-text-dark">
            <div className="blog-head">
              <h5 className="text-xl md:text-2xl lg:text-3xl font-[500] mb-4">
                Not Another Framework
              </h5>
              <p className="opacity-[.6] text-xs md:text-sm mb-4">
                We brought all the Remix goodies over to React Router and made
                improvements in the process.Now it's time to bring those
                improved APIs back over to Remix where they started!
              </p>
              <hr className="opacity-[.5]" />
            </div>
            <div className="blogLink flex justify-between items-center mt-auto">
              <ul className="flex flex-col justify-start items-start">
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33331 16.1753C12.7516 16.1753 16.3333 12.5936 16.3333 8.17529C16.3333 3.75701 12.7516 0.175291 8.33331 0.175291C3.91504 0.175291 0.333313 3.75701 0.333313 8.17529C0.333313 12.5936 3.91504 16.1753 8.33331 16.1753ZM12.0404 6.8824C12.4309 6.49187 12.4309 5.85871 12.0404 5.46819C11.6499 5.07766 11.0167 5.07766 10.6262 5.46819L7.33331 8.76108L6.04042 7.46819C5.6499 7.07766 5.01673 7.07766 4.62621 7.46819C4.23568 7.85871 4.23568 8.49187 4.62621 8.8824L6.62621 10.8824C7.01673 11.2729 7.6499 11.2729 8.04042 10.8824L12.0404 6.8824Z"
                      fill="#B63636"
                    />
                  </svg>
                  Collaboration Tools
                </li>
                <li className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.33331 16.1753C12.7516 16.1753 16.3333 12.5936 16.3333 8.17529C16.3333 3.75701 12.7516 0.175291 8.33331 0.175291C3.91504 0.175291 0.333313 3.75701 0.333313 8.17529C0.333313 12.5936 3.91504 16.1753 8.33331 16.1753ZM12.0404 6.8824C12.4309 6.49187 12.4309 5.85871 12.0404 5.46819C11.6499 5.07766 11.0167 5.07766 10.6262 5.46819L7.33331 8.76108L6.04042 7.46819C5.6499 7.07766 5.01673 7.07766 4.62621 7.46819C4.23568 7.85871 4.23568 8.49187 4.62621 8.8824L6.62621 10.8824C7.01673 11.2729 7.6499 11.2729 8.04042 10.8824L12.0404 6.8824Z"
                      fill="#B63636"
                    />
                  </svg>
                  Collaboration Tools
                </li>
              </ul>
              <Link
                to={"/"}
                className="rounded-full bg-background-light p-2 md:p-3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 22 20"
                  fill="none"
                >
                  <path
                    d="M0.904578 18.0138C0.465238 18.4532 0.465238 19.1655 0.904578 19.6048C1.34392 20.0442 2.05623 20.0442 2.49557 19.6048L0.904578 18.0138ZM18.9675 1.54189H20.0925C20.0925 0.920565 19.5888 0.416885 18.9675 0.416885V1.54189ZM1.70007 0.416885C1.07875 0.416885 0.575073 0.920565 0.575073 1.54189C0.575073 2.16321 1.07875 2.66689 1.70007 2.66689V0.416885ZM17.8425 18.8093C17.8425 19.4306 18.3462 19.9343 18.9675 19.9343C19.5888 19.9343 20.0925 19.4306 20.0925 18.8093H17.8425ZM2.49557 19.6048L19.763 2.33738L18.172 0.746391L0.904578 18.0138L2.49557 19.6048ZM1.70007 2.66689H18.9675V0.416885H1.70007V2.66689ZM17.8425 1.54189V18.8093H20.0925V1.54189H17.8425Z"
                    fill="#A70D0D"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
        <Link
          to={"/"}
          className="rounded-lg p-2 border-2 border-text-dark mt-10 block mx-auto w-fit text-lg md:text-xl dark:bg-transparent bg-primary-dark text-text-dark hover:bg-primary-light/90"
        >
          Read more
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
