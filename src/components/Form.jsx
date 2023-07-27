import { useRef, useState } from "react";
import { BsChevronRight } from "react-icons/bs";

const Form = () => {
  const [validation, setValidation] = useState(true);

  // useRef hook
  const input = useRef(null);

  // Handle submit
  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !input.current.value.includes("@") ||
      !input.current.value.includes(".")
    ) {
      setValidation(false);
      console.log("not validated");
      return;
    }

    console.log(input.current.value);
    input.current.value = "";
    setValidation(true);
  };

  // Component render
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="wrapper">
        <input
          className={validation ? "email" : "email error-state"}
          type="email"
          name="email"
          placeholder="Email Address"
          ref={input}
        />
        <button type="submit" aria-label="send form button">
          <BsChevronRight />
        </button>
      </div>

      {validation || (
        <p className="error-message">Please provide a valid email</p>
      )}
    </form>
  );
};

export default Form;
