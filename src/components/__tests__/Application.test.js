import React from "react";
import axios from "axios";

import { render, cleanup, waitForElement, fireEvent, getByText, prettyDOM, getAllByTestId, getByPlaceholderText, getByAltText, queryByText, getByDisplayValue } from "@testing-library/react";

import Application from "components/Application";

jest.setTimeout(60000);

afterEach(cleanup);

describe("Application", () => {

  it("defaults to Monday and changes the schedule when a new day is selected", async () => {
    const { getByText } = render(<Application />);

    await waitForElement(() => getByText("Monday"));

    fireEvent.click(getByText("Tuesday"));

    expect(getByText("Leopold Silvers")).toBeInTheDocument();
  });

  it("loads data, book an interview and reduces the spots remaining for the first day by 1", async () => {
    const { container, debug } = render(<Application />);
    
    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointments = getAllByTestId(container, "appointment");
    const appointment = appointments[0];
    
    
    fireEvent.click(getByAltText(appointment, "Add"));
    
    fireEvent.change(getByPlaceholderText(appointment, /Enter Student Name/i), {
      target: { value: "Lydia Miller-Jones" }
    });
    
    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));
    
    fireEvent.click(getByText(appointment, "Save"));
    
    expect(getByText(appointment, "Stop being so impatient!")).toBeInTheDocument();

    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));
    
    const day = getAllByTestId(container, "day").find(day => 
      queryByText(day, "Monday")
      );
      
      expect(getByText(day, "no spots remaining")).toBeInTheDocument();
      
  });

  it("loads data, cancels an interview and increases the spots remaining for Monday by 1", async () => {
    //1 render the application
    const { container, debug } = render(<Application />);
    //2 wait until the text archie cohen is displayed
    await waitForElement(() => getByText(container, "Archie Cohen"));
    
    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );
    //3 Click on the "Delete" button on the first appointment
    fireEvent.click(getByAltText(appointment, "Delete"));
    //4 Check that the confirmation message is displayed.
    expect(getByText(appointment, "Are you sure you want to ruin everything?")).toBeInTheDocument();
    //5 Click on the confirm button to proceed to the cancel 
    fireEvent.click(getByText(appointment, "Confirm"));
    
    //6 Check to make sure the "Deleting" element is being displayed
    expect(getByText(appointment, "You're making a huge mistake!!")).toBeInTheDocument();
    //7 Wait to see if an empty element is displayed
    await waitForElement(() => getByAltText(appointment, "Add"));
    
    const day = getAllByTestId(container, "day").find(day => 
      queryByText(day, "Monday")
      );
      
      expect(getByText(day, "2 spots remaining")).toBeInTheDocument();

    //8 Check that hte DayListItem with the text "Monday" shows 1 spot remaining.

  })
  it("loads data, edits an interview and keeps the spots remaining for Monday the same", async() => {
    const { container, debug } = render(<Application />);

    await waitForElement(() => getByText(container, "Archie Cohen"));

    const appointment = getAllByTestId(container, "appointment").find(
      appointment => queryByText(appointment, "Archie Cohen")
    );

    fireEvent.click(getByAltText(appointment, "Edit"));
    
    fireEvent.change(getByDisplayValue(appointment, "Archie Cohen"), {
      target: { value: "Lydia Miller-Jones" }
    });

    fireEvent.click(getByAltText(appointment, "Sylvia Palmer"));

    fireEvent.click(getByText(appointment, "Save"));
    expect(getByText(appointment, "Stop being so impatient!")).toBeInTheDocument();
    await waitForElement(() => getByText(appointment, "Lydia Miller-Jones"));

    const day = getAllByTestId(container, "day").find(day => 
      queryByText(day, "Monday")
      );

      expect(getByText(day, "1 spot remaining")).toBeInTheDocument();
  });

  it("shows the save error when failing to save an appointment", () => {
    axios.put.mockRejectedValueOnce();
  });
  it("shows the delete error when failing to delete an appointment", () => {
    axios.delete.mockRejectedValueOnce();
  });
  

 

})