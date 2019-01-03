import React from 'react';
import classnames from 'classnames';

type SectionProps = {
  container?: boolean;
  flush?: boolean;
  yellow?: boolean;
  blue?: boolean;
  red?: boolean;
  purple?: boolean;
  green?: boolean;
};

const Section: React.FunctionComponent<SectionProps> = ({
  children,
  container,
  flush,
  yellow,
  blue,
  red,
  purple,
  green,
}) => {
  const sectionClass = classnames({
    section: true,
    'section--flush': flush,
    'section--yellow': yellow,
    'section--blue': blue,
    'section--red': red,
    'section--purple': purple,
    'section--green': green,
  });

  return (
    <section className={sectionClass}>
      {container ? <div className="container">{children}</div> : children}
    </section>
  );
};

export default Section;
