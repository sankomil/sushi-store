import styled from "styled-components";

export const DiscoverContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  width: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 600px;
  }
`;

export const Column1 = styled.div`
  background-color: ${({ dark }) => (dark ? "#000" : "#fff")};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const Column2 = styled.div`
  background-color: ${({ dark }) => (!dark ? "#000" : "#fff")};
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  justify-content: center;
  align-items: center;
  padding: 0 50px;

  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const HeaderText = styled.h1`
  font-size: 24px;
  color: ${({ dark }) => (!dark ? "#000" : "#fff")};
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  color: goldenrod;
  font-size: 16px;
`;

export const Img = styled.img`
  display: flex;
  height: 50%;
  width: 30%;
  border-radius: 50%;
`;
