import React from "react";
import { configure, render, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Session } from "./session";
import { fromJS, Map } from "immutable";

configure({ adapter: new Adapter() });

describe("Session", () => {
  it("renders a session with three movies", () => {
    const movies = fromJS([
      { id: 1, name: "movie1" },
      { id: 2, name: "movie2" },
      { id: 3, name: "movie3" }
    ]);
    const component = shallow(<Session movies={movies} />);
    expect(component.find("Movie").length).toEqual(3);
  });
});
