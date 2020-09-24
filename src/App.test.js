import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import toJson from "enzyme-to-json";

it("renders correctly", () => {
  const wrapper = mount(<App />);
  expect(wrapper.state("error")).toEqual(null);
});


 it("renders without crashing", () => {
  shallow(<App />);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const header = <h1>title</h1>;
  expect(wrapper.contains(header)).toEqual(true);
}); 


it("renders paragraph", () => {
  const wrapper = shallow(<App />);
  const header = <p>First paragraph</p>;
  expect(wrapper.contains(header)).toEqual(true);
}); 

it("renders h3", () => {
  const app = shallow(<App/>);
  const title = <h3>Fetching Users...</h3>;
  expect(app.contains(title)).toEqual(true)
});

it ("renders h3", () => {
  const wrapper = shallow(<App/>);
  const value = wrapper.find("h3").text();
  expect(value).toEqual("Fetching Users...")
});

it ("render button", () => {
  const wrapper = shallow(<App/>);
  wrapper.find('button#my-button-three').simulate("click")
})

const user = {
  name: "Adeneye David",
  email: "david@gmail.com",
  username: "Dave"
};

describe("<Account />", () => {
  it("contains account", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("david@gmail.com");
  });

  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });

  it("accepts phone account props", () => {
    const wrapper = mount(<Account user={user}/>);
    expect(wrapper.props())
  })
});

 it("renders welcome message", () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Welcome to React Testing</h2>;
  expect(wrapper.contains(welcome)).toBe(true);
  expect(wrapper.contains(welcome)).toEqual(true);
});


 
 

