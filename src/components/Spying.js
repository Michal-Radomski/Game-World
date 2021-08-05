import React from "react";
import styled from "styled-components";

const SpyingP = styled.p`
  color: var(--primary-light);
`;
const SpyingSpan = styled.span`
  color: var(--secondary);
  float: right;
`;

const Spying = () => {
  return (
    <div style={{backgroundColor: "inherit", margin: "16px"}}>
      <SpyingP>
        Version of the browser: <SpyingSpan>{navigator.appVersion}</SpyingSpan>
      </SpyingP>
      <SpyingP>
        Platform the browser is compiled: <SpyingSpan>{navigator.platform}</SpyingSpan>
      </SpyingP>
      <SpyingP>
        Engine name of the browser: <SpyingSpan>{navigator.product}</SpyingSpan>
      </SpyingP>
      <SpyingP>
        Display resolution: <SpyingSpan>{window.screen.width + " x " + window.screen.height + " pixels"}</SpyingSpan>
      </SpyingP>
      <SpyingP>
        Color depth: <SpyingSpan>{window.screen.colorDepth + " bits/pixel"}</SpyingSpan>
      </SpyingP>
    </div>
  );
};

export default Spying;
