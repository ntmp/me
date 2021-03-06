import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { BannerJob } from '~components/BannerJob';
import { Props } from './types';

const Container = styled.section`
background-color: var(--background-primary);
  padding: 32px 16px;
`;

const Title = styled.h3`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 12px;
`;

const Description = styled.p`
  font-size: 22px;
  font-weight: 300;
  text-align: center;
  line-height: 1.25em;
  color: var(--foreground-primary-dark);
  max-width: 360px;
  margin: 0 auto 60px;
`;

const Jobs = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 719px) {
    max-width: 520px;
    margin: 0 auto;

    ${BannerJob} {
      width: 100%;
      margin-bottom: 16px;
    }
  }

  @media (min-width: 720px) {
    ${BannerJob} {
      width: calc((100% / 2) - 10px);
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1200px) {
    ${BannerJob} {
      width: calc((100% / 3) - 30px);
      margin-bottom: 45px;
    }
  }
`;

const RecentWork: FunctionComponent<Props> = ({ jobs }) => (
  <Container>
    <Title>Trabalhos Recentes</Title>
    <Description>
      Confira aqui alguns projetos que
      desenvolvi recentemente.
    </Description>
    <Jobs>
      {jobs.map(
        (job, index) =>
          <BannerJob
            key={index}
            tags={job.tags}
            image={job.image}
            description={job.description}
            data-testid="job"
          />
      )}
    </Jobs>
  </Container>
);

export default RecentWork;
