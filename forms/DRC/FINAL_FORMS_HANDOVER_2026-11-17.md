# Two final DRC Kobo forms — brief for Doug

**Prepared:** 17 November 2026  
**Review discussion:** 18 November 2026  
**Status:** two finished *design* versions for SAWSO review and Kobo staging; not a live national data system or approved scoring/compliance procedure

## Start here: which form is which?

| | Form A: School Assessment | Form B: School Conditions Questionnaire |
|---|---|---|
| File (in controlled project storage) | `SAWSO_School_Assessment.xlsx` | `SAWSO_School_Conditions.xlsx` |
| Original source | School Assessment Tool — February 2024 | VF School Evaluation questionnaire / IHQ conditions |
| Kobo form ID | `sawso_school_assessment_consolidated_master` | `sawso_vf_abc_combined_v01` |
| Version | `20261117a` | `20261117a` |
| Main question | **How is the school doing, and what support does it need?** | **Are the institutional, governance, protection and mission conditions in place?** |
| Scope | 8 criteria, two repeat inventories and provisional support priorities | 14 VF conditions: A Governance and Compliance (4), B Monitoring and Protection (5), C Mission and Faith Integration (5) |
| Output | Evidence, condition records, eight required assessor ratings, provisional weighted index and follow-up action | Responses/evidence for each condition; **not** automatic certification or compliance verdict |

## Explain the School Assessment in two minutes

- **1 Infrastructure:** classrooms, building condition, toilets, handwashing and water.
- **2 Equipment/furniture/materials:** one category/material record at a time; count what is usable, repairable or beyond repair.
- **3 Enrolment and capacity; 4 Competitiveness/access; 5 Governance; 6 Community involvement; 7 School fees; 8 External support.**
- Auto-calculations reduce arithmetic; compulsory 1–4 ratings exist for all eight criteria. The weighted index uses weights **4, 1, 4, 4, 3, 3, 4, 2**, with a theoretical range **25–100**. This is an *unapproved index*, not a verified performance percentage.
- **Priority-support selection** (up to three areas) and suggested action connect a school visit to follow-up conversations.

## Explain the Conditions Questionnaire in two minutes

- **A1–A4 — Governance and Compliance:** legal registration, land/use versus operating authorization, minimum standards, governance and financial stability.
- **B1–B5 — Monitoring and Protection:** oversight, trained personnel, safeguarding systems, monitoring of effectiveness and risk.
- **C1–C5 — Mission and Faith Integration:** how the school's mission, spiritual care and community/family work are embedded.
- Common infrastructure inventories are **not re-asked in A2** where the School Assessment already covers them. Many “which ones?” follow-ups use selections rather than long text. Safeguarding questions must describe the **institutional process**, not cases/individuals.

## One shared school identity: how they fit together

Both final XLSForms:
1. Ask the assessor and assessment date, calculating the September–August academic year.
2. Select **Province → School level → School** from matching DRC choices.
3. Save the **same `school_key`** for the same school. Each has **615 matching school entries, with 615 unique keys**.
4. Populate available CONA/SECOPE and other identifiers and allow a data-quality issue to be recorded.

An eventual secure reporting system could show the school's *Assessment* alongside its *Conditions* evidence, with separate dates, versions and review decisions. Avoid joining multiple repeats or historic submissions without deduplicating by submission/version/period.

## A practical 60-second demonstration

Select a **fictional school** in the Kobo staging projects:
- Show matching Province → Level → School dropdowns and the same school key.
- **Assessment:** show one roof-condition response, one furniture inventory entry, and the provisional rating/priority support summary.
- **Conditions:** show the separate land/operating-document selections, then one B (protection system) or C (mission) condition.
- End with the four-role dashboard concept and explain *why different roles need different views*, not that it is already connected.

## Four decisions to request from Doug / DRC

1. **Approve the active register and school-to-office mapping.** All 615 records currently have `managing_office = not_mapped`, so office-level counts and permissions cannot be real.
2. **Approve scoring**: weights, C3/C7 1–3 threshold hints within a 1–4 rating system, and treatment of **fee-free schools** under C7.
3. **Approve the Conditions evidence and review process**, including privacy and safeguarding permissions; responses do not independently establish compliance.
4. **Approve a small local pilot**: which schools and assessors, dates, offline needs, languages, corrections/approvals, data protection, and what to show on each role's dashboard.

## What is ready versus what is not

**Ready for supervisor review:** two structurally aligned Kobo XLSForm designs, shared keys, explanatory form catalogue, schema audit notebook and four-role visual demo.

**Not yet demonstrated as ready for live rollout:** approved active school list and office assignments, live field pilot, secure Kobo-to-dashboard integration, authorization/audit trail, final weighted-score governance and formal VF compliance determinations.

**Source/code references:**
- [SAEDtechApp final v2 release notes](https://github.com/chipojaya1/SAEDtechApp/blob/main/docs/FORM_V2_RELEASE_NOTES.md)
- [SAEDtechApp handover guide](https://github.com/chipojaya1/SAEDtechApp/blob/main/docs/HANDOVER.md)
- [Four-role dashboard prototype](https://chipojaya1.github.io/sawso-education-data-system/)
- [SAWSO internship work log](../../planning/work-log.md)

**Handover line:** *The original ideas and reporting questions are now visible as two consistent forms and a demonstrable four-role concept. Local authorities and developers can decide what to pilot, approve and ultimately build.*
