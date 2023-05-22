import React from "react";

import "../walletRequest/WalletRequest.css";

const WalletRequest = () => {
  return (
    <>
      <div className="bankaccount_component flex-wrap d-flex ">
        <div className=" form_container mt-4">
          <div className="input_form-1 d-sm-flex">
            <div className="input_container m-2">
              <select class="form-select input_box" aria-label=" ">
                <option selected>Select bank</option>
                <option value="1">SBI</option>
                <option value="2">HDFC</option>
                <option value="3">AXIS</option>
              </select>
            </div>
            <div className="input_container m-2">
              <select
                class="form-select input_box"
                aria-label="Default select example"
              >
                <option placeholder="none" selected>
                  Select Payment Option
                </option>
                <option value="1">UPI</option>
                <option value="2">Debit Card</option>
                <option value="3">Credit card</option>
              </select>
            </div>
          </div>
          <div className="input_form-2 d-sm-flex">
            <div className="tid_section ">
              <h6 className="tid_heading m-2">TID/UTR NO</h6>
              <div className="input-container m-2">
                <input
                  class="form-select input_box"
                  placeholder="Type here"
                ></input>
              </div>
            </div>
            <div className="amount_section ">
              <h6 className="amount_heading m-2">Amount</h6>
              <div className="input-container m-2">
                <input
                  class="form-select input_box"
                  placeholder="Type here"
                ></input>
              </div>
            </div>
          </div>
          <div className="input_form-3 d-sm-flex">
            <div className="amount_section ">
              <h6 className="amount_heading m-2">Recieve</h6>
              <div className="input-container-2 m-2">
                <form class="form-control" action="">
                  <div class="file-input">
                    <label for="file" class="file-label">
                      Choose File
                    </label>
                    <input
                      className="form-select input_box"
                      type="file"
                      id="file"
                      class="file-input"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="amount_section ">
              <h6 className="amount_heading m-2">Transaction data</h6>
              <div className="input-container-2 ">
                <input
                  className="form-control input_box row_input-3"
                  type="text"
                ></input>
              </div>
            </div>{" "}
            <div className="amount_section ">
              <h6 className="amount_heading m-2">Transaction time</h6>
              <div className="input-container-2 m-2">
                <input
                  className="form-control input_box row_input-3"
                  type="text"
                ></input>
              </div>
            </div>
          </div>
          <div className="bank_remark mx-2  ">
            <p className="remark_text">
              Remark (If Deposited Mode is Cheque, Please Enter your Bank Name,
              BankBranch, Account Number, AccountHolderName)
            </p>
          </div>
          <div className="input-form-4">
            <input className="form-control feedback_box" type="text"></input>
          </div>
          <p className="bottom_heading text-center mt-1">
            Deposit Slip Mandatory Only for Bank Branch And ATM/Cash deposit
            Machine
          </p>
          <p className="bottom_heading-2 mx-2">
            I hereby confirm that the deposit referred to above has been made by
            me / on my behalf / under my instructions. I accept full
            responsibility for the deposited sum and shall defend and hold
            harmless Paydeer Services Private Limited against any inquiries in
            relation to the same
          </p>
          <div className="d-flex justify-content-center">
            <button className="request_btn mt-2">Request Wallet</button>
          </div>
        </div>
        <div>
          <div
            className=" d-sm-flex m-4 p-3 "
            style={{
              background: "#f9f9f9",
              borderRadius: "10px",
              width: "24.93rem",
              height: "22.18rem",

              flexDirection: "row",
            }}
          >
            <div className=" container account_details">
              <h6 style={{ color: "#18939B" }}>Bank Account Details</h6>
              <div className="bank_details mt-4">
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Bank Name : ICICI BANK
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Account Number : 677205601624
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Bank Name :IFSC Code : ICIC0006772
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Bank Name : Branch Name : Jaipur Chitrakoot Marg Branch
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Bank Name :Address : 123,Vidyut Nagar-C,Chitrakoot Marg,Ajmer
                </p>
                <p
                  style={{
                    fontSize: "12px",
                  }}
                >
                  Road,Jaipur,Rajasthan-302021
                </p>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            <button className="help_btn m-4">Help?</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WalletRequest;
