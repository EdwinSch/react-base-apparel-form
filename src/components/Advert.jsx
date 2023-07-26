import Logo from "./Logo";
import Form from "./Form";
import Socials from "./Socials";

const Advert = () => {
  return (
    <section className="advert-container">
      <Logo />
      <h1>
        <span>we're</span>coming <br /> soon
      </h1>
      <p>
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <Form />
      <Socials />
    </section>
  );
};

export default Advert;
