const lencoapikey =
  "dba07469d40348a1e833f725ee5f3f3ded9fb458d4e313a61b43670b0958a031";

const a = async (client_ref) => {
  try {
    const response = await fetch(
      "https://pay.sandbox.lenco.co/js/v1/inline.js",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${lencoapikey}`,
          Accept: "application/json",
        },
      },
    );

    const data = await response.text();
    console.log(data);
    /*    document.querySelector("#loader").innerHTML = data; */
  } catch (error) {
    console.error(    
      "chkr_process_sttus: failed",
      "erMgs: Error executing status re-query look up:",
      error,
    );
  }
};

a();
