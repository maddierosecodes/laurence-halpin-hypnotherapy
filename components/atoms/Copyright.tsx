interface CopyrightProps {
  year: number;
  companyName: string;
  className?: string;
}

export const Copyright = ({
  year,
  companyName,
  className = "",
}: CopyrightProps) => {
  return (
    <div className={`text-sm text-gray-600 font-secondary ${className}`}>
      © {year} {companyName}. All rights reserved.
    </div>
  );
};
