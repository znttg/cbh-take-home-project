# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1 - Edit data model to add a column "custom id" to the "agents" table. This task usually takes about 30 minutes.

2 - Assess if the id pattern is the same for all of the facilities. If not, the system will need an algorithm that accepts any kind of data for the custom ids. This task usually takes about an hour, which may vary depending on the number of facilities.

3 - Alter function `getShiftsByFacility` for it to return the custom ids added by each facility for each of their agents. This task would take another hour, considering the changes to queries and models that have to be made.

4 - Edit function `generateReport` to include the custom ids determined by each facility for each of their agents. This task would also take about an hour, for it is similar to the previous one.

5 - Write test cases for it to include all scenarios regarding the different data added to the data base by the facilities. This task would usually take an hour, but it may vary depending on the number of different types of ids. Also, the quality of the tests depends directly on the time available to do it.
