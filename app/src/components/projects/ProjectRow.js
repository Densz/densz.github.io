import * as React from 'react';
import {
  SWrapperRow,
  SDescriptionWrapper,
  STitle,
  SDescriptionText,
  STechnoText,
} from './styles';
import SocialButton from '../shared/SocialButton';

const ProjectRow = ({ title, link, description, li, selected }) => {
  return (
    <SWrapperRow key={description} selected={selected}>
      <SDescriptionWrapper>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <STitle>{title}</STitle>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              transition: '1s',
              opacity: selected ? 1 : 0,
              transform: `translateX(${selected ? '0' : '400px'})`,
            }}
          >
            {link.github && (
              <SocialButton type="github" alt={link.github} url={link.github} />
            )}
            {link.website && (
              <SocialButton
                type="website"
                alt={link.website}
                url={link.website}
              />
            )}
          </div>
        </div>
        <div
          style={{
            transition: 'opacity 1s',
            opacity: selected ? 1 : 0,
          }}
        >
          <STechnoText>
            {li.map((data, i) => `${data} ${i === li.length - 1 ? '' : '~ '}`)}
          </STechnoText>
          <SDescriptionText>{description}</SDescriptionText>
        </div>
      </SDescriptionWrapper>
    </SWrapperRow>
  );
};

export default ProjectRow;
