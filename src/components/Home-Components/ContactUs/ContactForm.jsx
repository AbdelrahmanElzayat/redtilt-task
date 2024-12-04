import React from "react";

const ContactForm = () => {
  return (
    <div className="form-contact rounded-lg shadow-md border-[1px] dark:border-text-light border-text-light w-full flex-1">
      <h6 className="text-lg font-semibold mb-4 border-b-2 py-2 px-4 dark:border-text-light border-text-light">
        Tell us about yourself.
      </h6>
      <form className="flex flex-col gap-4 p-4">
        <div className="flex flex-col">
          <label htmlFor="fullName" className="mb-1 text-xs dark:text-gray-400">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="ABDELRAHMAN ELZAYAT"
            className="border border-gray-300 dark:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light dark:bg-[#412D2D80] text-sm p-2"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="workEmail"
            className="mb-1 text-xs dark:text-gray-400"
          >
            Work Email
          </label>
          <input
            type="email"
            id="workEmail"
            placeholder="abdo530@hotmail.com"
            className="border border-gray-300 dark:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light dark:bg-[#412D2D80] text-sm p-2"
          />
          <label
            htmlFor="companySize"
            className="mb-1 text-xs dark:text-gray-400 mt-4"
          >
            Company Size
          </label>
          <select
            id="companySize"
            className="border border-gray-300 dark:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light dark:bg-[#412D2D80] text-sm p-2"
          >
            {Array.from({ length: 20 }, (_, i) => (
              <option key={i + 1} value={i + 1} className="dark:bg-[#412D2D80]">
                {i + 1}
              </option>
            ))}
          </select>
          <label
            htmlFor="messgae"
            className="mb-1 text-xs dark:text-gray-400 mt-4"
          >
            how can we help?
          </label>
          <textarea
            rows={4}
            className="resize-none border border-gray-300 dark:border-none rounded-lg focus:outline-none focus:ring-2 focus:ring-text-light dark:bg-[#412D2D80] text-sm p-2"
            placeholder="I am interested in redtilt for my team. i would like to learn more about it...."
          />
        </div>
        <div className="submition flex justify-between items-center mt-4">
          <div className="submitMail dark:opacity-[.5]">
            You Can Also Email Us At <br />
            Apac@Redtilt.Team
          </div>
          <button
            type="submit"
            className="bg-primary-dark text-white font-semibold rounded-lg p-2 py-4 hover:bg-primary-dark/90 transition"
          >
            Submit Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
