const DottedBackground = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id=":r0:"
          width={16}
          height={16}
          patternUnits="userSpaceOnUse"
          patternContentUnits="userSpaceOnUse"
          x={0}
          y={0}
        >
          <circle id="pattern-circle" cx={1} cy={1} r={1} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#:r0:)" />
    </svg>
  );
};

export default DottedBackground;
