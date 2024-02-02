import { useState } from "react";
import CardTemplate from "./Components/Card Template/CardTemplate";
import "./App.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { VscError } from "react-icons/vsc";
import Modal from "./Components/Modal/Modal";

const CardGenerator = () => {
  const [cardNumber1, setCardNumber1] = useState("");
  const [cardNumber2, setCardNumber2] = useState("");
  const [cardNumber3, setCardNumber3] = useState("");
  const [cardNumber4, setCardNumber4] = useState("");
  const cardNumber = `${cardNumber1} ${cardNumber2} ${cardNumber3} ${cardNumber4}`;
  const sixDigits = cardNumber.slice(0, 7);

  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  const [expYear, setExpYear] = useState("");
  const [expMonth, setExpMonth] = useState("");
  let expDate = `${expYear} / ${expMonth}`;

  const [cvv, setCvv] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);

  const submitHandler = () => {
    if (cardNumber && accountName && accountNumber && expDate && cvv)
      setShowModal(true);
    else setError(true);
  };

  return (
    <>
      {showModal && (
        <Modal>
          <AiFillCheckCircle />
          <h2>کارت شما ذخیره شد.</h2>
          <p>
            اطلاعات کارت جدید وارد شده با موفقیت در پایگاه داده ذخیره و ثبت
            گردید.
          </p>
          <button
            onClick={() => {
              setShowModal(!showModal);
              setCardNumber1("");
              setCardNumber2("");
              setCardNumber3("");
              setCardNumber4("");
              setAccountName("");
              setAccountNumber("");
              setExpMonth("");
              setExpYear("");
              setCvv("");
            }}
          >
            کارت جدید
          </button>{" "}
        </Modal>
      )}

      {error && (
        <Modal>
          <VscError style={{ background: "red" }} />
          <h2>خطای اطلاعات وارد شده</h2>
          <p>
            لطفا اطلاعات خواسته شده را با دقت وارد نموده و بعد دکمه ارسال را
            کلیک نمایید.
          </p>
          <button onClick={() => setError(!error)}>خروج</button>{" "}
        </Modal>
      )}

      <div className="card-app-container">
        <CardTemplate
          cardNumber={cardNumber}
          accountName={accountName}
          accountNumber={accountNumber}
          expDate={expDate}
          cvv={cvv}
          sixDigits={sixDigits}
        />
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="card-app-card-numbers">
            <input
              value={cardNumber1}
              type="text"
              maxLength="4"
              onChange={(e) => setCardNumber1(e.target.value)}
            />
            <input
              value={cardNumber2}
              type="text"
              maxLength="4"
              onChange={(e) => setCardNumber2(e.target.value)}
            />
            <input
              value={cardNumber3}
              type="text"
              maxLength="4"
              onChange={(e) => setCardNumber3(e.target.value)}
            />
            <input
              value={cardNumber4}
              type="text"
              maxLength="4"
              onChange={(e) => setCardNumber4(e.target.value)}
            />
          </div>
          <input
            value={accountName}
            type="text"
            placeholder="اسم دارنده کارت"
            onChange={(e) => setAccountName(e.target.value)}
          />
          <input
            value={accountNumber}
            type="text"
            maxLength="15"
            placeholder="شماره حساب"
            onChange={(e) => setAccountNumber(e.target.value)}
          />
          <div className="card-app-extra-inputs">
            <div>
              <label htmlFor="exp-date">تاریخ انقضا</label>
              <br />
              <select
                onChange={(e) => setExpYear(e.target.value)}
                id="exp-date"
              >
                <option>1403</option>
                <option>1404</option>
                <option>1405</option>
                <option>1406</option>
              </select>
              <select
                onChange={(e) => setExpMonth(e.target.value)}
                id="exp-date"
              >
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </select>
            </div>
            <div>
              <label htmlFor="card-app-cvv">CVV</label>
              <br />
              <input
                value={cvv}
                type="text"
                maxLength="4"
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>
          </div>
          <button onClick={submitHandler}>ارسال</button>
        </form>
      </div>
    </>
  );
};

export default CardGenerator;
