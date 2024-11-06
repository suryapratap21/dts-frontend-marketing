import React from "react";
import shape11 from "@/assets/new-img/shape-11.webp";
import Image from "next/image";
// import Process1Data from "@/assets/jsonData/process/Process1Data.json";
import SingleProcess1 from "./SingleProcess1";

const locationData = [
  {
    id: "1",
    thumb:
      "https://primedrug.s3.amazonaws.com/tenantDomain/Prime%20Drug%20Testing%20Locations%20-%20Seattle%2C%20WA.png/18831fdf-a8e6-4a37-add9-b2053ddd878b.png",
    steps: "01",
    title: "Prime Drug Testing SEA",
    location: "16027 Broadway Avenue, Snohomish, WA",
    email: "sea@drugtestingsites.com",
  },
  {
    id: "2",
    thumb:
      "https://primedrug.s3.amazonaws.com/tenantDomain/Prime%20Drug%20Testing%20Locations%20-Bakersfield%2C%20CA.jpg/75e2f980-f312-4db3-b471-d424be240e45.jpeg",
    steps: "02",
    title: "Prime Drug Testing BFL",
    location: "8500 Harris Road, Bakersfield, CA",
    email: "bfl@drugtestingsites.com",
  },
  {
    id: "3",
    thumb:
      "https://primedrug.s3.amazonaws.com/tenantDomain/1711664169309-b6caafba-a184-4fc6-b93f-5288bf89d891_1.jpg/0f6034ea-b9c9-4af3-bffe-451232a94b20.jpeg",
    steps: "03",
    title: "Prime Drug Testing Lathrop",
    location: "143 D'Arcy Parkway, Lathrop, CA",
    email: "lathrop@drugtestingsites.com",
  },
];

const ProcessStyle1 = ({ sectionClass }) => {
  return (
    <>
      <div
        className={`process-style-one-area text-center default-padding ${
          sectionClass ? sectionClass : ""
        }`}
      >
        <div className="large-shape">
          <Image src={shape11} alt="Shape" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-heading">Our Partners</h4>
                <h2 className="title">Clinic Locations</h2>
                <div className="devider"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {locationData.map((process) => (
              <div className="col-lg-4" key={process.id}>
                <SingleProcess1 process={process} key={process.id} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProcessStyle1;
