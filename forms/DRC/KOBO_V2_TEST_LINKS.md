# KoboToolbox: final v2 links and staging test

**Prepared:** 17 November 2026  
**Purpose:** one place for Doug to see **which form is which**, the testing status and the correct Kobo project links.  
**Status:** the two **XLSForms** have been independently inspected for structure and school-key consistency, but **new final v2 Kobo project URLs have not yet been supplied or verified**. Do not confuse these with an earlier v3.3 prototype.

## Links for Doug

| Form | What it answers | Final upload file | Kobo project link | Web submission link | Status |
|---|---|---|---|---|---|
| **1. School Assessment** | How is the school doing and what support does it need? Eight criteria. | `SAWSO_School_Assessment.xlsx` | **Pending test-project upload and URL** | **Pending deployment and sharing settings** | v2 `20261117a`; not yet end-to-end tested |
| **2. School Conditions Questionnaire** | Are governance, safeguarding, monitoring and mission arrangements in place? Fourteen VF conditions A–C. | `SAWSO_School_Conditions.xlsx` | **Pending test-project upload and URL** | **Pending deployment and sharing settings** | v2 `20261117a`; not yet end-to-end tested |

**Important:** Only insert URLs copied from the actual KoboToolbox project after checking the project title and uploaded form version. Project/landing links and respondent web form links serve different audiences and may require separate permissions.

### Exact workbook identities

| | School Assessment | School Conditions |
|---|---|---|
| Kobo `id_string` | `sawso_school_assessment_consolidated_master` | `sawso_vf_abc_combined_v01` |
| `version` | `20261117a` | `20261117a` |
| `form_title` | SAWSO School Assessment | SAWSO School Conditions Questionnaire |
| School selection | Province → Level → School; `school_key` | Province → Level → School; `school_key` |

The `school` choice lists match exactly (615 rows and 615 unique keys) in both uploaded workbooks. That does **not** mean the 615-school active register has been approved, or that the application has been connected to Kobo.

## Test them in KoboToolbox without disrupting older projects

1. Sign in to your KoboToolbox server. From **Projects**, choose **NEW** and **Upload an XLSForm**. Create a separate new project from `SAWSO_School_Assessment.xlsx`. Give it a descriptive name such as *SAWSO DRC School Assessment — v2 TEST*.
2. Repeat with `SAWSO_School_Conditions.xlsx` to create *SAWSO DRC School Conditions — v2 TEST*. **Do not use Replace form on an existing project yet**; the v2 schema contains renamed fields and earlier submissions may use different columns.
3. In each new project's **FORM** page, inspect the form in **Preview** before deployment. Test a fictional school, not a real child, staff member or confidential record.
4. In **both forms**, select the same Province → Level → School and confirm that the school name and key/identifiers match. Confirm that no country-level office assignment is falsely shown as approved (`managing_office` remains `not_mapped`).
5. **Assessment-specific checks:** satisfactory and severe infrastructure conditions; zero and positive toilets/handwashing; one furniture/material repeat; all eight mandatory ratings; rationale for rating 1; fee-free school path; top-three support selections; computed provisional `weighted_total`. It must not be described as an approved performance percentage.
6. **Conditions-specific checks:** A1 land-use document versus operating-authorisation selections; A2 classroom shortfall branch; A4 no/insufficient subsidy branch; at least one Section B protection-system question and one Section C mission question. Do not enter identifiable safeguarding incidents.
7. If Preview works, **DEPLOY the test project**; open the web form in the Collect data section and, if permissions permit, test one fully fictional submission per form. Check the Data view/export to confirm `school_key`, date, version, and resulting sections; for the assessment, verify repeat rows remain linked to the parent submission.
8. Copy two URLs from each project: **(a) project/landing link for Doug as a reviewer; (b) web form link for anyone authorized to test data entry.** Confirm the link works in the intended account/browser before adding it here.

**Keep private submissions and assessor contact details out of GitHub.** Use a dedicated test project so experiments do not enter an operational collection. Share only according to SAWSO's permissions.

## Earlier reference — not the final v2 form

The historical School Assessment project was documented as:

`https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing`

This link was associated with a **prior v3.3 prototype**. It must **not** be relabeled as v2 or used for Doug's final-form testing unless its actual project version is independently confirmed.

## What must be handed over after a successful test?

- Two verified Kobo **project** links (and optionally two respondent web form links, with appropriate access).
- Brief test result for each: import/preview, conditional logic, fictional submit/export, and any unresolved failures.
- The two final XLSForms in **approved SAWSO storage** (not in this public GitHub repo).
- Open decisions: 615-school active-list approval; **every `managing_office` currently `not_mapped`**; provisional score/fee-free interpretation; VF compliance standards; secure roles and local pilot.

**Related:** [Two final forms explained for Doug](FINAL_FORMS_HANDOVER_2026-11-17.md) · [SAEDtechApp technical handover](https://github.com/chipojaya1/SAEDtechApp/blob/main/docs/HANDOVER.md)

**Official KoboToolbox guide:** https://support.kobotoolbox.org/xlsform_with_kobotoolbox.html
