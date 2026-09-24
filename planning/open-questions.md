# Open Questions and Dependencies

This file tracks unresolved items that materially affect system design. It is not a general ideas list. Questions should be removed or moved to a decision log once resolved.

## DRC — school master and hierarchy

- [ ] What is the correct active school total: **615, 617, or another number**?
- [ ] Can the country team provide the approved active-school list?
- [ ] Can the country team provide the school-to-office mapping?
- [ ] Are there **13 or 14** managing / reporting offices?
- [ ] What do the office prefixes **CSP, SUP, and CR** mean, and are they the same organizational level?
- [ ] What are the official controlled lists for Educational Province, Educational Sub-Province, Provincial Inspection, Inspection Pool, DINACOPE Provincial Directorate, and DINACOPE Antenna?
- [ ] How do those government / education structures relate to Salvation Army divisions, bureaux, coordinations, and conseilleries?
- [ ] Does each school report to exactly one Salvation Army office?
- [ ] How should shared campuses with separate nursery / primary / secondary codes be represented?
- [ ] Who is authorized to approve changes to the Master School Register?
- [ ] What is the correct replacement / correction for duplicate CONA ID **KSS025**?
- [ ] How should schools with missing SECOPE IDs or missing addresses be handled until corrected?

## DRC — school level and terminology

- [ ] Should the system use three education levels or four, including **Basic Education**?
- [ ] What do **Asp. J.S., J.S., and N.C.** mean in Christian Education reporting?
- [ ] What do **N.U. and N.P.** mean in staff salary-status reporting?
- [ ] What does **E.13** mean in the examination-results material?
- [ ] Who assigns the existing staff performance rating categories and against what criteria?
- [ ] How should pedagogical activities such as visits and document checks be counted: per event, teacher, class, or another unit?

## DRC — workflow and reporting

- [ ] Who completes, checks, approves, and submits each current report?
- [ ] Which bureau-level summaries are still manually compiled, and which could become Power BI outputs?
- [ ] Should Kobo reproduce the existing paper sign-off chain or allow one school submission with higher-level review?
- [ ] What are the five most useful pieces of information DRC headquarters wants to see on a dashboard?
- [ ] Which indicators are genuinely useful monthly, rather than annually or only when something changes?
- [ ] What information would create unnecessary reporting burden if requested every month?
- [ ] Which sensitive staff, finance, salary, or safeguarding data require restricted access?

## DRC — assessment rubric

- [ ] Is the nine-criterion scoring rubric in the February workbook intended as the starting framework for the DRC school assessment, or is it reference / draft material?
- [ ] Who created or approved that rubric?
- [ ] What is the final scoring scale for each criterion?
- [ ] What are the approved criterion weights?
- [ ] How should the inconsistent criterion numbering be corrected?
- [ ] Confirm the enrolment threshold that currently appears as **over 850 per cent** in the source.
- [ ] Replace or remove Indonesian worked examples if the rubric is retained for DRC.

## Indonesia — assessment review

- [ ] Obtain access to at least one completed Indonesia school assessment workbook.
- [ ] Verify the supervisor's reference to **11 assessment categories** against the actual workbook.
- [ ] Translate one sample workbook into English while preserving official names and codes.
- [ ] Review the qualitative content on the second tab.
- [ ] Compare the actual Indonesia assessment categories with the nine-criterion rubric found in the DRC February workbook.
- [ ] Identify what was retained, omitted, or changed in the DRC draft and whether any Indonesia-specific content remains.

## Cross-cutting system decisions

- [ ] Finalize the baseline vs. monthly / termly / annual data framework.
- [ ] Confirm which fields belong in the central Master School Register rather than repeated forms.
- [ ] Confirm the minimum data needed for Power BI decision-making before building dashboards.
- [ ] Confirm language approach for field forms and technical documentation.
- [ ] Confirm data-governance rules for access, corrections, approvals, and sensitive fields.
