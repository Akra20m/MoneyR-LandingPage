import React from "react";
import "../index.css";

import LiveChart from "./LiveChart";
import WhyUs from "./WhyUS";
import HowSend from "./HowSend";
import MobileApp from "./MobileApp";

const Main = () => {
  return (
    <main className="main-container">
      <LiveChart />
      <WhyUs />
      <HowSend />
      <MobileApp />
    </main>
  );
};

export default Main;
