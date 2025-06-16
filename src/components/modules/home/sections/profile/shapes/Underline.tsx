const Underline = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width={196}
      height={7}
      viewBox="0 0 196 7"
      fill="none"
      stroke="hsl(var(--primary))"
      strokeWidth={2}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M1 5.42562C31.823 3.26103 51.4008 2.29455 87.5 1.42562C131.319 0.544218 157.097 1.02587 195.5 2.92556" />
    </svg>
  );
};

export default Underline;
