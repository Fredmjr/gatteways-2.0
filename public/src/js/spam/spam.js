const spammer_fuc = () => {
  const spam = (e, opt) => {
    const srvr_data = {
      amount: 1.0,
      phone: e,
      operator: opt,
    };

    //json
    fetch("/lencoapi/init", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(srvr_data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.timed_out === true) {
          console.log("timed_out_spammed");
        }
        //
        if (data.erMgs) {
          console.log("erMgs_spammed");
        }
        if (data.payment_processing_sttus === true) {
          console.log("payment_processing_sttus_spammed");
        }
      })
      .catch((error) => console.error(error));
  };
  setInterval(() => {
    spam("260975986004", "airtel");
    console.log("spam_ma");
  }, 7000);
  /* setInterval(() => {
    spam("260762913750", "mtn");
  }, 15000); */
};
spammer_fuc();
