import React from 'react';
import styled from 'styled-components';

const StyledMain = styled.main`
  padding: 0.5rem;
  text-align: center;
  color: #282c34;
`;

const Main = () => {
  return (
    <StyledMain>
      <div>안녕하세요? 기사기사입니다. 다들 합격하십쇼</div>
    </StyledMain>
  );
};

export default Main;
