import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Option, { OptionWrapper, OptionIcon, OptionText } from "./Option";

configure({ adapter: new Adapter() });

const props = {
  selected: true,
  text: "text",
  id: 0,
};

describe("<Option/>", () => {
  it("should render without throwing an error", () => {
    const onClick = () => {};
    const wrapper = mount(<Option {...props} onClick={onClick} />);

    expect(wrapper.find(OptionWrapper)).toHaveLength(1);
    expect(wrapper.find(OptionIcon)).toHaveLength(1);
    expect(wrapper.find(OptionIcon).props().selected).toBe(true);
    expect(wrapper.find(OptionText)).toHaveLength(1);
    expect(wrapper.find(OptionText).props().children).toBe(props.text);
  });

  it("should call function with id onClick", () => {
    const onClick = jest.fn();
    const wrapper = mount(<Option {...props} onClick={onClick} />);

    wrapper.find(OptionWrapper).simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(props.id);
  });
});
