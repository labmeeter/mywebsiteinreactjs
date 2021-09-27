import "../../App.css";
import React from "react";
import VideoSection from "../VideoSection";
import Card from "../Cards";
import Footer from "../Footer";
import Navbar from "../Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />
      <VideoSection />
      <Card />
      <Footer />
    </>
  );
}
export default Dashboard;
