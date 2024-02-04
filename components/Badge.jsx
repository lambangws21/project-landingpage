"use client";

import CountUp from "react-countup";

const Badge = ({
  containerStyles,
  icon,
  endCounNum,
  endCountText,
  bagdeText,
}) => {
  return (
    <div className={`badge ${containerStyles}`}>
      <div className="text-3xl text-primary">{icon}</div>
      <div className="flex items-center gap-x-2">
        <div className="text-3xl font-bold leading-none text-primary">
          <CountUp end={endCounNum} delay={1} duration={4} />
          {endCountText}
        </div>
        <div className="max-w-[70px] leading-none font-medium text-slate-900">{bagdeText}</div>
      </div>
    </div>
  );
};

export default Badge;
