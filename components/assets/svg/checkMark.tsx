import React, { FC } from "react";
import { SVGProps } from "types/types";

const CheckMark: FC<SVGProps> = ({ className, ...props }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#13C47F"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19.104 5.9549C19.2064 5.85045 19.3285 5.76747 19.4634 5.71082C19.5982 5.65418 19.743 5.625 19.8892 5.625C20.0355 5.625 20.1803 5.65418 20.3151 5.71082C20.45 5.76747 20.5721 5.85045 20.6745 5.9549C21.1035 6.3884 21.1095 7.0889 20.6895 7.5299L11.82 18.0149C11.7193 18.1255 11.5971 18.2144 11.4609 18.2761C11.3246 18.3378 11.1772 18.3711 11.0277 18.3739C10.8782 18.3767 10.7296 18.349 10.5912 18.2924C10.4527 18.2358 10.3273 18.1516 10.2225 18.0449L4.8255 12.5759C4.61736 12.3636 4.50076 12.0782 4.50076 11.7809C4.50076 11.4836 4.61736 11.1982 4.8255 10.9859C4.92787 10.8815 5.05005 10.7985 5.18488 10.7418C5.31972 10.6852 5.4645 10.656 5.61075 10.656C5.757 10.656 5.90178 10.6852 6.03662 10.7418C6.17145 10.7985 6.29363 10.8815 6.396 10.9859L10.974 15.6254L19.074 5.9879C19.0833 5.97631 19.0933 5.96529 19.104 5.9549Z" />
    </svg>
  );
};

export default CheckMark;