# 05 Third-Party APIs: Work Day Scheduler

## Description

This is a simple calendar application that allows a user to save events for each hour of the day. This app runs in the browser and feature dynamically updated HTML and CSS powered by jQuery. Moment.js is used to work with date and time.

When the site is opened, the user is presented with a daily planner with the current day displayed at the top. When the user scrolls down, they are presented with timeblocks for standard business hours. When they view the timeblocks for that day, each timeblock is color coded to indicate whether it is in the past (grey), present (red), or future (green). When the user clicks into a timeblock, they can enter a new event or replace an existing event with new text. When they click the save button for that timeblock, the text for that event is saved in local storage, so when they refresh the page, the saved events persist.

## gif

![The Day Planner website includes the title "Work Day Scheduler", descriptive text "A simple calendar app for scheduling your work day" and today's date at the top.  Below a solid line are timeblocks for 9am to 5pm.  Each time block has a white box on the left with the hour in black, a text box in the middle, and a blue button on the right with the icon of a floppy disk.  The 9am time block has a grey background and white text "Tasks already completed".  The 10am time block has a grey background.  The 11am time block has a red background and black text "Current hour".  The remaining hours in the schedule all have a green background, with the 4pm time block also having black text "Change future event".  As the gif progresses, the page scrolls up and down, and the cursor moves to the 4pm time block.  The current text is erased, and "New Event" is typed in its place.  The cursor clicks on the blue save button.  The cursor moves to the top of the page to refresh it, and the new event is saved.](./assets/img/hw5.gif)

### Links To Application

- Here is the repo: [NotANewt/hw5_day_planner](https://github.com/NotANewt/hw5_day_planner)
- Here is the pages: [NotANewt/pages](https://notanewt.github.io/hw5_day_planner/)
