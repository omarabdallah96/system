import React, { useState, useEffect } from "react";
import "./App.css";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import {
  Avatar,
  CardActions,
  CardHeader,
  CardMedia,
  Fab,
} from "@material-ui/core";
// import db from './firebase-config'
import firebase from "firebase";
import { auth, db, logout } from "./firebase";
import {
  Add,
  AddBox,
  AddCircleOutlineRounded,
  DeleteOutlineRounded,
  Edit,
  ImageOutlined,
  MoreVert,
} from "@material-ui/icons";
import { Typography } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CardContent } from "@material-ui/core";

import {
  Button,
  TextField,
  Container,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  Paper,
  Card,
} from "@material-ui/core";

function App(props) {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [balance, setBalance] = useState("0");
  const [phone, setphone] = useState("");
  const [show, setshow] = useState(true);
  const [title, setitle] = useState("+");
  const [product, setProducts] = useState([]);
  const [updatephone, setUpdatephone] = useState("");
  const [updatebalance, setUpdateBalance] = useState("");
  const [search, setSearch] = useState("");

  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const [update, setUpdate] = useState("");
  const [toUpdateId, setToUpdateId] = useState("");
  const handleadd = (price, event) => {
    if (event == "plus") {
      setUpdateBalance(parseInt(updatebalance) + parseInt(price));
    }
    if (event == "minus") {
      setUpdateBalance(parseInt(updatebalance) - parseInt(price));
    }
  };
  const formatter = new Intl.NumberFormat("AR-AR", {
    style: "currency",
    currency: "LBP",
  });
  const handleperson = () => {
    if (show) {
      setshow(false);
      setitle("-");
    } else {
      setshow(true);
      setitle("+");
    }
  };
  useEffect(() => {
    console.log("useEffect Hook!!!");

    db.collection("persons")
      .orderBy("name", "asc")
      .onSnapshot((snapshot) => {
        console.log("Firebase Snap!");
        setTodos(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              name: doc.data().name,
              datatime: doc.data().datatime,
              balance: parseInt(doc.data().balance),
              phone: doc.data().phone,
            };
          })
        );
      });

    db.collection("products")
      .orderBy("product_name", "asc")
      .onSnapshot((snapshot) => {
        console.log("Firebase Snap!");
        setProducts(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              product_name: doc.data().product_name,
              datatime: doc.data().datatime,
              price: doc.data().price,
              phone: doc.data().phone,
              avatar: doc.data().avatar,
            };
          })
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection("persons").add({
      name: input,
      datetime: firebase.firestore.FieldValue.serverTimestamp(),
      balance: parseInt(balance),
      phone: phone,
    });
    setInput("");
    setBalance("");
    setphone("");
  };

  const deleteTodo = (id) => {
    db.collection("persons")
      .doc(id)
      .delete()
      .then((res) => {
        console.log("Deleted!", res);
      });
  };

  const openUpdateDialog = (todo) => {
    setOpen(true);
    setToUpdateId(todo.id);
    setUpdate(todo.name);
    setUpdateBalance(todo.balance);
    setUpdatephone(todo.phone);
  };
  const openUpdateDialog1 = (todo) => {
    setOpen1(true);
    setToUpdateId(todo.id);
    setUpdate(todo.name);
    setUpdateBalance(todo.balance);
    setUpdatephone(todo.phone);
  };

  const editTodo = () => {
    if (updatebalance < 0) {
      return alert("please instert valid");
    }
    db.collection("persons").doc(toUpdateId).update({
      name: update,
      balance: updatebalance,
    });
    setOpen(false);
  };
  const editTodo1 = () => {
    if (updatebalance < 0) {
      return alert("please instert valid");
    }
    db.collection("persons").doc(toUpdateId).update({
      name: update,
      phone: updatephone,
    });
    setOpen1(false);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };

  return (
    <Container>
      <center>
        {" "}
        <Button
          variant="contained"
          onClick={handleperson}
          style={{
            background: [show ? "green" : "red"],
            color: "white",
            fontSize: 10,
          }}
        >
          {title}
        </Button>
        <TextField
        variant="outlined"
        size="small"
          id="standard-basic"
          label="Search Client"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </center>
      <center style={{ display: [show ? "none" : "block"] }}>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="todo"
            label="Full name"
            name="todo"
            autoComplete="off"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            type="number"
            fullWidth
            id="balance"
            label="balance"
            name="balance"
            autoComplete="off"
            value={balance}
            onChange={(event) => setBalance(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            type="number"
            fullWidth
            id="balance"
            label="phone"
            name="phone"
            autoComplete="off"
            value={phone}
            onChange={(event) => setphone(event.target.value)}
          />

          <Button
            type="submit"
            variant="contained"
            style={{ background: "green", color: "white" }}
            fullWidth
            onClick={addTodo}
            disabled={!input || !balance || !phone}
            startIcon={<AddCircleOutlineRounded />}
          >
            Save
          </Button>
          <br />
        </form>
        <br />
      </center>
      <TableContainer
        style={{ marginTop: 5 }}
        className="table1"
        component={Paper}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              style={{
                background: "#783F04",
                color: "white",
                textAlign: "left",
              }}
            >
              <TableCell align="center" color="primary">
                <span style={{ color: "white" }}>fullname</span>
              </TableCell>
              {/* <TableCell align="center">
                    <span style={{ color: "white" }}>phone</span>
                  </TableCell> */}
              <TableCell align="center">
                <span style={{ color: "white" }}>balance</span>
              </TableCell>
              <TableCell align="center">
                <span style={{ color: "white" }}>action</span>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {todos
              .filter((todos) => {
                if (search === "") {
                  return todos;
                } else if (
                  todos.name.toLowerCase().includes(search.toLowerCase())
                ) {
                  return todos;
                }
              })
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell align="center">
                    <h3> {row.name}</h3>
                  </TableCell>
                  {/* <TableCell align="center">{row.phone}</TableCell> */}
                  <TableCell align="center">{row.balance}</TableCell>
                  <TableCell align="center">
                    <AddCircleOutlineRounded
                      cursor="pointer"
                      onClick={() => openUpdateDialog(row)}
                    />
                    <Edit
                      cursor="pointer"
                      onClick={() => openUpdateDialog1(row)}
                    />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog
        style={{
          backgroundImage: "linear-gradient( #e52e71,#ff8a00)",
        }}
        fullScreen
        open={open}
        onClose={handleClose}
      >
        <DialogContent
          style={{
            backgroundColor: "black",
          }}
        >
          <div className="containergrid">
            {product.map((todo) => (
              <Card
                sx={{ maxWidth: 345 }}
                style={{
                  backgroundImage: "linear-gradient( #e52e71,#ff8a00)",

                  margin: "5px",
                }}
              >
                <CardHeader
                  avatar={
                    <Avatar
                      style={{ height: 100, width: 100, borderRadius: 0 }}
                      src={todo.avatar}
                      sx={{ bgcolor: "red" }}
                      aria-label="recipe"
                    >
                      C
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label="settings">
                      {/* <MoreVert /> */}
                    </IconButton>
                  }
                  title={<h1>{todo.product_name}</h1>}
                  subheader={<h1>{todo.price}</h1>}
                />
                {/* <CardMedia
                  component="img"
                  style={{ height: 200 }}
                  image={todo.avatar}
                  alt="Paella dish"
                /> */}
                <CardContent></CardContent>
                <div style={{ textAlign: "center" }}>
                  <Button
                    name="minus"
                    onClick={(e) => handleadd(todo.price, e.currentTarget.name)}
                    size="small"
                    variant="outlined"
                  >
                    <DeleteOutlineRounded />
                  </Button>
                  &nbsp;
                  <Button
                    name="plus"
                    onClick={(e) => handleadd(todo.price, e.currentTarget.name)}
                    size="small"
                    variant="outlined"
                  >
                    <AddBox />
                  </Button>
                </div>
                <br />
              </Card>
            ))}
          </div>
        </DialogContent>
        <DialogActions>
          <a
            href={`https://api.whatsapp.com/send?phone=+961${updatephone}`}
            target="_blank"
          >
            <WhatsAppIcon style={{ color: "green" }} />
          </a>
          <TextField
            margin="normal"
            label="full name"
            type="text"
            autoComplete="off"
            variant="outlined"
            name="updateTodo"
            value={update}
            size="small"
            onChange={(event) => setUpdate(event.target.value)}
          />
          <TextField
            style={{ outlineColor: "green" }}
            margin="normal"
            label="balance"
            type="number"
            variant="outlined"
            name="updateTodo"
            autoComplete="off"
            size="small"
            value={updatebalance}
            onChange={(event) => setUpdateBalance(event.target.value)}
          />
          <Button
            onClick={handleClose}
            variant="contained"
            style={{ background: "red", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            disabled={!update}
            onClick={editTodo}
            variant="contained"
            style={{ background: "green", color: "white" }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog fullScreen open={open1} onClose={handleClose1}>
        <center>
          <h3>Edit Client Info</h3>
        </center>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            autoComplete="off"
            value={update}
            type="email"
            fullWidth
            label="Full name"
            variant="outlined"
            onChange={(event) => setUpdate(event.target.value)}
          />
          <TextField
            margin="dense"
            id="name"
            type="number"
            label="phone number"
            fullWidth
            value={updatephone}
            autoComplete="off"
            variant="outlined"
            onChange={(event) => setUpdatephone(event.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose1}>
            Cancel
          </Button>
          <Button color="primary" onClick={editTodo1} variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
      <br />

      <h3>
        &nbsp;
        {formatter.format(todos.reduce((a, v) => (a = a + v.balance), 0))}
      </h3>
    </Container>
  );
}

export default App;
