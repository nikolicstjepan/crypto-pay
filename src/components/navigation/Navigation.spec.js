import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Navigation from "./Navigation";
import NavItem from "./NavItem";

import btcIcon from "../../assets/images/btc.svg";

configure({ adapter: new Adapter() });

const props = {
  navList: [
    {
      text: "text",
      step: 0,
      icon: btcIcon,
    },
    {
      text: "text2",
      step: 1,
      icon: btcIcon,
    },
  ],
};

describe("<Navigation/>", () => {
  it("should render without throwing an error", () => {
    const onClick = () => {};
    const wrapper = mount(<Navigation {...props} onClick={onClick} />);

    expect(wrapper.find(NavItem)).toHaveLength(2);
  });

  it("should render without nav items", () => {
    const propsWONavList = { ...props, navList: [] };
    const onClick = () => {};
    const wrapper = mount(<Navigation {...propsWONavList} onClick={onClick} />);

    expect(wrapper.find(NavItem)).toHaveLength(0);
  });
});
