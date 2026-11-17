# Task Board

This is the lightweight Asana-style view for the project. Each active item is also a GitHub Issue, so the detailed notes and progress can live with the task.

## Handover snapshot — 17 November 2026

**Internship close-out: form designs completed for supervisor review; implementation decisions transferred to SAWSO/DRC.** The older sprint rows below are retained as historical planning, not a description of work still assigned to the intern.

| Workstream | Delivered | What the next owner should do |
|---|---|---|
| Two final DRC Kobo XLSForms | School Assessment (8 criteria) and School Conditions Questionnaire (14 conditions), v2 `20261117a`, identical 615-school selection | Test in staging Kobo; confirm approved active-school register; arrange country field pilot |
| Linked school identity | Shared `school_key` and selection hierarchy | Obtain and validate **school-to-managing-office** mapping; every current office is `not_mapped` |
| Scoring and VF standards | Provisional eight-criterion weighted index and separate VF evidence questions | Approve weighting, C3/C7 rules, fee-free school treatment, protection/review standards |
| Four-role app concept | Static demonstration plus a separate [SAEDtechApp Python/Colab handover](https://github.com/chipojaya1/SAEDtechApp) | Agree roles, access, approvals, data governance and local developer roadmap |

**Primary handover reference:** [Two final forms for Doug](../forms/DRC/FINAL_FORMS_HANDOVER_2026-11-17.md) and [work log through 17 Nov](work-log.md).

---

## Doing now

| Task | Why it matters |
|---|---|
| [Finalize concise DRC trip discussion guide](https://github.com/chipojaya1/sawso-education-data-system/issues/1) | Substantively complete; final cleanup/freeze only. |
| [Prepare DRC consultations for October 5-7](https://github.com/chipojaya1/sawso-education-data-system/issues/3) | Use the Decision Register and trip guide to resolve questions the source files cannot answer. |
| [Build data dictionary and Power BI field mapping](https://github.com/chipojaya1/sawso-education-data-system/issues/8) | **In progress.** Five-day learning/prototype sprint: Oct 1 and Oct 5–8. Use the synthetic sandbox to test the data model before expanding Kobo. |

## Power BI sprint

| Date | GitHub task | Intended output |
|---|---|---|
| **Thu Oct 1** | [#13 Power BI 1 - Orientation and import](https://github.com/chipojaya1/sawso-education-data-system/issues/13) | Three analytical tables loaded and understood |
| **Mon Oct 5** | [#14 Power BI 2 - Build the data model](https://github.com/chipojaya1/sawso-education-data-system/issues/14) | School Master linked 1:* to Assessment and Monitoring |
| **Tue Oct 6** | [#15 Power BI 3 - Measures and basic DAX](https://github.com/chipojaya1/sawso-education-data-system/issues/15) | Six tested management measures |
| **Wed Oct 7** | [#16 Power BI 4 - Build overview and monitoring dashboards](https://github.com/chipojaya1/sawso-education-data-system/issues/16) | System Overview + Periodic Monitoring |
| **Thu Oct 8** | [#17 Power BI 5 - School detail and data-design review](https://github.com/chipojaya1/sawso-education-data-system/issues/17) | Complete first prototype + KEEP / QUESTION / REMOVE / MISSING list |

If DRC consultations occur Oct 5–7, those meetings take priority and the unfinished Power BI block moves to the next available day.

## Waiting on DRC / supervisor confirmation

| Task | Blocker |
|---|---|
| [Confirm approved DRC school list and active school count](https://github.com/chipojaya1/sawso-education-data-system/issues/4) | Source says 615 in one place and 617 in another. |
| [Obtain school-to-office mapping and official hierarchy lists](https://github.com/chipojaya1/sawso-education-data-system/issues/5) | Needed for reliable office-level rollups and dropdowns. |
| [Confirm DRC school-assessment scoring adaptations](https://github.com/chipojaya1/sawso-education-data-system/issues/6) | DRC must define final descriptors, learning measure, qualification rules and weights. |
| [Resolve DRC master-register defects](https://github.com/chipojaya1/sawso-education-data-system/issues/9) | KSS025, blank / N.E. SECOPE and other source corrections require official confirmation. |

## Next

| Task | Trigger |
|---|---|
| [Build short monthly monitoring Kobo form v0.1](https://github.com/chipojaya1/sawso-education-data-system/issues/7) | Build only after Doug / DRC confirm monitoring frequency, submitter and core signals. |
| **Refine data dictionary from Power BI findings** | After the Oct 8 dashboard/design review identifies KEEP / QUESTION / REMOVE / MISSING fields. |

## Recently completed

- DRC School Assessment v3.3 prototype milestone completed; Issue #2 is closed.

- Translated one complete Indonesia assessment workbook: Gimpu / Pipikoro.
- Built and refined the DRC School Assessment through **v3.3**.
- Simplified visible school labels while keeping stable internal school keys.
- Built the **DRC Design Workbench** with Decision Register, Periodic Monitoring v0.1 and Baseline Profile v0.2.
- Cross-checked the trip guide against the Decision Register.
- Built **DRC Power BI Synthetic Sandbox v1.1** with 40 sampled schools, 40 synthetic assessment records and 120 synthetic monitoring records.
- Structured the sandbox as School Master + Assessment Fact + Monitoring Fact with starter DAX, relationships and suggested visuals.

## Working rule

Keep the board small. If more than about 10-12 items are active at once, move lower-priority items to backlog rather than expanding the Doing column.
