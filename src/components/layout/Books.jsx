import React from "react";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";

function Books() {
  //   const { id } = useParams();
  const navigate = useNavigate();
  navigate("/");
  return (
    <div>
      <h1>Books</h1>
      {setTimeout(() => {
        navigate("/");
      }, 1000)}
    </div>
  );
}

export default Books;
