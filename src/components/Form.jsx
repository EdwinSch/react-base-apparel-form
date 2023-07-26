import { BsChevronRight } from "react-icons/bs";

const Form = () => {
  return (
    <form>
      <input type="email" name="email" placeholder="Email Address" />
      <button type="submit">
        <BsChevronRight />
      </button>
    </form>
  );
};

export default Form;
