# SAWSO Internship Work Log

A chronological record of work completed, key outputs, decisions, and open questions for the Educational Technology for International Development internship. Historical entries below preserve what was known at the time; later findings may refine earlier interpretations rather than silently overwrite them.

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
