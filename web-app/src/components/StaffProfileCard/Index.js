import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const StaffProfileCard = () => {
  const [staffInfo, setStaffInfo] = useState([]);
  const [download, setDownload] = useState(false);

  const fetchStaffProfile = async () => {
    await axios
      .get("http://localhost:5000/api/scouts")
      .then((res) => {
        let result = res.data;
        console.log(result);
        setStaffInfo(result);
        setDownload(true);
        console.log(staffInfo, download);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchStaffProfile();
  }, []);

  return (
    <div className="staff-profil-info">
      <h1 className="staff-profil-name">
        {staffInfo.data.lastname} {staffInfo.data.firstname}
      </h1>
      <h2 className="staff-profil-sub-title">Club Name</h2>
      <h3 className="staff-profil-sub-title">Email</h3>
      <h3 className="staff-profil-sub-title">Telephone</h3>
    </div>
  );
};

export default StaffProfileCard;
