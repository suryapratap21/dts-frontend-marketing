"use client";

import React, { useEffect, useRef, useState } from "react";

const trainingCourses = [
  {
    id: 1,
    title: "2020 Hours of Services and Logbooks: US Regulations",
    description:
      "This course provides an overview of part 395 of the FMCSA regulations covering the Hours of Service regulations as of September 2020. It includes how to complete a daily record of duty status under a variety of conditions. Pre-trip planning activities are addressed, as well as the regulations around electronic logging devices and hours of service exceptions. After completing this course, you will be able to:",
    list: [
      "List the information needed to prepare for a trip",
      "Explain the effects of fatigue and how to minimize them during a trip",
      "Explain the importance of Hours of Service Regulations",
      "List the hour restrictions for each duty type",
      "List the main components of an inspection report",
      "Complete and certify a daily record of duty status using Remarks, edits, and annotations",
      "Explain the sleeper berth and 150 air-mile radius exceptions",
      "List the Hours of Service exceptions for emergency and adverse driving conditions",
    ],
    price: "$29.99",
    duration: "87 minutes",
    passingScore: "80%",
  },
  {
    id: 2,
    title: "2021 US - Drug and Alcohol Testing",
    description:
      "When you are impaired, a commercial vehicle is a deadly weapon. For this reason, DOT regulations require professional drivers to register with the Drug & Alcohol Clearinghouse and submit to regular drug and alcohol testing. This course provides an overview of the regulations, the effects of drugs and alcohol, the testing process, and the Clearinghouse registration rules. After completing this course, you will be able to:",
    list: [
      "Explain the effects of drug and alcohol use on driving",
      "List the responsibilities of the carrier, supervisor, and driver in a drug and alcohol program",
      "Explain the steps involved in the drug and alcohol testing process",
      "Describe the different types of test results",
      "List the different actions that result in a refusal to test",
      "Describe the roles of the Medical Review Officer (MRO) and Substance Abuse Professional (SAP)",
      "Explain the return-to-duty and follow-up process",
    ],
    price: "$19.99",
    duration: "97 minutes",
    passingScore: "80%",
  },
  {
    id: 3,
    title: "2021 US – Drug and Alcohol: Reasonable Suspicion",
    description:
      "As a supervisor, safety is your highest priority, and you have a responsibility to make sure that your employees can carry out their duties without putting themselves, their co-workers, and the general public at risk. This course will help you identify unsafe behavior that may be due to drugs or alcohol, as well as how to document that behavior and manage the reasonable suspicion testing process. After completing this course, you will be able to:",
    list: [
      "Recognize physical and behavioral signs of alcohol use",
      "Explain the supervisor and carrier's role in reasonable suspicion testing",
      "Explain the three steps involved in the testing process",
      "Document specific, contemporaneous, articulable observations to support reasonable suspicion testing",
      "Describe strategies for approaching drivers about reasonable suspicion",
      "Recognize physical and behavioral signs of drug use",
    ],
    note: "2021 US - Drug and Alcohol Testing must be completed before this module can be taken",
    price: "$39.95",
    nonMemberPrice: "$49.99",
    duration: "72 minutes",
    passingScore: "80%",
  },
  {
    id: 4,
    title: "Defensive Driving – Tractor-trailer",
    description:
      "Each delivery you make is essential to the economy, making getting to your destination safely and on time a top priority. This course provides strategies and techniques for pre-trip preparation, backing, parking, and driving under a variety of conditions so you can reduce the risk of collisions or breakdowns. After completing this course, you will be able to:",
    list: [
      "List the five principles of defensive driving",
      "Describe the four factors that affect your driving",
      "Identify how preparing for your trip can keep you safe on the road",
      "Explain how to manage the space around your vehicle while driving",
      "Describe techniques for safely navigating curves and turns and for backing and parking",
      "Explain how speed affects your vehicle and field of vision",
      "List strategies for driving under dangerous conditions",
    ],
    price: "$19.99",
    duration: "185 minutes",
    passingScore: "80%",
  },
  {
    id: 5,
    title: "HOS within 150 Air-miles (Federal Regulations)",
    description:
      "This course provides an overview of the federal Hours of Service Regulations and the record of duty status exemption when operating within a 150-air-mile radius of your normal work reporting location. Driver and carrier responsibilities under the exemption will be outlined, as well as how to accurately record duty information. After completing this course, you will be able to:",
    list: [
      "List the criteria that exempt you from using an ELD",
      "Describe your responsibilities under the 150 air-mile radius exemption",
      "Record daily duty status as per the Hours of Service regulations",
      "Define the two duty cycles and calculate your available hours",
      "Use Remarks, edits, and annotations when appropriate",
    ],
    price: "$19.95",
    duration: "60 minutes",
    passingScore: "80%",
  },
  {
    id: 6,
    title: "Recognizing and Managing Fatigue",
    description:
      "Although we often view sleep as a luxury, it is necessary to maintain good health and road safety. As a commercial driver, being fatigued can have dangerous consequences as it significantly increases your risk as you operate a vehicle. To stay both safe and healthy, you must get enough quality sleep. This course will look at the causes and effects of fatigue as well as best practices for getting enough rest. After completing this course, you will be able to:",
    list: [
      "Identify the main causes of fatigue",
      "Recognize the physical and mental symptoms of fatigue",
      "Describe the effects of fatigue on your driving ability and your health",
      "Identify best practices to avoid fatigue while driving",
      "Identify the obstacles that might be blocking you from getting enough quality sleep",
      "List strategies you can take to improve your sleep",
    ],
    price: "$19.95",
    duration: "60 minutes",
    passingScore: "80%",
  },
  {
    id: 7,
    title: "Transporting Hazardous Materials",
    description:
      "This course covers the general training requirements mandated under 49 CFR subchapter C, Hazardous Materials Regulations, and part 386 of the FMCSA Regulations. After completing this course, you will be able to:",
    list: [
      "Identify safe driving, parking, and inspection practices while transporting hazardous materials",
      "Locate information in the Hazardous Materials Table",
      "Determine the accuracy of shipping papers",
      "Identify suitable markings and package labels",
      "Determine and properly place required placards",
      "Identify safe handling and loading procedures",
      "Describe how to handle unintentional releases",
      "Find information in the Emergency Response Guidebook",
    ],
    price: "$29.95",
    duration: "175 minutes",
    passingScore: "80%",
  },
  {
    id: 8,
    title: "Trip Planning, Parking, and Deliveries",
    description:
      "Driving safely on roads and highways is a major concern for the trucking industry, but some of the most irritating events occur when traveling at slower speeds. Vehicle and property damage arising from parking lot collisions and fixed object strikes are common occurrences, but there are preventive actions that drivers can take to minimize them. After completing this course, you will be able to:",
    list: [
      "Prepare yourself, your cargo, and your vehicle for a delivery",
      "Explain how distraction and complacency contribute to collisions",
      "List tactics to help you prevent collisions in truck stops and parking areas",
      "Describe safe parking and backing procedures and how to use a spotter",
      "Explain how to properly inspect, couple, and uncouple a trailer",
      "Describe safety practices that help avoid personal injury",
    ],
    price: "$19.95",
    duration: "80 minutes",
    passingScore: "80%",
  },
  {
    id: 9,
    title: "Vehicle Inspections",
    description:
      "Not surprisingly, the trucking industry's prime directive is safety. One collision can mean the loss of thousands or even millions of dollars, as well as the possibility of injury or death. One of the ways that you can stay safe on the road is to do regular vehicle inspections. After completing this course, you will be able to:",
    list: [
      "Describe the importance of completing a vehicle inspection",
      "Explain the different responsibilities in completing vehicle inspections",
      "Describe how reports are completed, signed, and stored",
      "Describe the safety procedures you should follow when conducting an inspection",
      "Identify defects for each inspection item",
      "Explain how to proceed when you find a defect during your inspection",
    ],
    price: "$19.95",
    duration: "80 minutes",
    passingScore: "80%",
  },
  {
    id: 10,
    title: "Weights and Dimensions for Drivers",
    description:
      "There are two opposing forces when it comes to delivering freight. On one hand, shippers want to be able to move as much freight as possible in a single load. On the other hand, roads and bridges in the United States and Canada can be damaged and sometimes collapse when they are subjected to too much weight. To manage ever-increasing freight demands as well as costly infrastructure repairs, both countries have implemented a system of weight and size restrictions for commercial vehicles. There are federal rules as well as separate state regulations that you must follow while you're in a particular jurisdiction. Knowing the weight and dimensions of your vehicle, your cargo, and even your fuel is important to stay in compliance as you drive. After completing this course, you will be able to:",
    list: [
      "Explain the regulations that affect the weight and dimensions of vehicles on different roadways",
      "Determine the weight ratings for your vehicle, axles and tires",
      "Describe the dimension limits for your vehicle, including kingpin to rear axle measurements and rear overhang",
      "Explain the steps in using the Bridge Formula Table to determine your maximum axle weights",
      "Describe how to shift the weight between the axles on your vehicle",
    ],
    price: "$19.95",
    duration: "70 minutes",
    passingScore: "85%",
  },
  {
    id: 11,
    title: "Whistleblower Protection for Drivers",
    description:
      "Under the Occupational Safety and Health (OSH) Act, employers are responsible for providing a safe workplace, and you have the right to working conditions that don’t pose a risk of serious harm. But what do you do when your employer retaliates against you for exercising those rights? That's where whistleblower protection comes in. After completing this course, you will be able to:",
    list: [
      "Explain what is meant by whistleblower, retaliation, and whistleblower protection statute",
      "Describe the whistleblower protections under the Surface Transportation Assistance Act and the Occupational Safety and Health Act",
      "Describe the protections that harassment and coercion regulations provide for commercial drivers",
      "Explain the difference between FMCSA and OSHA enforcement options in a case of employer retaliation",
      "List the types of documentation to collect to support a whistleblower protection claim",
      "Explain how to file complaints and what happens during the investigation process for both OSHA and the FMCSA",
    ],
    price: "$19.95",
    duration: "21 minutes",
    passingScore: "80%",
  },
  {
    id: 12,
    title: "Winter Driving",
    description:
      "There are three basic rules to driving safely and defensively: be prepared, maximize your visibility, and adjust your driving to the conditions. These rules apply even more in winter, where conditions are more hazardous than in warm weather. This course will discuss how to prepare for winter, what to be aware of during a trip and how to avoid or deal with hazardous winter conditions. After completing this course, you will be able to:",
    list: [
      "Explain the importance of early winter preparation",
      "List items to include in a winter emergency kit",
      "Explain how your vehicle is affected by winter weather",
      "List strategies to make sure you can see and be seen",
      "Describe how to recognize and predict winter weather conditions",
      "List strategies to use while driving through adverse conditions",
      "Explain precautions to take when driving through mountains",
    ],
    price: "$19.95",
    duration: "92 minutes",
    passingScore: "80%",
  },
  {
    id: 13,
    title: "Workplace Violence and Harassment",
    description:
      "Unsafe workplace conditions such as poorly maintained equipment or hazard exposure can be dangerous to your health. In the same way, negative workplace behaviors such as violence, harassment, and bullying can also lead to damage to both the individuals and to the entire organization. However, by learning how to recognize these behaviors and respond appropriately, you can protect yourself and help prevent further incidents. After completing this course, you will be able to:",
    list: [
      "Identify the characteristics of negative workplace behaviors",
      "Describe four forms of workplace violence and how domestic violence can affect the workplace",
      "Describe the four types of workplace harassment and how each of them occur",
      "Describe the difference between harassment and bullying",
      "Describe the laws that protect you from workplace violence and harassment",
      "List the risk factors for violence and harassment and indicators that someone may be violent",
      "Explain the roles and responsibilities you and your carrier have in handling workplace violence and harassment",
      "List the steps in handling negative behavior when you are a witness, a victim, or the accused",
    ],
    price: "$19.95",
    duration: "67 minutes",
    passingScore: "80%",
  },
];

const EmployeeTrainingPricing = ({}) => {
  return (
    <>
      <div className="row g-3">
        {trainingCourses.map((course) => (
          <CourseCard course={course} key={course.id} />
        ))}
      </div>
    </>
  );
};

const CourseCard = ({ course }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState();
  const contentRef = useRef(null);

  const toggleExpand = () => {
    // setMaxHeight(isExpanded ? "0px" : `${contentRef.current.scrollHeight}px`);
    setIsExpanded(!isExpanded);
  };

  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.slice(0, limit) + "...";
    }
    return text;
  };

  useEffect(() => {
    // If we're expanding, set the maxHeight to the actual content height
    setMaxHeight(`${contentRef.current.scrollHeight}px`);
    // if (isExpanded) {
    //   setMaxHeight(`${contentRef.current.scrollHeight}px`);
    // } else {
    // If collapsing, we'll let CSS handle the transition to 0px
    // setTimeout(() => setMaxHeight("0px"), 0);
    // }
  }, [isExpanded]);

  return (
    <div
      className="col-xl-6 col-md-6 course-pricing-wrapper"
      style={{
        backgroundImage: "url(/assets/img/shape/15.webp)",
      }}
    >
      <div className="course-pricing-card">
        <div
          onClick={toggleExpand}
          style={{
            display: "flex",
            cursor: "pointer",
          }}
          className="heading"
        >
          <h4 className="">{course.title}</h4>{" "}
          <div>
            <h4 className={`course-pricing-toggler ${isExpanded && "active"}`}>
              <i class="fas fa-angle-down"></i>
            </h4>
          </div>
        </div>
        <div
          ref={contentRef}
          className="info"
          style={{
            maxHeight: maxHeight,
            overflow: "hidden",
            transition: "all 0.3s ease-out",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: "1rem",
                alignItems: "center",
              }}
            >
              <h3>{course.price}</h3>
              <h6>
                <i class="fas fa-stopwatch"></i>: {course.duration}
              </h6>
            </div>
            <div className="rounded-btn">
              <i class="fas fa-cart-plus"></i>
            </div>
          </div>
          <p>
            {isExpanded
              ? course.description
              : truncateText(course.description, 100)}
          </p>
          {isExpanded && (
            <ul className="disc-style-type">
              {course.list.map((item, index) => (
                <li key={index}>
                  <i
                    class="fas fa-circle"
                    style={{
                      fontSize: "0.5rem",
                      paddingRight: "0.5rem",
                    }}
                  ></i>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            marginTop: "1rem",
          }}
        >
          <button className="transparent-btn" onClick={toggleExpand}>
            {isExpanded ? "Collapse" : "Expand"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeTrainingPricing;
