import useInput from "../Hooks/use-input";
import '../Style/Form.css'

const notEmpty = value => value.trim() !== "";
const setUpEmail = value => value.includes('@');



const Form = props => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(notEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(notEmpty);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(setUpEmail);
  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      
      return;
    }
    console.log("Submitted");

    console.log(firstNameValue, lastNameValue);

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const lastNameClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";
  const emailClass = emailHasError
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
      <h4>Make a Reservation!</h4>
        <div className={firstNameClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p className="error-text">Please enter a valid First Name</p>}
        </div>
        <div className={lastNameClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
           {lastNameHasError && <p className="error-text">Please enter a valid Last Name</p>}
        </div>
        <div className={emailClass}>
          <label htmlFor="name">Email Address</label>
          <input
            type="email"
            id="email"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && <p className="error-text">Please enter a valid Email address</p>}
        </div>
      <div className="form-btn">
        <button disabled={!formIsValid} onClick={props.onClick}>Submit</button>
      </div>
      </div>
    </form>
  );
};
export default Form;
