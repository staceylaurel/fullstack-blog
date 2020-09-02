import * as React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import api from "../utils/api-service";

//component on the DOM
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const Donate: React.FC<DonateProps> = (props) => {
  const [name, setName] = React.useState("");
  const [amount, setAmount] = React.useState("");

  const history = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const cardElement = elements.getElement(CardElement);
    const result = await stripe.createToken(cardElement, {name});
    console.log(result);
    console.log(result.token.id);
    const resultCharge = await api('/api/donate', 'POST', { token: result.token.id, amount});
    console.log(resultCharge);
  };

  return (
    <>
      <div>
        <h1 className="d-flex justify-content-center p-2">Donate today and SAVE the Clocktower!</h1>
        <form className="form-group border border-primary rounded shadow-lg p-3">
          <div className="form-group">
            <label>Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="name"
              className="form-control"
              id="exampleInputname1"
            />
          </div>
          <div className="form-group">
            <label>Donation Amount</label>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              type="amount"
              className="form-control"
              id="exampleInputAmount1"
              aria-describedby="AmountHelp"
            />
            <small id="AmountHelp" className="form-text text-muted">
              We'll never share your amount with anyone else.
            </small>
          </div>
          <CardElement className= 'form-control' />
          <button
            onClick={handleSubmit}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </div>

      <Link className="d-inline p-2" to="/">
        Go Back
      </Link>
    </>
  );
};

interface DonateProps {}

export default Donate;
