# DRC School Assessment Kobo Prototype

**New v2 testing guide and link registry:** [Final Kobo v2 test links for Doug](KOBO_V2_TEST_LINKS.md). The historical v3.3 landing page below should not be presented as the final v2 project without checking the deployed version.

> **Latest handover update (17 Nov 2026):** Two separate DRC Kobo XLSForm designs now supersede this historical v3.3 development snapshot for the **next review stage**. Their source files are kept in approved project storage, not in this GitHub directory. See [Two final forms: brief for Doug](FINAL_FORMS_HANDOVER_2026-11-17.md).

## Two v2 forms for supervisor review (20261117a)

- **School Assessment** (`SAWSO_School_Assessment.xlsx`; `sawso_school_assessment_consolidated_master`): eight criteria, two inventory repeats, required 1–4 ratings, a **provisional** weighted index and priority support/action.
- **School Conditions Questionnaire** (`SAWSO_School_Conditions.xlsx`; `sawso_vf_abc_combined_v01`): 14 VF conditions A1–C5 addressing governance/compliance, monitoring/protection and mission/faith integration; no automatic compliance verdict.
- Both contain **615 matching school choices with 615 unique `school_key` identifiers** and matching Province → Level → School selection.
- **Every `managing_office` is `not_mapped`**, so true office-level reporting/permissions await the DRC school-to-office mapping.
- Ratings, fee-free-school handling and the VF review/compliance rules still need approval; the current dashboard remains illustrative.
- See the [final v2 source contract and migration notes](https://github.com/chipojaya1/SAEDtechApp/blob/main/docs/FORM_V2_RELEASE_NOTES.md).

---

## Earlier prototype notes (v3.3; retained for development history)

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
