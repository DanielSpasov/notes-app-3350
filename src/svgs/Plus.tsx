import { FC, SVGAttributes } from 'react';

const Plus: FC<SVGAttributes<SVGElement>> = props => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 5v14m-7-7h14"
      />
    </svg>
  );
};

export default Plus;
