import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { MoreVert, WhatsApp } from "@material-ui/icons";
import { useEffect } from "react";
import { db } from "../firebase";
import { app_data_config } from "../app_config";

function HomePage(props) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    db.collection("products")
      .orderBy("product_name", "asc")
      .onSnapshot((snapshot) => {
        console.log("Firebase Snap!");
        setLoading(false);

        setData(
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
        if ((data.length = 0)) {
          setLoading(true);
        } else {
          setLoading(false);
        }
      });
  }, []);

  return (
    <>
      {loading ? (
        <div>
          <div class="main">
            <div class="circle"></div>
          </div>
        </div>
      ) : (
        <>
        

          <center>
            {" "}
            <h3 className="MuiTypography-h5 " style={{ color: "#e74c3c" }}>
              {app_data_config[0].company}

              {app_data_config[0].message}
            </h3>
          </center>
          <div className="containergrid">
            {data.map((data) => (
              <Card
                elevation={5}
                style={{
                  maxWidth: "100%",
                  marginBottom: 10,
                  marginLeft: 10,
                  marginRight: 10,
                }}
                sx={{ maxWidth: 345 }}
              >
                <CardHeader
                  action={
                    <IconButton aria-label="settings">
                      <a
                        target="_blank"
                        href={`https://api.whatsapp.com/send?phone=+${app_data_config[0].phone}&text=${data.product_name}`}
                      >
                        <WhatsApp style={{ color: "#27ae60" }} />
                      </a>
                    </IconButton>
                  }
                  title={data.product_name}
                  subheader={data.price + " L.L"}
                />

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <CardMedia
                      component="img"
                      style={{
                        height: 100,
                        width: "auto",
                      }}
                      image={data.avatar}
                      alt="omar_net"
                    />
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;
