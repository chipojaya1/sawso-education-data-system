# Four-Role Dashboard Prototype

## What this is

A static HTML/CSS/JS mockup of the reporting dashboard concept: one system, four role-level views of the same school record.

**Live link:** https://chipojaya1.github.io/sawso-education-data-system/ (served from the `gh-pages` branch; the source copy lives in this folder on `main`)

## Views

| Level | Audience | What it shows |
|---|---|---|
| 1 · School | School staff | Home screen: outstanding tasks, assessment/report status, data-quality prompt |
| 2 · Sub-provincial office | CSP/CR office | School list for the office, status by school, submission review actions |
| 3 · Provincial | Province coordination | Reporting completion by managing office, school-condition summary |
| 4 · National | National coordination | Register totals, reporting by geographic group, national data-quality counts |

It is a visual prototype only — the data shown is illustrative, not pulled from the Master School Register, Kobo, or Power BI. Badges like "needs the school-to-office mapping" mark figures that depend on decisions or data DRC has not confirmed yet (see [planning/open-questions.md](../../planning/open-questions.md)).

## Related final Kobo form designs (November 2026)

Two final **separate** DRC v2 designs now use a matching 615-school selection list and the same `school_key`: the eight-criterion **School Assessment** and the 14-condition **School Conditions Questionnaire**. Both have version `20261117a`; neither is connected to this static dashboard. Every `managing_office` is `not_mapped`, so real sub-provincial aggregation remains unavailable.

- [Two-form handover brief](../../forms/DRC/FINAL_FORMS_HANDOVER_2026-11-17.md)
- [SAEDtechApp repo with Python/Colab demonstrations and developer notes](https://github.com/chipojaya1/SAEDtechApp)
- [Internship work log through 17 November](../../planning/work-log.md)

This mockup is a discussion aid, not proof of live Kobo integration or approved scores.

## Status

Design mockup, not wired to real data or to the Kobo/Power BI pipeline. Treat it as a starting point for discussing what each role level should actually see, not as a build spec.
