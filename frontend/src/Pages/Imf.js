import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { UserContext } from "./Main";
import { useSelector } from "react-redux";

const userData = (data) => ({
  gender: data.gender || "Not Provided",
  phone: data.phone || 7672834523,
  email: data.email || "sample@gmail.com",
  workEmail: data.workEmail || "samplework@email.com",
  web: data.web || "https://mypersonal.com",
  address: data.address || "Address is not given",
});
function Imf() {
  const { imfId } = useContext(UserContext);
  const [data, setData] = useState({
    _id: "6568e9ad8b938f382e7ea66a",
    id: 25,
    first_name: "Tristam",
    last_name: "Morsley",
    email: "tmorsleyo@engadget.com",
    gender: "Male",
    avatar:
      "https://w0.peakpx.com/wallpaper/181/957/HD-wallpaper-indian-beauty-bollywood-bride-clasdic-desi-girl-marriage-traditional-trending.jpg",
    domain: "IT",
    available: false,
    __v: 0,
  });
  const selfData = useSelector((state) => state.api.selfData);
  const status = useSelector((state) => state.api.status);
  const error = useSelector((state) => state.api.error);
  useEffect(() => {
    console.log(imfId);
    if (selfData.data) setData(selfData.data);
  }, [imfId, selfData]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="imf">
      <div className="imfHeading">
        <div
          className="imf_img"
          style={{ backgroundImage: `url(${data.avatar || ""})` }}
        ></div>
        <div className="imf_name">
          <div className="imf_myname">
            {data.first_name} {data.last_name}
          </div>
          <div className="imf_skill">{data.skill || "Skill not mentioned"}</div>
          <div className="social-icons">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </div>
        </div>
      </div>
      <div className="personDetails">Personal Details</div>
      <div className="imf_person">
        {Object.entries(userData(data)).map(([key, value]) => (
          <div className="imf_row" key={key}>
            <div className="imf_left">{key}</div>
            <div className="imf_right">{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Imf;
