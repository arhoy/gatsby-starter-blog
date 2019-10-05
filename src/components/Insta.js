import React from 'react';
import useInsta from '../hooks/useInsta';
import Image from 'gatsby-image';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem -0.5rem;
  padding: 0.5rem 0;
`;

const A = styled.a`
  width: 120px;
  box-shadow: 0;
  display: block;
  margin: 0.5rem;
  max-width: calc(33% - 1rem);
  width: 120px;
  transition: 200ms box-shadow linear;
  :focus,
  :hover {
    box-shadow: 0 2px 14px #22222244;
    z-index: 10;
  }
`;

const Insta = () => {
  const instagramData = useInsta();
  const { username } = instagramData[0];

  return (
    <>
      <h2>Instagram posts! from @{username}</h2>
      <Container>
        <A
          href={`https://instagram.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'none' }}
        >
          hello
        </A>

        {instagramData.map(d => (
          <A key={d.id} href={`https://instagram.com/p/${d.id}/`}>
            <Image fluid={d.fluid}></Image>
          </A>
        ))}
      </Container>
    </>
  );
};

export default Insta;
