# Task Board

This is the lightweight Asana-style view for the project. Each active item is also a GitHub Issue, so the detailed notes and progress can live with the task.

## Doing now

| Task | Why it matters |
|---|---|
| [Finalize concise DRC trip discussion guide](https://github.com/chipojaya1/sawso-education-data-system/issues/1) | Doug leaves for DRC; the guide needs to be short enough to use naturally. |
| [Refine DRC School Assessment Kobo starter](https://github.com/chipojaya1/sawso-education-data-system/issues/2) | Gives Doug and the DRC team something concrete to react to. |
| [Prepare DRC consultations for October 5-7](https://github.com/chipojaya1/sawso-education-data-system/issues/3) | These meetings should resolve questions the source files cannot answer. |

## Waiting on DRC / supervisor confirmation

| Task | Blocker |
|---|---|
| [Confirm approved DRC school list and active school count](https://github.com/chipojaya1/sawso-education-data-system/issues/4) | Source says 615 in one place and 617 in another. |
| [Obtain school-to-office mapping and official hierarchy lists](https://github.com/chipojaya1/sawso-education-data-system/issues/5) | Needed for reliable office-level rollups and dropdowns. |
| [Confirm DRC school-assessment scoring adaptations](https://github.com/chipojaya1/sawso-education-data-system/issues/6) | Indonesia categories cannot all be transferred without DRC definitions. |

## Next

| Task | Trigger |
|---|---|
| [Build short monthly monitoring Kobo form v0.1](https://github.com/chipojaya1/sawso-education-data-system/issues/7) | After the monthly scope is agreed. |
| [Build data dictionary and Power BI field mapping](https://github.com/chipojaya1/sawso-education-data-system/issues/8) | After core form fields stabilize. |
| [Resolve DRC master-register defects](https://github.com/chipojaya1/sawso-education-data-system/issues/9) | Requires official source confirmation for several fields. |

## Recently completed

- Translated one complete Indonesia assessment workbook: Gimpu / Pipikoro.
- Verified the Indonesia assessment uses eleven broad categories and reviewed the qualitative evidence tab.
- Built and verified **DRC School Assessment Kobo v0.3**.
- Reworked the school lookup to **province → level → school**, then auto-fill CONA, SECOPE, municipality and recorded level.
- Reduced the choice list by removing separate 615-row CONA and SECOPE pick-lists.
- Added required evidence notes for every assessment category and structured teaching-practice questions.
- Added a provisional weighted total out of 128, with criterion 11 scored but unweighted to match the Indonesia source.
- Built the baseline vs. annual/termly vs. monthly monitoring framework, including an **event/change-only** concept and restricted safeguarding workflow.
- Prepared the final four-page supervisor meeting pack tying together the Indonesia sample, three-tier framework, live Kobo v0.3 demo, key decisions, and two-week plan.
- Created the GitHub repository dashboard, work log, timeline, open-questions register, issues, and this task board.

## Working rule

Keep the board small. If more than about 10-12 items are active at once, move lower-priority items to backlog rather than expanding the Doing column.
