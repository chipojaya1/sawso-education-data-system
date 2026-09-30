# DRC School Assessment Kobo Prototype

## Current working version

**Version:** v3.3  
**Live Kobo form:** [Open the DRC School Assessment prototype](https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing)

The live form is a working prototype for review and testing. It is **not** a final DRC national assessment standard.

## Current user flow

1. Select Province / geographic group.
2. Select school level.
3. Select school from the filtered school list.
4. CONA, SECOPE, municipality and recorded level auto-fill from the selected school's record.
5. Complete the assessment sections.
6. Record evidence before the provisional criterion score.
7. Review the provisional weighted total and priority follow-up.

## v3.3 usability changes

- Ordinary school options display the cleaned official school name only.
- Codes are shown only where two schools in the same province + level would otherwise be indistinguishable.
- The internal `school_key` is unchanged and remains the join key for Power BI / downstream analysis.
- Original source school names are preserved separately from the cleaned display label.
- School Identification is a separate top-level section rather than being nested under Assessment Details.
- Form title and English language metadata are set correctly for Kobo.

## Known ambiguous school choices

The current source register contains two same-name pairs in Tshopo Primary with no location information to distinguish them. Until DRC provides a better identifier, the form temporarily shows:

- EP Batiapanga (TSP018)
- EP Batiapanga (TSP021)
- EP Ditu (TSP037)
- EP Ditu (TSP038)

## Still provisional / waiting on DRC

- final active-school list and count;
- school-to-managing-office mapping;
- KSS025 correction and blank / N.E. SECOPE treatment;
- official hierarchy and school-level terminology;
- DRC teacher-qualification definitions;
- legal / accreditation equivalent;
- WASH and preparedness thresholds;
- learner-outcome measure;
- DRC-specific 1–4 scoring descriptions;
- criterion weights and treatment of criterion 11;
- assessment cadence and first-round scope;
- whether teacher pay / payment regularity belongs in the assessment or stays in existing salary reporting.

## Design principle

Keep the teacher / assessor-facing form simple. Complexity such as codes, joins, hierarchy and analytical keys should live behind the form wherever possible.
