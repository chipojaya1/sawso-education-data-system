# Power BI Learning and Prototype Plan

**Working period:** 1 October and 5–8 October 2026  
**Purpose:** Learn Power BI gradually while using the DRC synthetic sandbox to test whether the current Kobo/data model supports useful management decisions.

## Working rule

Do not rush ahead to dashboard design before the previous step makes sense. The sequence is:

**Import → Model → Measures → Dashboard → Review**

If DRC consultations occur on 5–7 October, those meetings take priority. Unfinished Power BI work moves to the next available day rather than being doubled up.

## Thursday, 1 October — Power BI orientation and data import

### Goal
Become comfortable with the Power BI interface and load the DRC synthetic data correctly.

### Tasks
- Open Power BI Desktop.
- Import the three analytical tables from `DRC_PowerBI_Synthetic_Sandbox_v1.1_Sept29_2026.xlsx`:
  - `School_Master_Sample`
  - `Assessment_Fact`
  - `Monitoring_Fact`
- Learn the difference between Report view, Data view, and Model view.
- Check key data types: dates, school keys, percentages, and whole-number flags.
- Inspect the three tables and confirm what each represents.

### End-of-day output
A saved Power BI file with the three tables loaded and understood.

### Learning checkpoint
Be able to explain: School Master has one row per school. Assessment Fact contains assessment observations. Monitoring Fact contains repeated observations over time.

## Monday, 5 October — Build the data model

### Goal
Understand table relationships and create the basic DRC analytical model.

### Tasks
- Create `School_Master_Sample[school_key]` 1 → * `Assessment_Fact[school_key]`.
- Create `School_Master_Sample[school_key]` 1 → * `Monitoring_Fact[school_key]`.
- Confirm cross-filtering works.
- Test province and education-level filtering.
- Select individual schools and verify both assessment and monitoring data respond correctly.

### End-of-day output
A working relational model.

## Tuesday, 6 October — Measures and basic DAX

### Goal
Learn DAX slowly by building and testing a small set of measures.

### Measures to create
1. Schools in Sample
2. Average Assessment Score %
3. Average Attendance %
4. Teaching Days Lost
5. Schools with Teacher Coverage Problem
6. Schools with Facility/WASH Problem

### Method
For each measure: identify the management question, identify the source table, create the measure, and test it with province and school filters before moving on.

### End-of-day output
A small, understood DAX measure library.

## Wednesday, 7 October — Build the first dashboard pages

### Goal
Turn the model and measures into useful management views.

### Page 1 — DRC School System Overview
- number of schools
- average assessment score
- province slicer
- education-level slicer
- assessment score by province
- priority support area

### Page 2 — Periodic Monitoring
- average attendance
- attendance trend over July–September
- teacher-coverage problems
- facility/WASH problems
- teaching days lost
- priority support needs

### End-of-day output
Two usable dashboard pages.

## Thursday, 8 October — School detail and system review

### Goal
Build a school-level view and use the dashboard to test the data-collection design.

### Page 3 — School Detail
Allow filtering from province to school and show assessment score, attendance trend, enrolment changes, teaching disruptions, facility/WASH issues, staffing signal, and priority support need.

### Design review
Classify fields into:
- **KEEP** — directly useful for decisions
- **QUESTION** — potentially useful but needs DRC clarification
- **REMOVE / DON'T COLLECT** — creates burden without enough analytical value
- **MISSING** — needed in Power BI but not currently collected

### End-of-day output
- first complete Power BI prototype
- list of Kobo/data-dictionary changes revealed by the dashboard
- clearer Power BI requirements for the next build phase

## Current source for practice

Use the synthetic workbook only for learning and testing. All performance and monitoring values are fabricated and must not be treated as facts about DRC schools.
