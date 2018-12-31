import React from 'react';

type AmpersandListProps = {
  headline: string;
  items: string[];
};

const AmpersandList: React.FunctionComponent<AmpersandListProps> = ({
  headline,
  items,
}) => (
  <ul className="ampersand-list">
    <strong>{headline}</strong>
    {items.map(item => (
      <li className="ampersand-list__item" key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default AmpersandList;
