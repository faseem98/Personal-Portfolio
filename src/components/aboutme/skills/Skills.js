import React from "react";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div>
      <div className="mt-4 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary" to="/technicalskill">
          Technical Skill
        </Link>
      </div>
    </div>
  );
}
