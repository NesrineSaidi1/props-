import React from "react";

function Profile({ fullName = "noname", profession, Bio, message, children }) {
  return (
    <div>
      <h1>{fullName}</h1>
      <h3>{profession}</h3>
      <p>{Bio}</p>
      {children}
      <button
        onClick={() => {
          message(fullName);
        }}
      >
        Show my name
      </button>
    </div>
  );
}

export default Profile;
