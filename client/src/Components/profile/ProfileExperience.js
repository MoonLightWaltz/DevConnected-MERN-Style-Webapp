import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description },
}) => {
  return (
    <>
      <h3 className="text-dark">{company}</h3>
      <p>
        <p>
          {format(new Date(from), "yyyy/MM/dd")} -{" "}
          {!to ? "Now" : format(new Date(to), "yyyy/MM/dd")}
        </p>
        <p>
          <strong>Position:</strong> {title}
        </p>
        <p>
          <strong>Description</strong>
          {description}
        </p>
      </p>
    </>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default ProfileExperience;
