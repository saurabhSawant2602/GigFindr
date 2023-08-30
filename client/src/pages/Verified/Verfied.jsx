import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Verified() {
  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  let { token } = useParams();
  const handleVerifyClick = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `http://localhost:8080/api/auth/verifyemail/${token}`,
        { method: "GET" }
      );

      if (response.ok) {
        setVerified(true);
      } else {
        setVerified(false);
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setVerified(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <button onClick={handleVerifyClick} disabled={loading || verified}>
        Verify Email
      </button>
      {loading && <p className="loading">Verifying email...</p>}
      {verified && <p className="verified">Email successfully verified!</p>}
    </div>
  );
}

export default Verified;
