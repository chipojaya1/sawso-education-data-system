# Power BI / Reporting Workstream

## Current phase

The reporting workstream is in **synthetic analytical prototyping**. The purpose is to learn Power BI and test whether the proposed collection model supports useful management decisions before adding more fields to Kobo.

## Synthetic sandbox

Current sandbox: **DRC Power BI Synthetic Sandbox v1.1**.

It contains:
- 40 sampled schools — four from each current geographic group;
- 40 synthetic school-assessment records;
- 120 synthetic periodic-monitoring records covering July–September 2026;
- a School Master dimension table;
- an Assessment fact table;
- a Monitoring fact table;
- starter relationships, DAX measures and suggested visuals.

All assessment, attendance, staffing, WASH and monitoring values in the sandbox are fabricated and marked as synthetic. They must not be interpreted as facts about real DRC schools.

## Learning / build sequence

1. **Import** — understand the three analytical tables.
2. **Model** — create School Master 1:* Assessment and School Master 1:* Monitoring relationships.
3. **Measures** — build and test a small DAX library.
4. **Dashboard** — create System Overview, Periodic Monitoring and School Detail views.
5. **Review** — classify data fields as KEEP, QUESTION, REMOVE / DON'T COLLECT, or MISSING.

Full schedule: [planning/power-bi-learning-plan.md](../../planning/power-bi-learning-plan.md)

## Core management measures planned

- Schools in Sample
- Average Assessment Score %
- Average Attendance %
- Teaching Days Lost
- Schools with Teacher Coverage Problem
- Schools with Facility/WASH Problem

## Design principle

Use Power BI to work backwards into the forms. A field should not be added to Kobo simply because it can be collected; it should support a real reporting, monitoring or management need.
