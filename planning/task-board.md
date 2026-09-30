# Task Board

This is the lightweight Asana-style view for the project. Each active item is also a GitHub Issue, so the detailed notes and progress can live with the task.

## Doing now

| Task | Why it matters |
|---|---|
| [Finalize concise DRC trip discussion guide](https://github.com/chipojaya1/sawso-education-data-system/issues/1) | Substantively complete; final cleanup/freeze only. |
| [Refine DRC School Assessment Kobo starter](https://github.com/chipojaya1/sawso-education-data-system/issues/2) | Current working version is **v3.3**; further substantive changes should follow DRC feedback. |
| [Prepare DRC consultations for October 5-7](https://github.com/chipojaya1/sawso-education-data-system/issues/3) | Use the Decision Register and trip guide to resolve questions the source files cannot answer. |
| [Build data dictionary and Power BI field mapping](https://github.com/chipojaya1/sawso-education-data-system/issues/8) | **In progress.** Five-day learning/prototype sprint: Oct 1 and Oct 5–8. Use the synthetic sandbox to test the data model before expanding Kobo. |

## Power BI sprint

| Date | Focus | Intended output |
|---|---|---|
| **Thu Oct 1** | Orientation + import | Three analytical tables loaded and understood |
| **Mon Oct 5** | Data model | School Master linked 1:* to Assessment and Monitoring |
| **Tue Oct 6** | Measures + basic DAX | Six tested management measures |
| **Wed Oct 7** | Dashboard pages 1–2 | System Overview + Periodic Monitoring |
| **Thu Oct 8** | School detail + design review | Complete first prototype + KEEP / QUESTION / REMOVE / MISSING list |

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

- Translated one complete Indonesia assessment workbook: Gimpu / Pipikoro.
- Built and refined the DRC School Assessment through **v3.3**.
- Simplified visible school labels while keeping stable internal school keys.
- Built the **DRC Design Workbench** with Decision Register, Periodic Monitoring v0.1 and Baseline Profile v0.2.
- Cross-checked the trip guide against the Decision Register.
- Built **DRC Power BI Synthetic Sandbox v1.1** with 40 sampled schools, 40 synthetic assessment records and 120 synthetic monitoring records.
- Structured the sandbox as School Master + Assessment Fact + Monitoring Fact with starter DAX, relationships and suggested visuals.

## Working rule

Keep the board small. If more than about 10-12 items are active at once, move lower-priority items to backlog rather than expanding the Doing column.
