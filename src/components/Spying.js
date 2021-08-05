import React from "react";

const Spying = () => {
  return (
    <div style={{backgroundColor: "inherit"}}>
      <p>
        Version of the browser <span>{navigator.appVersion}</span>.
      </p>
    </div>
  );
};

export default Spying;

// let txt1 = "";
//           txt1 += "<p>Version of the browser: " + navigator.appVersion + "</p>";
//           txt1 += "<p>Languages of the browser: " + navigator.languages + "</p>";
//           txt1 += "<p>Is the browser online ?: " + navigator.onLine + "</p>";
//           txt1 += "<p>Platform the browser is compiled: " + navigator.platform + "</p>";
//           txt1 += "<p>Engine name of the browser: " + navigator.product;
//           +"</p>";
//           txt1 += "<p>Identifier of the browser: " + navigator.buildID;
//           +"</p>";
//           txt1 += "<p>User-agent header sent by the browser to the server: " + navigator.userAgent + "</p>";
//           document.getElementById("browserInfo").innerHTML = txt1;
