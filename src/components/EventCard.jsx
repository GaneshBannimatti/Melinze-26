import React from "react";
import styled from "styled-components";

export default function EventCard({ title, dept, date, img, onRegister }) {
  return (
    
    <StyledWrapper>
      <article className="article-wrapper">

        {/* Image */}
        <div
          className="container-project"
          style={{ backgroundImage: `url(${img})` }}
        />

        {/* Info */}
        <div className="project-info">

          <div className="flex-pr">
            <div className="project-title">{title}</div>

            <div className="project-hover" onClick={onRegister}>
              →
            </div>
          </div>

          <div className="types">
            <span className="project-type">{dept}</span>
            <span className="project-type">{date}</span>
          </div>

          {/* Register Button */}
          <button onClick={onRegister} className="btn">
            Register Now
          </button>

        </div>

      </article>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 100%;
    transition: 0.2s;
    border-radius: 12px;
    padding: 6px;
    border: 3px solid transparent;
    cursor: pointer;
    background-color: white;
  }

  /* 🔥 HOVER EFFECT */
  .article-wrapper:hover {
    box-shadow: 10px 10px 0 #22d3ee, 20px 20px 0 #0ea5e9;
    border-color: #22d3ee;
    transform: translate(-15px, -15px);
  }

  .article-wrapper:active {
    box-shadow: none;
    transform: translate(0, 0);
  }

  /* IMAGE */
  .container-project {
    width: 100%;
    height: 160px;
    border-radius: 10px;
    background-size: cover;
    background-position: center;
  }

  /* CONTENT */
  .project-info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .project-title {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }

  .flex-pr {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .project-hover {
    width: 40px;
    height: 40px;
    background: #22d3ee;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: 0.3s;
  }

  .article-wrapper:hover .project-hover {
    transform: rotate(-45deg);
    background: #0ea5e9;
    color: white;
  }

  .types {
    display: flex;
    gap: 8px;
  }

  .project-type {
    background: #e0f2fe;
    color: #0369a1;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 15px;
    font-size: 12px;
  }

  /* BUTTON */
  .btn {
    margin-top: 5px;
    padding: 6px;
    border-radius: 20px;
    border: 1px solid #22d3ee;
    background: transparent;
    color: #22d3ee;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn:hover {
    background: #22d3ee;
    color: black;
  }
`;