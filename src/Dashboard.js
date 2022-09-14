import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router";
import "./Dashboard.css";
import { auth, db, logout } from "./firebase";
import Persons from "./Persons";
import Product from "./Product/product";

import {
  Assessment,
  ExitToApp,
  Home,
  LocalCafe,
  Person,
  Phone,
} from "@material-ui/icons";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { app_data_config } from "./app_config";

function Dashboard() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const history = useHistory();
  const [toggle, settoggle] = useState(true);
  const [title, settitle] = useState("Person");

  const handletabs = () => {
    if (toggle) {
      settoggle(false);
      settitle("products");
    } else {
      settoggle(true);
      settitle("person");
    }
  };

  const fetchUserName = async () => {
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/login");

    fetchUserName();
  }, [user, loading]);

  return (
    <div className="Person-content">
      <br />
      &nbsp;
      <Button
        variant="contained"
        style={{ background: "red", color: "white" }}
        onClick={logout}
      >
        <ExitToApp />
      </Button>
      &nbsp;
      <Button onClick={handletabs} variant="contained">
        {toggle ? <Person /> : <Assessment />}
      </Button>
      &nbsp;
      <Button
        onClick={() => history.push("/")}
        className="homebutton"
        variant="contained"
      >
        <Home style={{}} />
      </Button>
      <center>
        <br />
      </center>
      <div>{toggle ? <Persons /> : <Product />}</div>
    </div>
  );
}

export default Dashboard;
