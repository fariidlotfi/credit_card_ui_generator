import { useEffect, useState } from "react";
import "./CardTemplate.css";

const CardBox = (params) => {
  let cardNumber = params.cardNumber;
  let accountName = params.accountName;
  let accountNumber = params.accountNumber;
  let expDate = params.expDate;
  let cvv = params.cvv;
  let sixDigits = `${params.sixDigits}`;
  sixDigits = sixDigits.replace(" ", "");
  const [bankName, setBankName] = useState("");

  useEffect(() => {
    switch (sixDigits) {
      case "603799":
        setBankName("بانک ملی ایران");
        break;
      case "589210":
        setBankName("بانک سپه");
        break;
      case "627648":
        setBankName("بانک توسعه صادرات");
        break;
      case "627961":
        setBankName("بانک صنعت و معدن");
        break;
      case "603770":
        setBankName("بانک کشاورزی");
        break;
      case "628023":
        setBankName("بانک مسکن");
        break;
      case "627760":
        setBankName("پست بانک ایران");
        break;
      case "502908":
        setBankName("بانک توسعه تعاون");
        break;
      case "627412":
        setBankName("بانک اقتصاد نوین");
        break;
      case "622106":
        setBankName("بانک پارسیان");
        break;
      case "502229":
        setBankName("بانک پاسارگاد");
        break;
      case "627488":
        setBankName("بانک کارآفرین");
        break;
      case "621986":
        setBankName("بانک سامان");
        break;
      case "639346":
        setBankName("بانک سینا");
        break;
      case "639607":
        setBankName("بانک سرمایه");
        break;
      case "636214":
        setBankName("بانک تات");
        break;
      case "502806":
        setBankName("بانک شهر");
        break;
      case "502938":
        setBankName("بانک دی");
        break;
      case "603769":
        setBankName("بانک صادرات");
        break;
      case "610433":
        setBankName("بانک ملت");
        break;
      case "627353":
        setBankName("بانک تجارت");
        break;
      case "589463":
        setBankName("بانک رفاه");
        break;
      case "627381":
        setBankName("بانک انصار");
        break;
      case "639370":
        setBankName("بانک مهر اقتصاد");
        break;

      default:
        setBankName("");
        break;
    }
  }, [sixDigits]);

  return (
    <div className="card-app-card-box">
      <div className="card-app-card-header">
        <div className="card-app-header-right">{bankName}</div>
        <div className="card-app-header-left">
          <p>
            debit
            <br />
            card
          </p>
        </div>
      </div>

      <div className="card-app-card-content">
        <div className="card-app-card-number">
          <h2 className="card-app-h2">{cardNumber}</h2>
          <p> {accountName}</p>
        </div>
        <div className="card-app-content-bottom">
          <div className="card-app-extra-info-right">{accountNumber}</div>
          <div className="card-app-extra-info-left">
            <p>{expDate}</p>
            <p>{cvv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBox;
