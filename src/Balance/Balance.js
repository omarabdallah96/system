import { Button, TextField } from "@material-ui/core";
import { useEffect, useState } from "react";
import React from "react";
import { db } from "../firebase";

function Balance(props) {
  const [balance, setBalance] = useState();
  const [data, setData] = useState([]);
  const checkBalance = () => {
    if (balance) {
      db.collection("persons")
        //where phone number is the phone number
        .where("phone", "==", balance)

        .get()
        .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            setData(doc.data());
          });
        })
        .catch(function (error) {
          console.log("Error getting documents: ");
        });
    } else {
      alert("No balance");
    }
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        placeContent: "center",
        placeItems: "center",
      }}
    >
        <h6>
            قم بكتابة رقم هاتفك للحصول على حسابك لدينا
        </h6>
      <TextField
        variant="outlined"
        margin="normal"
        required
        style={{
          width: "50%",
        }}
        placeholder="الرجاء كتابة رقم الهاتف "
        id="todo"
        label="رقم الهاتف "
        name="todo"
        type="number"
        autoComplete="off"
        value={balance}
        onChange={(event) => setBalance(event.target.value)}
      />
      <Button
        disabled={balance && balance.length > 7 ? false : true}
        onClick={checkBalance}
        variant="contained"
      >
        كشف حساب
      </Button>
      <div style={{ textAlign: "center", marginTop: 30 }}>
        {data && Object.keys(data).length > 0 ? (
          <div>
            <div>
              {balance && balance.length > 7 ? (
                <div>
                  <span
                    style={{
                      background: "green",
                      padding: 10,
                      color: "white",
                      marginTop: 10,
                      borderRadius: 10,
                      fontSize: 20,
                      boxShadow: "-1px -1px 24px -7px rgba(0,0,0,0.75)"

                    }}
                  >
                    {" "}
                    حسابك هو : &nbsp;
                    {data.balance}
                  </span>
                </div>
              ) : null}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
export default Balance;
