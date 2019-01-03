import React from 'react';

type HeroProps = {
  left: React.ReactNode,
  right: React.ReactNode
}

const Hero: React.FunctionComponent<HeroProps> = ({
  left,
  right
}) => (
  <div className="hero row align-items-end">
    <div className="hero__left col-12 col-md-4">
      {left}
    </div>
    <div className="hero__right col-12 col-md-8 col-xl-7">
      {right}
    </div>
  </div>
);

export default Hero;