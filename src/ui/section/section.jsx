import "./section.css";
const SectionWrapper = ({ variant, children }) => {
  return (
    <section className="section" data-variant={variant}>
      {children}
    </section>
  );
};
export default SectionWrapper;
