import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { AppContext } from '../contexts/AppContext';
import Search from './Search';
import { useNavigate } from 'react-router-dom';

const CardDisplay = () => {
    const { data, loading } = useContext(AppContext);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();

    const filteredData = data.filter(item =>
        item.title.toLowerCase().includes(search.toLowerCase()) || 
        item.body.toLowerCase().includes(search.toLowerCase())
    );

    const redirectToDetail = (id) => {
        // TODO: Redirect to detail page
        navigate(`/detail/${id}`)
    }
    return (
        <StyledWrapper>
            <h1>ET.Verdict Front End Intern Coding Challenge</h1>
            <div className='flex justify-center items-center mb-7'>
                <Search search={search} setSearch={setSearch} />
            </div>

            {loading ? (
                <div className="loader-container">
                    <div className="loader"></div>
                </div>
            ) : (
                <div className="card-container">
                    {filteredData.length > 0 ? (
                        filteredData.map((item) => (
                            <div key={item.id} className="card">
                                <div className="card-details">
                                    <p className="text-title text-sm">{item.title}</p>
                                    <p className="text-body">{item.body}</p>
                                </div>
                                <button className="card-button" onClick={()=>redirectToDetail(item.id)}>More info</button>
                            </div>
                        ))
                    ) : (
                        <p className="no-results">No matching results found</p>
                    )}
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

  /* ✅ Fix: Grid Layout for Cards */
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    justify-items: center;
    padding: 20px;
  }

  .card {
    width: 190px;
    height: 254px;
    border-radius: 20px;
    background: #f5f5f5;
    position: relative;
    padding: 1.8rem;
    border: 2px solid #c3c6ce;
    transition: 0.5s ease-out;
    overflow: visible;
  }

  .card-details {
    color: black;
    height: 100%;
    gap: 0.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .card-button {
    transform: translate(-50%, 125%);
    width: 60%;
    border-radius: 1rem;
    border: none;
    background-color: #008bf8;
    color: #fff;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    position: absolute;
    left: 50%;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease-out;
  }

    .text-body {
    color: rgb(134, 134, 134);
    font-size: 0.9rem;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    }

    .text-title {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: ellipsis; 
    max-width: 90%;
    }

  /* ✅ Fix: Ensure Cards Show Properly */
  .card:hover {
    border-color: #008bf8;
    box-shadow: 0 4px 18px 0 rgba(0, 0, 0, 0.25);
  }

  .card:hover .card-button {
    transform: translate(-50%, 50%);
    opacity: 1;
  }

  .no-results {
    font-size: 1.2rem;
    color: #555;
    text-align: center;
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

export default CardDisplay;
