import Menu from "../Menu/Menu";

const Template = ({ children }: any) => {
  return (
    <div className="page">
      <section>
        <Menu />
      </section>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
export default Template;
