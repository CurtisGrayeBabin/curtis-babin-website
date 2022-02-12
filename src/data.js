import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { Link } from "gatsby";

// smaller external links
export const linkedInSM = <BsLinkedin />;
export const gitHubSM = <BsGithub />;
export const instagramSM = <BsInstagram />;

// external links
export const [linkedIn, linkedInLink] = [
  <BsLinkedin />,
  "https://www.linkedin.com/in/curtisbabin/",
];
export const [gitHub, gitHubLink] = [
  <BsGithub />,
  "https://github.com/CurtisGrayeBabin",
];
export const [instagram, instagramLink] = [
  <BsInstagram />,
  "https://www.instagram.com/curtis.g.babin/",
];

// internal links
export const education = (
  <Link to="/#education">
    <FaUserGraduate />
  </Link>
);
export const portfolio = (
  <Link to="/#portfolio">
    <HiCode />
  </Link>
);
export const contact = (
  <Link to="/#contact">
    <GrMail />
  </Link>
);
