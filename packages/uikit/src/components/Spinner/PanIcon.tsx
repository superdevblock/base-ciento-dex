import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <svg width="46" height="44" viewBox="0 0 46 44" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" width="42" height="44" rx="8" fill="#0066FF"></rect>
      <path
        d="M27.1537 35.0737L27.1537 29.0998C27.9266 28.9907 28.6131 28.7679 29.2132 28.4315C29.8225 28.095 30.3407 27.6631 30.7681 27.1357C31.1955 26.6084 31.5228 25.9992 31.7501 25.3081C31.9774 24.6261 32.0911 23.8851 32.0911 23.0849C32.0911 21.6392 31.7319 20.3798 31.0136 19.3069C30.3044 18.2339 29.2678 17.4019 27.9039 16.8109C26.5491 16.2199 24.9033 15.9244 22.9665 15.9244C20.9752 15.9244 19.3021 16.2199 17.9473 16.8109C16.5925 17.411 15.5695 18.2476 14.8785 19.3205C14.1874 20.3935 13.8419 21.6346 13.8419 23.044C13.8419 23.8351 13.9465 24.567 14.1556 25.2399C14.3647 25.9219 14.6693 26.5265 15.0694 27.0539C15.4786 27.5813 15.9742 28.0177 16.5561 28.3633C17.138 28.7179 17.8018 28.9634 18.5474 29.0998L18.5201 35.0737C17.2381 34.9192 16.0014 34.5327 14.8103 33.9144C13.6282 33.3052 12.5689 32.4823 11.6324 31.4457C10.7049 30.4182 9.96838 29.1907 9.42281 27.7631C8.88634 26.3447 8.6181 24.7398 8.6181 22.9485C8.6181 20.4571 9.18186 18.2294 10.3094 16.2653C11.4369 14.3104 13.069 12.7646 15.2058 11.628C17.3426 10.5005 19.9295 9.93676 22.9665 9.93676C26.0126 9.93676 28.604 10.5096 30.7408 11.6553C32.8776 12.801 34.5052 14.3559 35.6236 16.3199C36.7512 18.2839 37.3149 20.4935 37.3149 22.9485C37.3149 24.567 37.0876 26.0673 36.6329 27.4494C36.1783 28.8406 35.5145 30.0727 34.6416 31.1457C33.7778 32.2186 32.7185 33.0915 31.4637 33.7644C30.2089 34.4463 28.7722 34.8828 27.1537 35.0737Z"
        fill="white"
      ></path>
    </svg>
  );
};

export default Icon;
