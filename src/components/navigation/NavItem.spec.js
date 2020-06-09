import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import NavItem, { NavIcon, NavText, NavAction } from "./NavItem";

import btcIcon from "../../assets/images/btc.svg";

configure({ adapter: new Adapter() });

const props = {
  text: "text",
  step: 0,
  icon: btcIcon,
};

describe("<NavItem/>", () => {
  it("should render without throwing an error", () => {
    const onClick = () => {};
    const wrapper = mount(<NavItem {...props} onClick={onClick} />);

    expect(wrapper.find(NavIcon)).toHaveLength(1);
    expect(wrapper.find(NavIcon).props().icon).toBe(props.icon);

    expect(wrapper.find(NavText)).toHaveLength(1);
    expect(wrapper.find(NavText).props().children).toBe(props.text);

    expect(wrapper.find(NavAction)).toHaveLength(1);
  });

  it("should call onClick with step prop", () => {
    const onClick = jest.fn();
    const wrapper = mount(<NavItem {...props} onClick={onClick} />);

    wrapper.find(NavAction).simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(props.step);
  });
});
