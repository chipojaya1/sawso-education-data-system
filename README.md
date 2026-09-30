# SAWSO Education Data System

Project tracking, KoboToolbox form design, M&E framework, and reporting documentation for the SAWSO education data systems project.

> **Working repository.** DRC and Indonesia are treated as separate country workstreams. This repository is for project documentation, form design, and tracking. Sensitive learner, safeguarding, salary, or other personally identifiable data should not be stored here.

## Quick links

- **Live DRC School Assessment Kobo form:** [Open current Kobo prototype](https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing)
- **Task board:** [planning/task-board.md](planning/task-board.md)
- **Project timeline:** [planning/timeline.md](planning/timeline.md)
- **Work log:** [planning/work-log.md](planning/work-log.md)
- **Power BI learning plan:** [planning/power-bi-learning-plan.md](planning/power-bi-learning-plan.md)
- **DRC Kobo notes:** [forms/DRC/README.md](forms/DRC/README.md)
- **Power BI / reporting notes:** [reporting/power-bi/README.md](reporting/power-bi/README.md)
- **Current supervisor / DRC discussion reference:** [docs/meeting/2026-09-30-current-discussion-pack.md](docs/meeting/2026-09-30-current-discussion-pack.md)
- **DRC Kobo notes:** [forms/DRC/README.md](forms/DRC/README.md)
- **Power BI / reporting notes:** [reporting/power-bi/README.md](reporting/power-bi/README.md)

## Current task view

### In progress
- [Finalize concise DRC trip discussion guide](https://github.com/chipojaya1/sawso-education-data-system/issues/1)
- [Prepare DRC consultations for October 5-7](https://github.com/chipojaya1/sawso-education-data-system/issues/3)
- [Build data dictionary and Power BI field mapping](https://github.com/chipojaya1/sawso-education-data-system/issues/8)

### Waiting on DRC / supervisor confirmation
- [Confirm approved DRC school list and active school count](https://github.com/chipojaya1/sawso-education-data-system/issues/4)
- [Obtain school-to-office mapping and official hierarchy lists](https://github.com/chipojaya1/sawso-education-data-system/issues/5)
- [Confirm DRC school-assessment scoring adaptations](https://github.com/chipojaya1/sawso-education-data-system/issues/6)
- [Resolve DRC master-register defects](https://github.com/chipojaya1/sawso-education-data-system/issues/9)

### Next
- [Build short periodic monitoring Kobo form v0.1](https://github.com/chipojaya1/sawso-education-data-system/issues/7) after frequency, submitter, and core signals are confirmed.

## Project status

| Workstream | Current phase | Status | Immediate next step |
|---|---|---|---|
| **DRC School Assessment** | Working Kobo prototype **v3.3** | 🟢 Prototype stable | Gather Doug/DRC feedback on definitions, scoring, weights, hierarchy and pilot scope |
| **DRC Trip / Consultation** | Discussion guide + Decision Register | 🟡 Active | Use the guide to resolve items that cannot be answered from the source files |
| **Baseline Profile** | Draft v0.2 | 🟡 Working design | Hold major expansion until DRC confirms hierarchy and country-specific needs |
| **Periodic Monitoring** | Draft v0.1 question structure | 🟡 Working design | Confirm frequency, submitter, and the smallest useful set of change signals |
| **Power BI / Reporting** | Synthetic analytical prototype | 🟡 Active | Complete the staged Power BI learning sprint and work backwards from dashboard needs |
| **Indonesia** | One complete translated assessment sample | 🟢 Reference complete | Use as a reference only; do not copy country-specific standards into DRC |

## Current DRC system architecture

| Instrument | Main question it answers | Working cadence |
|---|---|---|
| **Master School Register** | What school is this and where does it report? | Maintained centrally; update on change |
| **Baseline School Profile** | What does the school have and what is its current situation? | Once, then update major changes |
| **School Assessment** | How is the school performing against agreed criteria? | Periodic; cadence still to be agreed |
| **Periodic Monitoring** | What important things have changed since the last report? | Monthly, quarterly, or another agreed frequency |
| **Annual / Term Reporting** | What official education results and totals are required? | Existing termly / annual cycle |

Initial periodic-monitoring candidates are student attendance, enrolment movement, teacher presence/class coverage, serious facility or WASH problems, and priority support/disruption. Serious changes may be better handled as event/change alerts; safeguarding case details should remain in a separate restricted workflow.

## Current Kobo prototype

- Current working version: **DRC School Assessment v3.3**.
- Live form: [https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing](https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing)
- User flow: **Province → Level → School → auto-filled identifiers → assessment evidence and provisional score → priority follow-up**.
- Ordinary school dropdown labels use the cleaned school name only; a code is shown only for genuinely ambiguous same-name records.
- Internal school keys remain stable for joins and Power BI.
- CONA, SECOPE, municipality and recorded level auto-fill from the selected school record.
- Scoring standards and weights remain provisional until DRC confirms them.

## DRC items still waiting on confirmation

- Correct active school total: **615, 617, or another number**.
- Official school-to-managing-office mapping.
- Correct number and official names of managing / reporting offices.
- Official controlled lists for education and Salvation Army reporting hierarchies.
- Duplicate CONA ID **KSS025** and other register corrections.
- Meaning / treatment of blank or N.E. SECOPE values.
- Official school-level taxonomy, including whether Basic Education is separate.
- Definitions of reporting abbreviations and hierarchy terms.
- DRC teacher qualification standards.
- DRC legal / accreditation equivalent.
- DRC-specific WASH / preparedness thresholds.
- Learner-outcome measure and scoring descriptions.
- Final assessment weighting, cadence, and first-round scope.
- Whether teacher pay / payment regularity belongs in the assessment or remains in existing salary reporting.
- Periodic-monitoring frequency and submitter.
- Sensitive-data access rules and dashboard priorities.

## Power BI learning and prototype sprint

The reporting work is now being developed deliberately in stages rather than trying to build a full dashboard at once:

- **Thu Oct 1:** orientation + import
- **Mon Oct 5:** data model
- **Tue Oct 6:** measures + basic DAX
- **Wed Oct 7:** system overview + periodic-monitoring dashboards
- **Thu Oct 8:** school-detail view + KEEP / QUESTION / REMOVE / MISSING design review

See [planning/power-bi-learning-plan.md](planning/power-bi-learning-plan.md) for the full schedule.

## Recent outputs

- English Gimpu / Pipikoro Indonesia school-assessment sample.
- DRC source-workbook translations and school-master review.
- DRC annual-forms structure mapping.
- DRC Baseline School Profile draft.
- **DRC School Assessment v3.3** with province → level → school cascade, simplified school labels, auto-filled identifiers, required evidence notes, and provisional weighted total.
- **DRC Design Workbench** with Decision Register, Periodic Monitoring v0.1 and Baseline Profile v0.2.
- Updated DRC Trip Discussion Guide with the remaining country decisions made explicit.
- **DRC Power BI Synthetic Sandbox v1.1** with a School Master dimension, Assessment fact table and Monitoring fact table.
- Project work log, open-question tracking, GitHub Issues, task board, and timeline.

## Repository structure

```text
.
├── README.md
├── planning/
│   ├── task-board.md
│   ├── work-log.md
│   ├── open-questions.md
│   ├── timeline.md
│   └── power-bi-learning-plan.md
├── docs/
│   └── meeting/
├── forms/
│   └── DRC/
│       └── README.md
└── reporting/
    └── power-bi/
        └── README.md
```

## Working principles

- Keep **DRC and Indonesia separate**.
- Use the official country source files as the evidence base.
- Do not guess unresolved values; mark them for confirmation.
- Preserve official school names, place names, and codes; use cleaned display labels without changing stable internal keys.
- Design backwards from the decisions and reports the system must support.
- Keep field collection manageable for offline Android / Kobo use.
- Distinguish existing reporting requirements from new M&E recommendations.
- Keep sensitive operational data out of this repository unless explicit approval is given.
