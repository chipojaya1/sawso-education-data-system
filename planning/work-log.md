# SAWSO Internship Work Log

A chronological record of work completed, key outputs, decisions, and open questions for the Educational Technology for International Development internship. Historical entries below preserve what was known at the time; later findings may refine earlier interpretations rather than silently overwrite them.

## Nov 17, 2026 — final DRC Kobo forms and internship handover

### Final two linked XLSForms (20261117a)
- Consolidated and reviewed **two distinct KoboToolbox questionnaires**, each based on its own source: the February 2024 **School Assessment Tool** and the VF **School Evaluation / Conditions Questionnaire**. The completed handover filenames are `SAWSO_School_Assessment.xlsx` and `SAWSO_School_Conditions.xlsx`.
- **School Assessment** (Kobo `id_string = sawso_school_assessment_consolidated_master`): eight evidence-based criteria, two repeatable equipment/material inventories, eight **required** 1–4 provisional ratings, a calculated **provisional weighted index** (`weighted_total`, formula with weights 4,1,4,4,3,3,4,2), and `priority_support` / `priority_action` prompts. A rating of 4 in every criterion yields 100 and a rating of 1 in every criterion yields 25; the index is **not** an approved performance percentage. Fee-free-school handling and the source's differing C3/C7 threshold anchors still require review.
- **School Conditions Questionnaire** (Kobo `id_string = sawso_vf_abc_combined_v01`): all 14 VF conditions across **A: Governance and Compliance (4), B: Monitoring and Protection (5), C: Mission and Faith Integration (5)**. Separated **land tenure documentation** from **operating authorisation**, corrected subsidy-shortfall and classroom-standard follow-ups, converted applicable free-text prompts to selections, and reduced overlap with School Assessment infrastructure/inventory questions. A completed questionnaire is **not** an official compliance ruling.
- **Shared identification flow:** same assessor/date block and Province → Level → School cascade in each form; the two `school` choice lists match across **615 entries and 615 distinct `school_key` values**. Selected school details/identifiers auto-fill; officers can flag missing or incorrect register details. These verified keys provide a consistent future join for approved Kobo exports.
- Both forms retain their original Kobo form IDs and use version `20261117a`, but several question names changed from earlier draft exports. Previous test submissions must be **versioned/mapped**, not simply appended. The source agent reported successful pyxform/ODK Validate conversion; this work-log entry does not claim a newly completed end-to-end Kobo field test.

### Reporting/app work and GitHub handover
- Kept the original **four-role visual dashboard** (School, Sub-provincial, Provincial, National) positioned as a **static, illustrative concept**, not a live database application.
- Updated companion **[SAEDtechApp](https://github.com/chipojaya1/SAEDtechApp)** repository with a dedicated two-form overview, a **Python/Gradio role-level demo using fictional school records**, two **Google Colab notebooks** (demo launcher and read-only XLSForm audit), schema-only catalogue, privacy-safe migration and developer handover notes.
- The Colab audit now checks shared Kobo IDs, `school_key` selection consistency and the identical 615-choice school list when an authorized user uploads the two workbooks. The app still does **not** ingest Kobo submissions, authenticate roles or generate production Power BI reports.
- An **internship close-out presentation** and dashboard demonstration were prepared to show Doug how the original vision could be discussed with territorial leadership, schools and local developers; the deliverable is a feasible design concept and implementation starting point, **not** a finished production app.
- Prepared a concise [**final-forms brief for Doug**](../forms/DRC/FINAL_FORMS_HANDOVER_2026-11-17.md) explaining which form serves which purpose, how they are linked and what needs approval.

### Dependencies explicitly handed over
- The 615-school set is consistent between workbooks but **country confirmation of active schools remains pending**. Every `managing_office` entry is currently `not_mapped`, so real office-level reporting and permissions cannot yet be calculated.
- SAWSO/DRC approval needed for the weight/rating method (including fee-free schools), VF evidence standards, school-to-office mapping, the review/approval workflow, privacy and safeguarding access, and a country-led field pilot.
- Do **not** commit complete school choice lists, assessor contact data or Kobo submissions to public GitHub. Final XLSForms should be transferred through an SAWSO-approved controlled channel.
- **Next transition:** Doug's review of both forms; local agreement on governance and fieldwork definitions; staged Kobo pilot; then specification and development of a secure real-data reporting system.

## Nov 16, 2026 — consolidated School Assessment and final review

### Bring the revised assessment into one master version
- Compared the earlier **country-neutral prototype**, the user's edited assessment workbook and the targeted Criterion 1 review `SAWSO_School_Assessment_Targeted_C1_Review_v0.2.1`. The priority was **preserving the Criterion 1 and 2 work already completed**, not replacing it with another independent questionnaire.
- Produced/reviewed **`SAWSO_School_Assessment_Consolidated_Master_v0.3.xlsx`**, combining the three-part infrastructure section and two Criterion 2 repeat inventories while restoring provisional **1–4 ratings across all eight criteria**. A corrected working version had previously lost some ratings, so the decision was to maintain a consistent evidence → assessor rating → rationale approach.
- Carried the six remaining draft criteria through a targeted review in **`SAWSO_School_Assessment_Master_v0.4_Criteria_3_to_8.xlsx`** rather than starting them again. Changes included enrolment/capacity calculations, alternative-school access questions, governance responsibilities, community committee membership, fee information and external-support checks.
- Prepared **`SAWSO_School_Assessment_Master_v0.5_Handover.xlsx`** as a consolidated **prototype handover candidate** with eight criteria. Performed preliminary structural reviews (field names, lists, references and group boundaries); this is **not** evidence of a successful live Kobo field test.

### Make field completion less burdensome
- Compared the number of required fields in Criteria 1 and 2, distinguishing **conditionally visible** questions from the total number of XLSForm rows. The design principle became: **select/count first; ask for written explanation when a significant defect needs explaining**.
- Identified four targeted usability improvements for later controlled edits: optional explanations for minor roof/wall/floor/window problems, optional details for other components and repair history, one optional combined WASH observations field, and a single optional equipment repair/comments field.
- Practised implementing conditional roof/wall/floor/window detail logic in **KoboToolbox Form Builder**, including the practical difference between simple Mandatory Response controls and conditional required expressions. These were **proposed/step-by-step edits**, not independently verified as completed for all four questions.
- Reaffirmed that the provisional ratings and original scoring weights should not be called approved results without SAWSO/DRC review.

### Internship close-out communication
- Prepared the first **four-slide SAWSO internship close-out presentation**, including a reflective summary of accomplishments, lessons, thanks and what could be taken forward. An animated presentation and editable PowerPoint were also produced for review; they are **communication artifacts**, not evidence of an operational app.

## Nov 13, 2026 — Criterion 1 quality review and Criterion 2 inventory redesign

### Criterion 1 workbook inspection and corrections
- Reviewed the user's completed **Criterion 1 — Infrastructure** workbook against the source requirements and an independent review. Preserved the three sections: **A. Building size and classroom availability; B. Building condition and repairs; C. Water, sanitation and hygiene (WASH)**.
- Worked through issues such as duplicate repair questions, question naming, classroom and other-room integer/count types, missing constraints, overlapping condition-choice lists, required evidence details and handwashing/toilet functionality.
- Produced/reviewed the corrected Criterion 1 workbook(s), including `SAWSO_School_Assessment_Criterion_1_Final_Choices.xlsx`, while keeping existing drafts for Criteria 2–8 rather than deleting them.

### Criterion 2 as a structured, repeatable inventory
- Moved **Criterion 2 — Furniture, Equipment and Instructional Materials** beyond one large free-text inventory. The intended design captures **one equipment or material category per entry**, not a separate row for every physical desk or book.
- Developed a standalone XLSForm and revised version, including `SAWSO_Criterion_2_Standalone_XLSForm_Revised.xlsx`: equipment type, quantity, usable/repairable/beyond-repair breakdown, repair observations; plus instructional-material type, quantity, curriculum year, condition and sharing ratios.
- Applied independent technical feedback: removed hard-coded question numbers from labels, required positive nonzero ratio values when recorded, narrowed the curriculum-year range, cleaned label punctuation and prevented redundant rating-choice lists on eventual merge.
- Checked the uploaded combined workbook `School assessment.xlsx` for duplicate assessment dates, duplicate English language columns, overlapping rating lists and misleading introduction text. Prepared a **separate safe-repair copy** instead of overwriting the user's current Kobo project.
- **Verification boundary:** workbook-level structural review and a prepared standalone form are not equivalent to Kobo import, offline field testing or staff approval.

## Nov 11, 2026 — complete Criterion 1 WASH section

- Continued the **manual, question-by-question KoboToolbox School Assessment build**. Completed/drafted the **Q25–Q35 WASH sequence** covering total and functional toilets, toilet condition and observations; total and functional handwashing facilities; and the main drinking-water source, sufficiency and cost.
- Added practical data-quality rules: counts cannot be negative; working toilets/handwashing facilities cannot exceed installed totals; condition-dependent questions appear only when relevant.
- Captured the difference between **zero facilities** and facilities whose condition cannot be assessed. Drafted/checked conditional prompts for missing drinking-water sources and “Other” responses.
- These were form-design and manual-entry milestones. Final submission usability, operational counts and country-specific WASH standards still required testing and approval.

## Nov 10, 2026 — begin detailed country-neutral School Assessment rebuild

- Shifted from the earlier modular VF conditions work to the separate **February 2024 School Assessment Tool**, starting a more usable, country-neutral version through **KoboToolbox Form Builder**, question by question.
- Worked through early **Criterion 1 — Infrastructure** questions: building/classroom counts and availability; condition choices and evidence for roofs, walls, floors and windows; repairs and other building components. By the end of the session, the design had reached the later part of the building-condition questions (around Q19).
- Replaced broad unstructured descriptions where feasible with **select-one condition descriptions and numeric counts**, keeping typed explanations where assessors need to justify a problem or note repairs.
- Kept the DRC school list and territory-level adaptation as a separate configuration concern until the form's assessment questions and usability had been reviewed. This build was **work in progress**, not a finished national assessment form.

## Nov 9, 2026

### VF school evaluation: manual Kobo Form Builder prototype
- Continued the **VF (ENG) School Evaluation Questionnaire** prototype directly in KoboToolbox Form Builder, proceeding one question at a time with confirmation after each step. This is distinct from the February 2024 weighted School Assessment Tool, which remains out of scope for the current VF digitization.
- Built an introductory assessor/school-identification flow (assessor name, role and assessment date; province and school selection). Used **three fictional provinces (A, B, C)** and **five sample schools** for demonstration. Province-to-school cascading selection and the real 615-school register were intentionally deferred.
- Worked through **A1 Legal Registration**, covering land ownership, right-to-occupy documentation and document type, optional land-document evidence, and operating registration/authorization status. A separate school registration-number question was deliberately omitted as unnecessary.
- Began **A2 Minimum Standards** with school-building availability, building condition, construction materials and compliance with the authorized structure. Question 15 (authorized structure) was user-confirmed as entered. Question 16 (number of missing rooms, shown when structure is not compliant) was proposed, but its entry into the live form was **not confirmed** before switching to workbook review.
- The working form was exported from KoboToolbox for inspection. A first uploaded workbook appeared to be a separate eight-criterion assessment; it was **not** treated as the VF Section A form. A subsequent upload was used as the current working form for the combined build.

### Combined Sections A, B and C overview
- Prepared an initial **A+B+C overview XLSForm** from the three existing standalone draft workbooks: `SAWSO_VF_Combined_Sections_A_B_C_Overview.xlsx`. This was a demonstration artifact, not a replacement for the user's working Kobo form.
- Subsequently appended the existing **B1–B5 Monitoring and Protection** and **C1–C5 Mission and Faith Integration** draft sections to the **user's uploaded working form**, producing `SAWSO_School_Evaluation_Your_Form_Plus_B_C.xlsx`. Preserved the uploaded form's existing Section A rather than rebuilding it from the older standalone A draft.
- The combined file was reported to contain **117 question/data-entry fields**: **59 in the existing A/identification portion, 48 in B, and 10 in C**. Preliminary structural checks reported no duplicate question names, missing choice lists, unresolved references or unmatched groups. These counts and checks describe the draft workbook, **not a completed Kobo import or end-to-end test**.
- Identified two Section A items requiring recheck: the **registration-authorization evidence photo prompt** discussed during manual design was not present in the uploaded working form, and the **authorized-building-structure skip logic** still needed verification.
- This integrated overview is for assessing the full respondent journey and section burden. It does **not** establish approved source fidelity, a scoring rubric, compliance decisions, safeguarding/privacy procedures, or readiness for DRC field deployment. The earlier modular A/B/C drafts remain available for separate review.

### Next actions / verification boundary
- Import the combined workbook as a **new KoboToolbox project**, without overwriting the current working form; verify that A, B and C all display correctly in Preview.
- Walk through **Yes / No / Don't know** and other conditional paths, particularly A1 document evidence, A2 building-compliance/missing-room logic, and the sensitive protection questions in B. Confirm which fields are actually required and whether optional evidence collection is appropriate.
- Compare each condition with the original VF questionnaire, review wording and workload with Doug/DRC stakeholders, and record any approved changes before producing a revised version.
- Resume the step-by-step A2 build only after checking the exported form and the integrated overview. **No user-confirmed successful import, Preview test, submission or field deployment of the new combined workbook has yet been recorded.**

## Oct 19, 2026

### Modular VF Kobo forms: review and import progress
- Revisited the Oct 15 decision to develop the VF questionnaire as three independent **sample** Kobo forms (Sections A, B, C) before building the separate school registry and eventually the complete evaluation.
- Received and reviewed the three sample XLSForm workbooks for Sections A, B, and C. Initial structural inspection reported standard `survey`, `choices`, and `settings` sheets, no duplicate question names, no unresolved field references in skip logic, and no missing referenced choice lists. These checks are **preliminary**, not equivalent to complete technical or source-fidelity validation.
- Confirmed **Form 1 — Governance and Compliance** had been imported into KoboToolbox. **Section A1–A4 sample-form testing has not yet been reported as completed**.
- Confirmed **Form 2 — Monitoring and Protection** was successfully imported into KoboToolbox today. Its five condition groups (B1–B5), preview behavior, branching, usability, and submission workflow are **not yet verified**; successful import is the only user-confirmed test result.
- **Form 3 — Mission and Faith Integration** remains a standalone XLSForm draft; no successful Kobo import reported.
- No v0.2 revision made to any of the three drafts; no production deployment or real DRC data collection confirmed.

### Review findings requiring follow-up
- **Form A:** check classroom-details display when standards are not met; governance-functioning logic when no structures exist; handling of insufficient subsidies even when subsidies are received; legal/property evidence and terminology.
- **Form B:** examine staff-qualification definitions; child-protection branching and privacy; impact-evaluation introductory note versus answerable items; completion burden of long-form risk questions; evidence needed for meaningful follow-up.
- **Form C:** review broad spiritual-care and vulnerable-population questions, collaboration narratives, and whether parent-engagement structures' functioning is captured.
- All substantive response questions remain optional in these sample drafts. This supports prototyping but is not an approved rule for live data collection.
- Deferred adding 615-school master, geographic cascades, CONA/SECOPE, and cross-form record linkage until modular content is reviewed. A stable school identifier will be necessary before collecting operational data across independent projects.

### Section A conceptual review consolidated
- Reviewed A1 Legal Registration, A2 Minimum Standards, A3 Governance Structure, and A4 Financial Stability through hypothetical cases and comparisons with related material in the February 2024 assessment tool **for understanding only**. The February workbook is still out of scope for current digitization.
- Key distinctions: land ownership versus authorization; building/facility availability versus standards compliance; governance structures versus effectiveness; subsidy receipt versus adequate and sustained financial resources.
- Treated reported answers, supporting evidence, reviewer judgment, and follow-up action as separate concepts. No compliance determination or approved scoring rubric has been invented.
- These discussions amount to **initial conceptual analysis**, not an exhaustive original-source-to-XLSForm audit.

### Next steps and stopping point
- Scheduled a reminder for **Oct 20, 2026 (morning)** to test **all Section A conditions A1–A4** in standalone Form 1. Capture pass/fail/unclear results, alternate answer paths, evidence prompts, wording concerns, and stakeholder questions.
- Next test Form B in Kobo Preview (opens without errors; B1–B5 visible; navigation and conditional paths), then address its source-fidelity and sensitivity/usability checks.
- Later import and test Form C, conduct cell-by-cell source fidelity reviews, and decide on justified corrections before creating any new versions.
- Work stopped for the day after Form B import was confirmed; Form B Preview success was **not** confirmed.

### End-of-day verification snapshot
| Sample form | Confirmed status at close of Oct 19 | Still to verify |
| --- | --- | --- |
| **Form 1 — Governance and Compliance (A1–A4)** | Imported into KoboToolbox; initial conceptual review completed | All four condition paths in Preview, source-to-question fidelity, conditional follow-ups, evidence fields, test submission |
| **Form 2 — Monitoring and Protection (B1–B5)** | Imported successfully today | Preview opens correctly, five groups display, branching, sensitive-question handling, usability, test submission |
| **Form 3 — Mission and Faith Integration (C1–C5)** | Standalone XLSForm draft prepared | Kobo import, Preview, conditional questions, source fidelity, test submission |

- **QA boundary:** A successful import establishes that Kobo accepted the workbook; it does not establish that the questionnaire behaves correctly. No completed end-to-end test, Android/offline field test, or DRC supervisor approval has been confirmed for these three samples.
- **Carry-forward:** Start with the already planned Oct 20 A1–A4 walkthrough; log actual results as **Pass / Fail / Unclear** with the tested answer path and any question for Doug. Then verify Form 2, followed by Form 3.
- **Scope remains unchanged:** The school registry and integrated Form 5 are deferred; the February 2024 School Assessment Tool remains out of scope for the current VF digitization work.

## Oct 15, 2026

### Modular VF questionnaire design decision
- Decided to work **only on the VF School Evaluation Questionnaire** for this phase; explicitly set aside the February 2024 School Assessment Tool.
- Clarified that the previously mentioned “baseline data” meant the **school registry**, not a separate baseline profile.
- Agreed a **five-form development sequence**:
  1. **Form 1 — Governance and Compliance** (VF Section A, 4 conditions);
  2. **Form 2 — Monitoring and Protection** (VF Section B, 5 conditions);
  3. **Form 3 — Mission and Faith Integration** (VF Section C, 5 conditions);
  4. **Form 4 — School Registry** (later, based on the existing DRC register);
  5. **Form 5 — Complete School Evaluation** (later, integrating the approved VF sections with school identification).
- For Forms 1–3, deliberately **excluded the 615-school register, province / level cascades, CONA and SECOPE identifiers** so question wording, response options, evidence prompts and skip logic can be reviewed independently.
- Maintained the distinction between collecting evidence and making an official compliance determination; no unapproved scores or compliance ratings were introduced.

### Three standalone Kobo XLSForm drafts
- Prepared three separate sample XLSForm workbooks, each with its own `survey`, `choices`, and `settings` sheets:
  - `DRC_VF_Form_1_Section_A_Governance_Compliance_SAMPLE_v0.1.xlsx`;
  - `DRC_VF_Form_2_Section_B_Monitoring_Protection_SAMPLE_v0.1.xlsx`;
  - `DRC_VF_Form_3_Section_C_Mission_Faith_Integration_SAMPLE_v0.1.xlsx`.
- Prepared companion `DRC_VF_Forms_1_to_3_Source_Mapping_and_Review_v0.1.xlsx` for tracing source questions, digital adaptations and items requiring Doug's review.
- Confirmed the intended deliverable format as **three independent documents / Kobo projects**, rather than a combined workbook.
- Preliminary workbook structure checks were reported during drafting, but **Kobo import, Preview behavior, field usability and question-by-question source fidelity have not yet been independently validated** for these three new forms.
- The standalone files are draft working artifacts; this log entry does **not** imply they have been uploaded to GitHub or deployed for DRC data collection.

### Next actions
- Import and test **Form 1** as a separate Kobo project, then test Forms 2 and 3.
- Review each section against the original VF source, checking question completeness, conditional follow-ups, evidence handling and ambiguous wording.
- Keep a short list of substantive decisions for Doug; make only justified revisions after testing.
- Build the standalone School Registry and the combined VF evaluation form only after the modular question drafts have been reviewed.

## Oct 14, 2026

### Review of supervisor-prioritized DRC evaluation instruments
- Recapped Doug's direction to **prioritize digitizing the VF (ENG) School Evaluation Questionnaire** and treat the separate **School Assessment Tool — FEB-2024** as a later, more complex design task.
- Reviewed the VF questionnaire's structure and purpose as an inquiry into **14 non-negotiable conditions** across three populated domains:
  - **A. Governance and Compliance** (4 conditions);
  - **B. Monitoring and Protection** (5 conditions);
  - **C. Mission and Faith Integration** (5 conditions).
- Noted that **D. Additional Research Questions** is a heading without populated questions in the source.
- Distinguished the questionnaire's source content (conditions, data sought, questions and follow-ups) from proposed Kobo field types, skip logic, evidence prompts and compliance judgments.
- Reviewed the February 2024 assessment workbook conceptually across **Research data - Evidence**, **Weighted scores**, and **Criteria definitions**, with particular attention to Doug's emphasis on the first and third tabs.
- Flagged substantive issues for later review, including differing criterion coverage between tabs, scoring/weighting inconsistencies, Indonesian-context examples and the need to avoid carrying unapproved criteria into the DRC form.

### Detailed source analysis: VF Section A, Condition 1
- Began a condition-by-condition review with **Legal Registration** (English worksheet, rows 8–9).
- Separated three questions that should not be conflated:
  - whether the school owns the land;
  - what proof supports ownership or another occupancy arrangement;
  - which legal document authorizes the school to operate.
- Examined the source references to property title / parcel record / registration certificate and approval decree / micro-plan / provisional operating authorization.
- Identified unresolved interpretation and evidence questions: land ownership versus lawful tenure, the legal owner when land belongs to another Salvation Army entity, whether assessors must inspect documents, and how provisional authorization should be handled.
- Kept proposed evidence-verification statuses and document metadata as **design options**, not source requirements or approved DRC compliance rules.
- Agreed to understand each original condition and its evidence needs before changing the Kobo prototype.

### End-of-day position
- Source interpretation and evidence requirements are being examined before further changes to the VF form.
- The previously uploaded complete VF Kobo v0.1 remains a **draft**: successful Kobo project creation and school filtering had been tested on Oct 13, but full question-level review and conditional-logic testing remain open.

## Oct 13, 2026

### First complete VF/IHQ questionnaire draft and technical smoke test
- Following Doug's request to prioritize the `VF (ENG) Questionnaires basées sur les conditions ADS QGI_DB.xlsx`, prepared an initial **combined** Kobo XLSForm draft, `DRC_IHQ_Conditions_Questionnaire_Kobo_DRAFT_v0.1.xlsx`, and its companion `DRC_IHQ_Conditions_Questionnaire_Source_Map_and_Decisions_v0.1.xlsx`.
- Mapped the three populated VF domains (A Governance and Compliance; B Monitoring and Protection; C Mission and Faith Integration), keeping 14 conditions distinct and recording source-cell mapping and unresolved adaptation decisions. The source's Section D contained only a heading; no additional questions invented.
- The complete draft reused the working 615-school list for Province → Level → School selection and auto-populated identifiers; the official school count and underlying master-data issues remain unresolved.
- **User-confirmed Kobo tests:** successful import; Preview opens; geographic group options appear; province filters school levels; school level filters schools; selected school displays CONA, SECOPE, level and location; and Yes/No land ownership correctly shows/hides the ownership-proof follow-up. Six initial Preview checks passed.
- The combined form was **not** fully source-verified, field-tested, or approved. This was a useful initial prototype; the later Oct 15 decision superseded it as the *immediate development approach*, without deleting it or treating its tests as proof that the standalone forms work.

## Oct 7, 2026

### Custom app prototype: assessment workflow
- Continued building the DRC custom app prototype in Google Colab using Python and Gradio, using the current Kobo v3.3 workbook as the source for field names and choice lists.
- Extended the prototype from school identification into a working assessment flow covering:
  - school selection;
  - assessor information;
  - Criterion 1 — Infrastructure;
  - evidence and provisional scoring;
  - saving an assessment submission.
- Added the assessor-role workflow, including a conditional **Other assessor role** field so users can specify a role not included in the standard list.
- Added validation for numeric infrastructure fields so counts cannot be negative and usable classrooms cannot exceed total classrooms.
- Tested the save workflow and validation messages, including required fields and assessor-role handling.
- Tested repeated save clicks. Repeated clicks created duplicate test rows, which were then cleaned from **5 rows to 1 retained submission**. This exposed a further prototype requirement for duplicate-submit protection before wider use.

### Criterion 2 preparation
- Began mapping **Criterion 2 — Facilities, equipment, furniture and teaching materials** directly from the current survey structure rather than recreating the questions from memory.
- Confirmed the current fields for:
  - student furniture adequacy and condition;
  - teacher furniture adequacy;
  - approximate student textbook ratio;
  - teacher guide availability;
  - reading / leveled book availability;
  - board condition;
  - criterion score and evidence.
- Preserved the current source choice lists for adequacy and textbook ratios as the basis for the next app build step.
- Kept the assessment prototype positioned as a working test environment; current scoring remains provisional pending DRC confirmation.

### Four-level app vision
- Stepped back from individual form fields to brainstorm what the eventual application should look like for different users in the DRC education reporting chain.
- Developed a four-level concept using the same underlying school data but different views and tasks:
  1. **School** — enter, review and submit information; see due dates and the school's own submission history.
  2. **Managing office / Sub-provincial** — review school submissions, identify missing or problematic records, follow up, and support schools.
  3. **Provincial** — monitor reporting, compare managing offices, identify patterns and prioritize schools or areas needing attention.
  4. **National** — see the country picture, reporting coverage, priority needs and data-quality issues to support higher-level decisions.
- Framed the core principle as **same data, different jobs**: information should be entered once and then reviewed, aggregated and presented differently according to the user's role rather than repeatedly re-entered at each level.
- Identified the proposed flow as **School → Managing Office / Sub-provincial → Provincial → National**, subject to DRC confirmation of the actual administrative workflow.

### Visual concept and supervisor review materials
- Turned the four-level concept into visual screen mock-ups for the four user views.
- Created an editable **Supervisor Review** Word document so the DRC supervisor can comment directly on the proposed views and workflow.
- Added the Claude-generated visual mock-ups for:
  - School;
  - Sub-provincial / Managing Office;
  - Provincial;
  - National.
- Revised the document so the opening is a single concise concept page rather than two repetitive introductory pages, followed directly by the four visual views.
- Added review prompts focused on what each level should see, what users should be allowed to edit versus review, and which parts of the workflow still require DRC guidance.
- Kept figures, dates, percentages and example records in the mock-ups clearly positioned as illustrative rather than validated DRC results.

### End-of-day position
- The work now has both a **working assessment prototype** and a broader **application vision** showing how the same data could support users at four levels.
- The immediate technical build remains focused on extending the assessment criterion by criterion, while the four-level concept is being used to think backwards from how the information will ultimately be reviewed and used.
- The four-level application views are a **working concept for supervisor / DRC feedback**, not a final system specification.

## Oct 6, 2026

### DRC team meeting and digitisation pilot discussion
- Joined the DRC team meeting to meet the country team and begin understanding the operational context directly from staff.
- Confirmed that the DRC team has **not previously digitised this school-assessment process**, so the proposed school-assessment digitisation will need to be treated as a pilot rather than as a simple conversion of an existing digital workflow.
- The discussion focused on **why digitisation matters to the DRC team** and on the value of piloting the school assessment before attempting broader scale-up.
- Framed the pilot as an opportunity to test the **whole workflow**, not only whether a form can be completed on a device:
  - school selection;
  - form completion;
  - offline / field use;
  - submission;
  - review and correction;
  - aggregation / reporting;
  - follow-up and management use.
- Kept the current Kobo form positioned as a **prototype for testing and feedback**, not as a final DRC assessment standard.
- Used the meeting to strengthen the consultation focus around current paper-process pain points, who completes / reviews reports, what would make the pilot successful, and what information the team would actually use for decisions.

### Google Colab / Python app prototype
- Began a parallel **custom app prototype in Google Colab using Python**, with Gradio selected as the notebook-based interface framework for rapid prototyping.
- Confirmed the working environment:
  - Gradio 6.29.0;
  - pandas 2.2.3.
- Connected Colab to the SAWSO Google Drive workspace and loaded the current DRC assessment workbook directly from:
  `/content/drive/MyDrive/SAWSO/DRC/Kobo form/DRC_School_Assessment_Kobo_Starter_v3.3.xlsx`.
- Verified the workbook structure:
  - `survey`;
  - `choices`;
  - `settings`.
- Inspected the `choices` sheet and confirmed:
  - 718 total choice rows;
  - 615 school-choice rows;
  - 10 province choices;
  - 27 province/registration-level combinations;
  - 5 school-level choice rows in the form configuration.
- Verified that all **615 school records have a unique `school_key`**, with no duplicate school keys.
- Confirmed the actual level keys present in the current school register are:
  - nursery;
  - primary;
  - secondary.
- Built a clean Python `schools_df` for app use, preserving:
  - stable internal `school_key`;
  - cleaned teacher-facing school label;
  - province and readable province label;
  - level key;
  - CONA;
  - SECOPE;
  - municipality / territory / locality;
  - recorded education level;
  - original source school name.
- Verified the school-master distribution across the ten current geographic groups:
  - Haut-Katanga 8;
  - Haut-Lomami 11;
  - Kasai-Central 41;
  - Kinshasa 83;
  - Kongo Central 185;
  - Kwilu / Bandundu 29;
  - Mongala 85;
  - North Kivu, South Kivu & Maniema 11;
  - Tanganyika 6;
  - Tshopo 156.
- Prepared the next app step: a Gradio **Province → Level → School** cascade with auto-filled school identifiers and details.

### End-of-day position
- The DRC digitisation work now has two complementary prototypes:
  - the existing **Kobo School Assessment v3.3** for field-oriented testing;
  - an early **Google Colab / Python / Gradio prototype** for experimenting with custom application logic.
- The main design principle remains to test the workflow and decision usefulness before scaling either tool.
- Do not treat the current pilot discussion, provisional scores, or prototype application behaviour as final DRC policy or standards.

## Sep 29, 2026

### Project reset and current architecture
- Resumed the project after the weekend and confirmed that the planned Friday meeting with Doug did **not** take place, so there were no supervisor decisions to incorporate.
- Reconfirmed the working four-instrument architecture for DRC:
  1. **Master School Register** — who / where the school is.
  2. **Baseline School Profile** — stable or slow-changing school conditions and resources.
  3. **School Assessment** — periodic performance / quality assessment.
  4. **Periodic Monitoring** — a short “what changed?” return focused on actionable signals.
- Kept the existing DRC annual / termly reporting cycle separate from the proposed new periodic-monitoring layer.

### DRC School Assessment Kobo form
- Reviewed the current assessment form and stabilized the structure through **v3.2**:
  - School Identification moved out of the Assessment Details group so its submission path is no longer nested under `/data/visit/`.
  - `constraint_message::English (en)` now uses the same language tag as the rest of the form, avoiding a phantom second language in Kobo.
  - Added the visible form title **DRC School Assessment** while keeping the form ID stable.
  - Retained the **Province → Level → School** cascade and automatic CONA / SECOPE / municipality / recorded-level lookup.
  - Retained text phone fields and confirm-email / confirm-phone match constraints.
  - Retained the provisional weighted total out of 128, with criterion 11 scored but currently unweighted.
- Simplified the school dropdown in **v3.3** to reduce cognitive load for teachers / assessors:
  - cleaned excessive source whitespace in visible school labels;
  - removed visible CONA codes from normal school labels;
  - kept the internal `school_key` unchanged for joins and Power BI;
  - preserved the original source school name in metadata;
  - showed the CONA code only for the four genuinely ambiguous Tshopo choices:
    - EP Batiapanga (TSP018)
    - EP Batiapanga (TSP021)
    - EP Ditu (TSP037)
    - EP Ditu (TSP038)
  - kept full identifiers available after selection through the existing auto-fill confirmation note.
- Confirmed no formula / reference errors after the v3.3 school-label changes.

### Decision register, baseline and periodic-monitoring design
- Built a **DRC Design Workbench** with:
  - a dashboard;
  - a Decision Register separating **Confirmed Source**, **Confirmed Build**, **Working Design**, **Needs DRC**, and **Recommendation**;
  - a draft **Periodic Monitoring v0.1**;
  - a draft **Baseline Profile v0.2**.
- Decision Register currently identifies the major items still requiring DRC / Doug confirmation, including:
  - active school count;
  - school-to-managing-office mapping;
  - 13 vs 14 managing offices;
  - official school levels and hierarchy terminology;
  - assessment weights / DRC descriptors;
  - learner-outcome measure;
  - teacher qualification standard;
  - legal / accreditation equivalent;
  - WASH / preparedness thresholds;
  - assessment cadence and first-round scope;
  - periodic-monitoring frequency / submitter;
  - sensitive-data access and dashboard priorities.
- Periodic Monitoring v0.1 was kept deliberately short and centred on five change signals:
  - student attendance;
  - enrolment movement;
  - teacher presence / class coverage;
  - serious facility / WASH problem;
  - priority support / disruption.
- Kept event/change alerts separate from the routine periodic return and kept safeguarding case details outside the general form in a restricted workflow.
- Baseline Profile v0.2 was structured around stable / slow-changing fields and explicitly excludes:
  - detailed 1–4 assessment scores;
  - periodic attendance / enrolment movement;
  - safeguarding case details.

### Trip guide cross-check
- Cross-checked the DRC decision register against the current trip discussion guide.
- Confirmed that the guide already asks who would submit a short monthly return, so a proposed duplicate question was dropped.
- Identified several issues that should be asked explicitly rather than left only as document requests, especially:
  - school-to-managing-office mapping;
  - how DRC wants 1–4 criterion scores combined / weighted;
  - DRC descriptors for learner outcomes, staff credentials and teaching quality;
  - assessment cadence;
  - first assessment scope.
- Reframed teacher pay / allowances as a **design question**, not an automatic missing assessment field:
  - DRC already has a Salary Situation reporting stream;
  - pay data are sensitive;
  - if pay is removed from the DRC version of Indonesia Criterion 10, the Indonesia weight attached to that criterion should not be carried across mechanically.

### Power BI synthetic sandbox
- Built **DRC Power BI Synthetic Sandbox v1.1** to start testing the collection-to-dashboard pipeline before live DRC data exist.
- The sandbox uses:
  - **40 sampled schools** — four from each of the ten current geographic groups;
  - source school names / identifiers from the current DRC register sample;
  - **40 synthetic school-assessment records**;
  - **120 synthetic periodic-monitoring records** covering July, August and September 2026.
- Every fabricated fact row is explicitly marked **SYNTHETIC_TEST_ONLY**.
- Structured the workbook as a simple analytical model:
  - `School_Master_Sample` as the dimension;
  - `Assessment_Fact` as the assessment fact table;
  - `Monitoring_Fact` as the repeated periodic-monitoring fact table.
- Added a Power BI setup sheet with:
  - model relationships;
  - starter DAX measures;
  - suggested visuals.
- Refined the synthetic data so dashboard behaviour is internally coherent:
  - cleaned school names to match the simplified Kobo v3.3 labels;
  - aligned assessment attendance with September monitoring attendance;
  - constrained synthetic relevant qualifications so they do not exceed degree/equivalent counts;
  - replaced blank problem types with **No problem reported**;
  - spread synthetic infrastructure scores across all four 1–4 bands so testing visuals have useful variation;
  - recalculated weighted totals after changes.
- Confirmed referential integrity and no formula / reference errors in the final sandbox.

### End-of-day position
- Current Kobo working version: **DRC School Assessment v3.3**.
- Current analytical sandbox: **DRC Power BI Synthetic Sandbox v1.1**.
- Current design workbench: **DRC Design Workbench — 29 Sep 2026**.
- Main next step is to use Power BI to test whether the current data model answers useful management questions, then work backwards to refine the forms only where the dashboard exposes a genuine data need.
- Do **not** treat provisional scores, weights, synthetic results or Indonesia-specific definitions as DRC facts.

## Sep 24, 2026

### Indonesia assessment sample
- Received access to all eight completed Indonesia school-assessment workbooks from the supervisor.
- Selected the **Gimpu / Pipikoro** workbook as the translation sample and translated the workbook into English while preserving school names, figures, scores, formulas, and the original assessment structure.
- Reviewed the qualitative second tab in detail to understand the evidence sitting behind the final school scores.
- Confirmed that the Indonesia tool uses **11 broad assessment categories**, with a mixture of counts, yes/no items, percentages, condition ratings, and narrative evidence.
- Identified that several parts of the Indonesia scoring approach should not be transferred mechanically into DRC; country-specific definitions are still required.

### DRC baseline, monitoring, and assessment design
- Developed a three-tier working framework separating **baseline**, **existing annual / termly reporting**, and a **proposed short monthly return**.
- Kept existing DRC reporting requirements separate from new M&E recommendations.
- Built **DRC School Assessment Kobo Starter v0.1** as a tangible working draft based on the eleven broad Indonesia assessment categories, while clearly marking DRC scoring definitions and weights as unresolved.
- Added the DRC school master to the Kobo starter so the 615 school records do not need to be typed manually.
- Added province-filtered school, CONA, and SECOPE choices and searchable school selection.
- Preserved unresolved source issues rather than silently correcting them, including duplicate CONA code KSS025 and missing / N.E. SECOPE values.
- Confirmed that Kobo preview is the safest way to demonstrate the complex XLSForm for now; editing and saving through Formbuilder can hide or simplify advanced XLSForm structures.
- Verified the improved **DRC School Assessment Kobo v0.3** structure against the current school register: all 615 school rows are present, with province counts matching the source and a 19 nursery / 351 primary / 245 secondary split.
- Replaced parallel school, CONA and SECOPE pick-lists with a safer **province → level → school** cascade. CONA, SECOPE, municipality and recorded level now auto-fill from the selected school's row.
- Confirmed the two KSS025 records have different SECOPE numbers, 8023496 and 8033587, supporting the working view that they are two distinct schools with a duplicated/mistyped CONA code; official correction still needs DRC confirmation.
- Added a provisional Indonesia-style weighted total out of 128. Criterion 11 remains scored but unweighted, while DRC-specific scoring standards and weights remain open for confirmation.
- Refined the monitoring framework to keep **event/change-only alerts** distinct from monthly reporting and to keep safeguarding incident details in a separate restricted workflow.
- Consolidated the meeting materials into a four-page final pack: translated Indonesia sample, simple three-tier DRC collection view, Kobo v0.3 live-demo flow, and five decisions plus a two-week work plan.

### Supervisor and trip preparation
- Sent the supervisor a written progress update covering the DRC workbook review, trip questions, baseline/monthly framework, and Indonesia assessment access issue.
- Prepared a printable supervisor meeting brief for the 25 September discussion.
- Reduced the proposed presentation approach to three visual items: the translated Indonesia sample, a simple Baseline → Existing Annual/Termly → Proposed Monthly view, and a live Kobo preview.
- Continued refining the DRC trip questions to focus on information that cannot be answered from the documents.

### Project management
- Created private GitHub repository: `chipojaya1/sawso-education-data-system`.
- Built the repository dashboard, timeline, open-questions register, and living work log.
- Added GitHub Issues for active work, waiting items, and next-stage tasks.
- Added an Asana-style task-board view in `planning/task-board.md`.

## Sep 23, 2026

### Field-trip questions
- Turned open DRC data questions into a practical field sheet for the colleague travelling to Kinshasa.
- Reframed technical design questions into questions country staff can answer directly: who fills reports, who checks them, how totals are produced, and which documents already exist.
- Prioritized document retrieval: approved school list, office-to-school mapping, administrative lists, reporting calendar, and completed examples of reports.
- Identified the school-to-office mapping as a critical dependency for automated office-level reporting.

### Concept note and system map
- Stepped back from building to assess what the 19 sheets in the February workbook actually represent.
- Produced a DRC data-system concept note and visual system map.
- Working interpretation at that point: the 19 sheets fall into reference/configuration material, school-level collection, managing-office summaries, and a scoring rubric.
- Found that many office summaries are arithmetic outputs that may belong in Power BI rather than separate Kobo data-entry forms.
- Identified four important source-data gaps for automation: school-to-office mapping, learner age, staff rating, and staff pay status.
- Found that the reporting schedule already defines much of the submission workflow and deadlines.
- Raised the design question of whether to reproduce paper sign-off chains digitally or allow one submission with higher-level review.

### New source of record and Kobo builds
- Two newer DRC `.xls` workbooks became the working source of record.
- Translated both into English while preserving the original workbook format.
- Built working Kobo/XLSForm representations for the workbook sheets and tested conversion.
- Identified a nine-criterion scoring rubric in the February workbook.
- Flagged inconsistencies rather than silently fixing them, including Indonesian worked examples, an apparent enrolment-threshold typo, and inconsistent criterion numbering.

## Sep 22, 2026

### Post-meeting baseline work
- Narrowed meeting ideas into specific baseline questions that could be answered during the DRC trip.
- Confirmed the working scope around the 13 existing DRC reporting forms.
- Produced a baseline data checklist and English form inventory.
- Confirmed that the Start-of-Year report already contains sub-provincial hierarchy fields; the outstanding need is the official controlled lists and their relationships.

### Meeting preparation
- Rebuilt DRC meeting materials around M&E indicator domains rather than simply mirroring paper reports.
- Prepared a print-friendly meeting pack with agenda, draft Kobo-question space, and notes.
- Confirmed that DRC should be designed for its own context rather than copied from Indonesia.
- Identified student assessment / literacy and safeguarding / incident reporting as areas not clearly present in the current DRC source and therefore requiring deliberate design if included.

## Sep 21, 2026

### Green light to build
- Supervisor confirmed that work could move from analysis and recommendations into actual Kobo form development.
- Began preparation for sections and data-types discussions for Indonesia and DRC.

### Indonesia review
- Identified three existing draft/live Kobo-related forms referenced in the work plan: Annual School Information Survey, Reading Garden Observation, and Interactive Reading Observation.
- Surfaced additional Indonesia sources for later review.
- Reviewed a revised Indonesia school master against the original-language source.
- Confirmed a 104-school register across 9 Divisions / Regions and identified 11 satellite / remote-class relationships in the improved master.
- Flagged machine-translation issues in proper names and recommended using the original Bahasa Indonesia source for names.

### DRC workbook review and translation
- Reviewed a DRC Kobo form-design meeting workbook against the source and earlier structure-map findings.
- Confirmed recurring data-quality issues, including the 615-vs-617 discrepancy and duplicate KSS025.
- Translated the combined DRC French workbook to English while preserving workbook structure and graphics.
- Preserved ambiguous codes and source inconsistencies instead of silently correcting them.

### DRC Start-of-Year Kobo form
- Confirmed detailed field-level content for the main per-school DRC forms.
- Built a full XLSForm for the Start-of-Year / Rentrée Scolaire report.
- Digitized all 11 sections, using repeat groups for tabular data such as staff, enrolment, committees, and inventories.
- Preserved official DRC terminology with English explanatory hints.

## Sep 17, 2026
- Deepened the DRC Annual Forms structure map and added a **Synthesis - Data Source** analysis.
- Traced the likely school-data sources for synthesis tables and began separating data-entry requirements from potential Power BI outputs.
- Reframed issues as **Observation → Question → Possible Option**.
- Consolidated work tracking into a living log.

## Sep 16, 2026
- Verified a cleaned DRC school master against the raw French source.
- Confirmed 615 source records, despite another reference to 617.
- Identified duplicate CONA ID KSS025, missing SECOPE values, and missing location information.
- Mapped the DRC annual-forms workbook into a structure map and added issues / recommendations.
- Added comments to the project work plan concerning timeline assumptions and phase scope.

## Sep 15, 2026
- Reviewed the Education Data System Work Plan.
- Identified the need for a short pre-implementation / **Phase 0** before full Kobo development.
- Confirmed that each country's system should remain separate.

## Week of Sep 8, 2026
- Completed onboarding review of the TOR, Work Plan, Gantt chart, and Research Base.
- Began KoboToolbox tutorials.
- Built a practice XLSForm with country-based skip logic.
- Started a Kobo form architecture, Form Register, and Data Dictionary with explicit **grounded vs. unverified** labeling.
