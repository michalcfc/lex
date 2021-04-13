import * as React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';

import Radio from "components/Radio";

Enzyme.configure({ adapter: new Adapter() });

it("renders the heading", () => {
    const result = shallow(<Radio />);
    expect(result).toBeTruthy();
});

let test = "name"
console.log(test)