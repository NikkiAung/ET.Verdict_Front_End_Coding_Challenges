import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../contexts/AppContext";
import { useContext,useEffect } from "react";
import { toast } from 'react-toastify';
import NotFound from "./NotFound";

const CardDetail = () => {
  const { id } = useParams();
  const { data } = useContext(AppContext);
  const navigate = useNavigate();

  // Find the item that matches the ID
  const item = data.find((item) => item.id === parseInt(id));


  if (!item) {
    useEffect(() => {
        toast.error("Item not found. Redirecting...");
        setTimeout(() => navigate("/"), 3000); 
    }, []);
    return <div className="flex items-center justify-center"><NotFound /></div>
  }

  return (
    <StyledWrapper>
      <div className="detail-card">
        <h2 className="title">{item.title}</h2>
        <p className="body">{item.body}</p>
        <button className="back-button" onClick={() => navigate("/")}>Back</button>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;

  .detail-card {
    background: white;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    text-align: center;
  }

  .title {
    font-size: 1.5rem;
    font-weight: bold;
    color: #333;
    margin-bottom: 10px;
  }

  .body {
    font-size: 1rem;
    color: #555;
    margin-bottom: 20px;
  }

  .back-button {
    background: #008bf8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: 0.3s ease;
  }

  .back-button:hover {
    background: #0071c5;
  }
`;

export default CardDetail;
