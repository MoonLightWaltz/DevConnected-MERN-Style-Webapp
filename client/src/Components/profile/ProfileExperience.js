import React from "react";
import PropTypes from "prop-types";
import { format } from "date-fns";

const ProfileExperience = ({ experience }) => {
  if (!experience) return "No experience entered";

  const { company, title, from, to, description } = experience;

  return (
    <div>
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
    </div>
  );
};

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ProfileExperience;
