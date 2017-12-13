import React from "react";
import { configure, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Movie from "./movie";

configure({ adapter: new Adapter() });

describe("Movie", () => {
  it("renders a movie with correct name", () => {
    const movieName = "MyMovie";
    const component = render(<Movie name={movieName} />);
    expect(component.text()).toContain(movieName);
  });
});
