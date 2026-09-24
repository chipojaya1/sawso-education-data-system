# SAWSO Internship Work Log

A chronological record of work completed, key outputs, decisions, and open questions for the Educational Technology for International Development internship. Historical entries below preserve what was known at the time; later findings may refine earlier interpretations rather than silently overwrite them.

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
