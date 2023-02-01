import React, { useEffect, useState } from "react";

function Address(props) {
  const [ip, setIp] = useState("");

  // Can request an ipv4 address or an ipv6 address
  let URL = "https://api.ipify.org";

  if (props.type === "ipv6") {
    URL = "https://api64.ipify.org";
  }

  useEffect(() => {
    fetch(`${URL}?format=json`)
      .then((response) => response.json())
      .then((data) => {
        setIp(data.ip);
      })
      .catch((error) => {
        console.error(`Problem fetching from ipify: ${error}`);
      });
  }, [URL]);
  return (
    <>
      <header>{props.type} Address</header>
      <p>{ip}</p>
    </>
  );
}
export default Address;
