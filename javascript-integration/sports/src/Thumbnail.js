import React from 'react';
import styled from 'styled-components';

const Thumb = styled.div`
  display: inline-block;
  width: 100%;
  max-width: 270px;
  margin: 20px 5px;
  box-shadow: 2px 2px 2px gray;
`;

const ThumbTitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4px;
`;

const ThumbTitle = styled.h2`
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  max-height: 400px;
`;

const Description = styled.p`
  margin-top: 0;
  font-size: 14px;
  padding: 0 5px;
  max-height: 38px;
  overflow: hidden;
`;

const Thumbnail = ({ sports }) => (
  <Thumb>
    <Img src={sports.imageSrc} alt={sports.imageDescription} />
    <ThumbTitleRow>
      <ThumbTitle>{sports.name}</ThumbTitle>
    </ThumbTitleRow>
    <Description>{sports.description}</Description>
  </Thumb>
);

export default Thumbnail;
