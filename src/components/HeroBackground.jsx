import React from "react";
import styled from "styled-components";

export default function HeroBackground() {
  return (
    <Wrapper>
      <div className="main">

        {[...Array(9)].map((_, i) => (
          <div key={i} className="bar" style={{ transform: `rotate(${i * 20}deg)` }}>
            <div className="dot" style={{ animationDelay: `${i * 0.2}s` }} />
          </div>
        ))}

      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  inset: 0;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(circle, #020617, #000);

  .main {
    position: relative;
    width: 200px;
    height: 200px;
  }

  .bar {
    position: absolute;
    width: 4px;
    height: 120px;
    left: 50%;
    top: 50%;
    transform-origin: bottom center;
  }

  .dot {
    width: 10px;
    height: 10px;
    background: #22d3ee;
    border-radius: 50%;
    animation: move 3s ease-in-out infinite;
  }

  @keyframes move {
    0% { transform: translateY(0); }
    50% { transform: translateY(100px); }
    100% { transform: translateY(0); }
  }
`;