import {cleanup} from "@testing-library/react";
import renderer from "react-test-renderer";
import {SelectBox} from "./Select";
import React from "react";
import {mount} from "enzyme";


describe('<SelectBox>', () => {
  afterEach(() => {
    jest.clearAllMocks();
    cleanup();
  });
  it('Match SelectBox to SnapShot', () => {
    const data = [
      {name: '1', value: '1'}
    ];
    const tree = renderer
      .create(
        <SelectBox data={data} value="1" label="Test" onChange={() => {
        }} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("Should return {} if data is an empty array", () => {
    const wrapper = mount(
      <SelectBox data={[]} value="1" label="Test" onChange={() => {
      }} />,
    );
    expect(wrapper).toEqual({});
  });

})
