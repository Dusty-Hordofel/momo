type Props = {};

const Padlock = (props: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      role="img"
      fill="none"
      color="#aa8375"
      className="w-6 h-6"
      {...props}
    >
      <path
        fill="currentColor"
        d="M17.25 9h-.75V7.5C16.5 5.02 14.48 3 12 3S7.5 5.02 7.5 7.5V9h-.75C5.51 9 4.5 10.01 4.5 11.25v7.5C4.5 19.99 5.51 21 6.75 21h10.5c1.24 0 2.25-1.01 2.25-2.25v-7.5c0-1.24-1.01-2.25-2.25-2.25zM9 7.5c0-1.65 1.35-3 3-3s3 1.35 3 3V9H9V7.5zm3.75 8.86V18h-1.5v-1.64c-.87-.31-1.5-1.14-1.5-2.11C9.75 13.01 10.76 12 12 12s2.25 1.01 2.25 2.25c0 .98-.63 1.8-1.5 2.11z"
      />
    </svg>
  );
};

export default Padlock;
