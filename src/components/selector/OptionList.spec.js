import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import OptionList, { Title } from "./OptionList";
import Option from "./Option";

configure({ adapter: new Adapter() });

const select = {
  options: [],
  title: "title1",
  selected: 0,
};

const options = [
  { id: 0, text: "option1" },
  { id: 1, text: "option2" },
];

describe("<OptionList/>", () => {
  it("should render without throwing an error", () => {
    const onClick = () => {};
    const fetchOptions = () => {};
    const optionListProps = { select, onClick, fetchOptions };

    const wrapper = mount(<OptionList {...optionListProps} />);

    expect(wrapper.find(Title)).toHaveLength(1);
    expect(wrapper.find(Title).props().children).toBe(select.title);
    expect(wrapper.find(Option)).toHaveLength(0);

    const newOptionListProps = {
      ...optionListProps,
      select: {
        ...select,
        options,
      },
    };

    wrapper.setProps(newOptionListProps);

    expect(wrapper.find(Option)).toHaveLength(2);
  });
});
