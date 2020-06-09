import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Loader, { LoaderBody, LoaderWrapper } from "./Loader";

configure({ adapter: new Adapter() });

describe("<Loader/>", () => {
  it("should render without throwing an error", () => {
    const wrapper = mount(<Loader loading={true} />);

    expect(wrapper.props().loading).toBe(true);
    expect(wrapper.find(LoaderWrapper)).toHaveLength(1);
    expect(wrapper.find(LoaderBody)).toHaveLength(1);
  });

  it("doest render anything if loading is false", () => {
    const wrapper = mount(<Loader loading={false} />);

    expect(wrapper.props().loading).toBe(false);
    expect(wrapper.find(LoaderWrapper)).toHaveLength(0);
    expect(wrapper.find(LoaderBody)).toHaveLength(0);
  });
});
