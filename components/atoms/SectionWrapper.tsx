interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section className={`py-20 border-b border-mint-300 ${className}`}>
      {children}
    </section>
  );
}
