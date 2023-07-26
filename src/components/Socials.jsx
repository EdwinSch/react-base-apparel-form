import social from "../data";

const Socials = () => {
  return (
    <section className="socials-container">
      {social.map((icon) => {
        return (
          <a key={icon.id} href={icon.url} target="blank">
            {icon.icon}
          </a>
        );
      })}
    </section>
  );
};

export default Socials;
