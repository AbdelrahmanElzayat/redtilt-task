import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <div className="containerForm flex flex-col lg:flex-row gap-4 justify-between items-start">
          <div className="contact-info flex flex-col flex-[1.5]">
            <span className="text-xl font-light text-slate-400">
              Got a project in mind ?
            </span>
            <h6 className="text-4xl mb-4">Reverse a Call</h6>
            <ul className="flex flex-col gap-2 dark:opacity-[.5] mb-5">
              <li className="flex  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3337 19.7764C15.6357 19.7764 19.9337 15.4783 19.9337 10.1764C19.9337 4.87443 15.6357 0.576366 10.3337 0.576366C5.03179 0.576366 0.733719 4.87443 0.733719 10.1764C0.733719 15.4783 5.03179 19.7764 10.3337 19.7764ZM14.7822 8.6249C15.2509 8.15627 15.2509 7.39647 14.7822 6.92784C14.3136 6.45921 13.5538 6.45921 13.0852 6.92784L9.13372 10.8793L7.58225 9.32784C7.11362 8.85921 6.35382 8.85921 5.88519 9.32784C5.41656 9.79647 5.41656 10.5563 5.88519 11.0249L8.28519 13.4249C8.75382 13.8935 9.51362 13.8935 9.98225 13.4249L14.7822 8.6249Z"
                    fill="#A92323"
                  />
                </svg>
                An in depth session to understand your needs
              </li>
              <li className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3337 19.7764C15.6357 19.7764 19.9337 15.4783 19.9337 10.1764C19.9337 4.87443 15.6357 0.576366 10.3337 0.576366C5.03179 0.576366 0.733719 4.87443 0.733719 10.1764C0.733719 15.4783 5.03179 19.7764 10.3337 19.7764ZM14.7822 8.6249C15.2509 8.15627 15.2509 7.39647 14.7822 6.92784C14.3136 6.45921 13.5538 6.45921 13.0852 6.92784L9.13372 10.8793L7.58225 9.32784C7.11362 8.85921 6.35382 8.85921 5.88519 9.32784C5.41656 9.79647 5.41656 10.5563 5.88519 11.0249L8.28519 13.4249C8.75382 13.8935 9.51362 13.8935 9.98225 13.4249L14.7822 8.6249Z"
                    fill="#A92323"
                  />
                </svg>
                Learn which plan is right for your team
              </li>
              <li className="flex  gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.3337 19.7764C15.6357 19.7764 19.9337 15.4783 19.9337 10.1764C19.9337 4.87443 15.6357 0.576366 10.3337 0.576366C5.03179 0.576366 0.733719 4.87443 0.733719 10.1764C0.733719 15.4783 5.03179 19.7764 10.3337 19.7764ZM14.7822 8.6249C15.2509 8.15627 15.2509 7.39647 14.7822 6.92784C14.3136 6.45921 13.5538 6.45921 13.0852 6.92784L9.13372 10.8793L7.58225 9.32784C7.11362 8.85921 6.35382 8.85921 5.88519 9.32784C5.41656 9.79647 5.41656 10.5563 5.88519 11.0249L8.28519 13.4249C8.75382 13.8935 9.51362 13.8935 9.98225 13.4249L14.7822 8.6249Z"
                    fill="#A92323"
                  />
                </svg>
                Get onboarding help
              </li>
            </ul>
            <span className="mb-1 dark:opacity-[.5]">
              Technical support or some query?
            </span>
            <span className="dark:opacity-[.5] flex items-center gap-2">
              Contact support
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="13"
                viewBox="0 0 15 13"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.68461 0.527253C8.15324 0.0586243 8.91303 0.0586243 9.38166 0.527253L14.1817 5.32725C14.6503 5.79588 14.6503 6.55568 14.1817 7.02431L9.38166 11.8243C8.91303 12.2929 8.15324 12.2929 7.68461 11.8243C7.21598 11.3557 7.21598 10.5959 7.68461 10.1273L10.4361 7.37578L1.33313 7.37578C0.670392 7.37578 0.133133 6.83852 0.133133 6.17578C0.133133 5.51304 0.670392 4.97578 1.33313 4.97578H10.4361L7.68461 2.22431C7.21598 1.75568 7.21598 0.995882 7.68461 0.527253Z"
                  fill="#A5A5A5"
                />
              </svg>
            </span>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
