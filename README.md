# Interview Scheduler

## Introduction

Welcome to my interiew scheduler! interview scheduler is a single page application built with react that allows for the booking of interview appointments. 

## Features

Some of the features that are included are:

- Side bar dynamically lists days and spots available that can be booked. 
- Side bar day can clicked which loads the main page. 
- Main page lists time slots with currently booked appointments dynamically and empty slots that can be filled. 
- Booked appointments display the name of the person who is booked for that slot as well as the interviewer. 
- Clicking on an empty slot allows for the booking of a new appointment. 
- Booking an appointment lets the user determine the name and select from a dynamic list of interviewers. 
- Confirm and cancel buttons determine whether a user wants to cancel or save a new appointment. 
- If no input is filled or interviewer is not selected then appointment cannot be booked.
- Existing appointments can be deleted which is followed by a confirmation to ensure that user did not hit delete by accident. 
- Existing appointments can also be edited wiht the ability to change the name and/or interviewer before saving the new info. 
- Saved, Edited, or Deleted appointments are sent to the API and Database so data remains the same even on teardown or page refresh.  
- loading screens present on save or delete with custom message while data is sent to the API and database.
- Scheduler will catch an error if there is one during API request and prevent the user for proceeding with an Error message. 
- Closing the error message will take the user back to the main page with no changes. 
- Testing carried out using storybook, jest, and cypress. 

## Screenshots

Screenshot of the main page
!["Main page of scheduler"](https://github.com/Tbrowwnnn/interview_scheduler/blob/master/docs/scheduler_main.PNG)

New appointment form
!["New appointment form"](https://github.com/Tbrowwnnn/interview_scheduler/blob/master/docs/new_interview.PNG)

Main page with the new appointment saved
!["New appointment on main page"](https://github.com/Tbrowwnnn/interview_scheduler/blob/master/docs/new-appointment-saved.PNG)

Confirmation page for deleting an appointment
!["Delete appointment confirmation"](https://github.com/Tbrowwnnn/interview_scheduler/blob/master/docs/delete-confirm.PNG)

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
