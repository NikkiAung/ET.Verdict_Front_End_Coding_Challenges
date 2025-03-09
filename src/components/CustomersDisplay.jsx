import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/AppContext';

const Card = () => {
  const { data, loading } = useContext(AppContext);

  return (
    <StyledWrapper>
      <h1>Customer Posts</h1>

      {/* Show Loading Spinner */}
      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <div className="card-container">
          {data.map((item) => (
            <div key={item.id} className="card">
              <div className="card-content">
                <span>{item.title}</span>
                <p>{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  text-align: center;
  padding: 2rem;
  background-color: #f8f9fa;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1.5rem;
  }

  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
    gap: 20px;
    justify-items: center;
  }

  .card {
    width: 270px;
    height: 350px;
    background-color: rgb(255, 255, 255);
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }

  .card:hover {
    transform: translateY(-5px);
  }

  .card:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #8f7eff, #44a4ff);
    opacity: 0;
    transition: opacity 0.5s ease-in-out;
  }

  .card:hover:before {
    opacity: 0.5;
  }

  .card-content {
    width: 85%;
    height: 200px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -45%);
    text-align: center;
    color: rgb(0, 0, 0);
    z-index: 1;
    background-color: white;
    transition: all 0.3s ease-in-out;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
  }

  .card-content span {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    margin-bottom: 10px;
  }

  .card-content p {
    font-size: 0.9rem;
    color: #555;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }

  .card:hover .card-content {
    transform: translate(-50%, -50%);
  }

  /* Loading Spinner */
   .loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }

  .loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #000; /* Changed color to black */
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export default Card;
