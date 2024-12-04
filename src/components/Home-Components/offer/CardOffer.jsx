import React from "react";

const CardOffer = ({ num, name, icon, list }) => {
  return (
    <div className="dark:bg-primary-dark bg-background-dark/100 rounded-xl h-[400px] pt-16 pl-10 overflow-hidden relative">
      <div className="absolute -top-20 -left-10 text-[200px] opacity-[.1] text-text-dark font-semibold z-30">
        {num}
      </div>
      <h4 className="flex items-center justify-start gap-4 text-2xl relative z-40 text-text-dark">
        {icon}
        {name}
      </h4>
      <div className="OfferList dark:bg-[#F88D8D40] bg-text-dark/10 rounded-xl p-4 h-full mt-5 ml-10">
        <ul className="flex flex-col justify-start items-start gap-3">
          {list?.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm font-light text-nowrap text-text-dark"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M8.4365 0.633464C4.21984 0.633464 0.769836 4.08346 0.769836 8.30013C0.769836 12.5168 4.21984 15.9668 8.4365 15.9668C12.6532 15.9668 16.1032 12.5168 16.1032 8.30013C16.1032 4.08346 12.6532 0.633464 8.4365 0.633464ZM6.90317 12.1335L3.06984 8.30013L4.15084 7.21913L6.90317 9.9638L12.7222 4.1448L13.8032 5.23346L6.90317 12.1335Z"
                  fill="#F6E7E7"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CardOffer;
