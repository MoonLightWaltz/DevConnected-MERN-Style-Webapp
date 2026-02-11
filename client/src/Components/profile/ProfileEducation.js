import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const ProfileEducation = ({ education }) => {
  if (!education) return "No education entered";
  const { school, from, to, degree, fieldofstudy, description } = education;
  return (
    <>
      <h3 className="text-dark">{school}</h3>
      <p>
        <p>
          {format(new Date(from), "yyyy/MM/dd")} -{" "}
          {!to ? "Now" : format(new Date(to), "yyyy/MM/dd")}
        </p>
        <p>
          <strong>Degree:</strong> {degree}
        </p>
        <p>
          <strong>Field Of Study:</strong> {fieldofstudy}
        </p>
        <p>
          <strong>Description</strong>
          {description}
        </p>
      </p>
    </>
  );
};

ProfileEducation.propTypes = {
  education: PropTypes.object.isRequired,
};

export default ProfileEducation;
