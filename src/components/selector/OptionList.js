import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Option from "./Option";
import Title from "../shared/titles/H2Title";

const SelectorWrapper = styled.div`
  margin-bottom: 30px;
`;

const OptionListWrapper = styled.ul`
  padding: 0;
`;

function OptionList({ select, onClick, fetchOptions }) {
  const { options, title, selected } = select;

  useEffect(() => {
    if (!options.length) {
      fetchOptions();
    }
  }, [options, fetchOptions]);

  return (
    <SelectorWrapper>
      <Title>{title}</Title>

      <OptionListWrapper>
        {select.options.map((option, i) => (
          <Option {...option} selected={option.id === selected} onClick={onClick} key={i} />
        ))}
      </OptionListWrapper>
    </SelectorWrapper>
  );
}

OptionList.propTypes = {
  select: PropTypes.shape({
    options: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  fetchOptions: PropTypes.func.isRequired,
};

export default OptionList;
