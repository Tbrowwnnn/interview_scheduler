import React from "react";

import { render, cleanup } from "@testing-library/react";

import Appointment from "../Appointment/index";
import Confirm from "../Appointment/Confirm";
import Form from "../Appointment/Form";
import Empty from "../Appointment/Empty";
import Error from "../Appointment/Error";

afterEach(cleanup);

describe("Appointment", () => {

  it("renders without crashing", () => {
    render(<Appointment />);
  });

  it("renders without crashing", () => {
    render(<Confirm />);
  });
});