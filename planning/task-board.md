# Task Board

This is the lightweight Asana-style view for the project. Each active item is also a GitHub Issue, so the detailed notes and progress can live with the task.

## Doing now

| Task | Why it matters |
|---|---|
| [Finalize concise DRC trip discussion guide](https://github.com/chipojaya1/sawso-education-data-system/issues/1) | Integrate the final cross-check questions without letting the guide grow back into a long questionnaire. |
| [Refine DRC School Assessment Kobo starter](https://github.com/chipojaya1/sawso-education-data-system/issues/2) | Current working version is **v3.3** with simplified school labels; remaining changes depend mainly on DRC definitions and feedback. |
| [Prepare DRC consultations for October 5-7](https://github.com/chipojaya1/sawso-education-data-system/issues/3) | Use the Decision Register to resolve the source / design questions the files cannot answer. |
| [Build data dictionary and Power BI field mapping](https://github.com/chipojaya1/sawso-education-data-system/issues/8) | Started through the synthetic Power BI sandbox; next step is to test which fields actually support useful management views. |

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
| **Power BI sandbox testing** | Use the synthetic data model to test dashboards and identify real data requirements before expanding the forms. |

## Recently completed

- Translated one complete Indonesia assessment workbook: Gimpu / Pipikoro.
- Verified the Indonesia assessment uses eleven broad categories and reviewed the qualitative evidence tab.
- Built and refined the DRC School Assessment through **v3.3**.
- Reworked the school lookup to **Province → Level → School**, then auto-fill CONA, SECOPE, municipality and recorded level.
- Simplified visible school labels so ordinary dropdown options show only the cleaned official school name; only truly ambiguous same-name records display a code.
- Added required evidence notes for every assessment category and structured teaching-practice questions.
- Added a provisional weighted total out of 128, with criterion 11 scored but unweighted pending DRC decisions.
- Built the **DRC Design Workbench** with a Decision Register, Periodic Monitoring v0.1 and Baseline Profile v0.2.
- Cross-checked the trip guide against the Decision Register and identified the remaining explicit questions to add.
- Built **DRC Power BI Synthetic Sandbox v1.1** with 40 sampled schools, 40 synthetic assessment records and 120 synthetic monitoring records.
- Structured the Power BI sandbox as School Master + Assessment Fact + Monitoring Fact, with starter DAX, relationships and suggested visuals.
- Cleaned the synthetic data so Power BI testing is internally coherent while keeping every fabricated value marked as synthetic.
- Prepared the final four-page supervisor meeting pack tying together the Indonesia sample, three-tier framework, Kobo demo, key decisions, and two-week plan.

## Working rule

Keep the board small. If more than about 10-12 items are active at once, move lower-priority items to backlog rather than expanding the Doing column.
