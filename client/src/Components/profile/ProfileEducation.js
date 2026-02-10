import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const ProfileEducation = ({
  education: { school, degree, fieldofstudy, current, to, from, description },
}) => {
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
          <strong>Field Of Studyt:</strong> {fieldofstudy}
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
  education: PropTypes.array.isRequired,
};

export default ProfileEducation;
