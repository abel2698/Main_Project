import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from "./Styles";

export default function ProductModal({
  prod,
  open,
  handleClose,
  handleReceiveButton,
  aText
}) {
  const [rdata, setRdata] = React.useState({
    long: "",
    lat: "",
  });

  const handleChangeForm = async (e) => {
    setRdata({
      ...rdata,
      [e.target.name]: e.target.value,
    });
  };

  const printPage=()=>{
    window.print();
  }

  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            
            {prod.length === 0 ? (
              <></>
            ) : (
              <>
                <h1 className={classes.pageHeading}>Invoice Details</h1>
                <div>
                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Universal ID: </div>
                    <div className={classes.dCol2}>{prod[0][0]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Owner: </div>{" "}
                    <div className={classes.dCol2}>{prod[0][2]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Manufacturer:</div>{" "}
                    <div className={classes.dCol2}>{prod[0][3]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Name of Manufacturer:</div>{" "}
                    <div className={classes.dCol2}> {prod[0][4]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Manufactured date:</div>{" "}
                    <div className={classes.dCol2}>
                      {new Date(parseInt(prod[1][0] * 1000)).toDateString() +
                        " " +
                        new Date(parseInt(prod[1][0] * 1000)).toTimeString()}
                    </div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>
                      Details of Manufacturer:
                    </div>{" "}
                    <div className={classes.dCol2}> {prod[0][5]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Product Name: </div>{" "}
                    <div className={classes.dCol2}>{prod[1][1]}</div>
                  </div>
                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Product Code:</div>{" "}
                    <div className={classes.dCol2}>{prod[1][2]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Product Price: </div>{" "}
                    <div className={classes.dCol2}>{prod[1][3]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}> Product Category: </div>
                    <div className={classes.dCol2}>{prod[1][4]}</div>
                  </div>
                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Product State: </div>{" "}
                    <div className={classes.dCol2}>{prod[1][5]}</div>
                  </div>
                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Seller Address: </div>{" "}
                    <div className={classes.dCol2}>{prod[1][6]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Delivery Hub Address:</div>{" "}
                    <div className={classes.dCol2}> {prod[2][1]}</div>
                  </div>

                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Customer Address: </div>{" "}
                    <div className={classes.dCol2}>{prod[2][4]}</div>
                  </div>
                  <div className={classes.dRow}>
                    <div className={classes.dCol1}>Tx Hash: </div>{" "}
                    <div className={classes.dCol2}>
                      {/* {prod[2][5]} */}
                      {prod[2][5].length > 40
                        ? prod[2][5].substring(0, 40) + "..."
                        : prod[2][5]}
                         </div>
                        </div>
                        <Button
                          type="submit"
                          style={{ float: 'right' }}
                          // variant="contained"
                          color="primary"
                          onClick={()=>{printPage()}}
                          // style={{ margin: "2px auto" }}
                        >
                          DOWNLOAD INVOICE
                        </Button>

                  <br />
                  {console.log(handleReceiveButton)}
                  {handleReceiveButton ? (
                    prod[1][5] === "2" || prod[1][5] === "5" ? (
                      <>
                      </>
                    ) : (
                      <> </>
                    )
                  ) : (
                    <> </>
                  )}
                  {handleReceiveButton ? (
                    prod[1][5] === "2" ||
                    prod[1][5] === "5" ||
                    prod[1][5] === "7" ? (
                      <>
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                          style={{ margin: 10 }}
                          onClick={() =>
                            handleReceiveButton(
                              prod[0][0],
                              rdata.long,
                              rdata.lat
                            )
                          }
                        >
                          Recieve
                        </Button>
                        <p><b style={{ color: "red" }}>{aText.length !== 0 ? aText : ""}</b></p>
                      </>
                    ) : (
                      <> </>
                    )
                  ) : (
                    <></>
                  )}
                </div>
              </>
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
