# SAWSO Education Data System

**Helping school information reach the people who can use it.**

Imagine a school needs desks, has a broken roof, or has not submitted a report. The school knows, but the people responsible for helping may be looking at different spreadsheets or waiting for paper forms.

This project explores a simpler idea: **record school information once, identify the right school, and show each level of management what it needs to know.**

The initial focus is **The Salvation Army's schools in the Democratic Republic of the Congo (DRC)**. The approach could be adapted for other territories later, with local agreement.

## <escape>👀</escape> See the idea in action

### [▶ Open the four-level dashboard preview](https://chipojaya1.github.io/sawso-education-data-system/)

This opens a clickable demonstration of **one school system, four views**:

| Who is looking? | What could they see? |
|---|---|
| **1. School** | My school's details, forms to complete, and information to correct |
| **2. Sub-provincial office** | Which schools have reported and which need follow-up |
| **3. Provincial office** | Reporting patterns and schools that may need support |
| **4. National office** | Overall reporting coverage, gaps, and priorities |

**For presentations:** The preview link above is the **same URL used by the QR code in the internship presentation**. The published dashboard address has **not been changed**.

**Important:** This is an **illustrative, clickable mockup**. The example numbers are not live school data. It is not connected to KoboToolbox, the Master School Register, or Power BI.

## What has been designed?

Two different KoboToolbox forms, built from existing SAWSO assessment documents:

| Form | In everyday language | What it covers |
|---|---|---|
| **School Assessment** | **How is the school doing, and what help does it need?** | Eight criteria: buildings, equipment, enrolment, access, governance, community, fees and outside support |
| **School Conditions Questionnaire** | **Are the important rules, protections and institutional arrangements in place?** | Fourteen conditions covering governance/compliance, monitoring/protection, and mission/faith integration |

The final DRC design versions are **20261117a**. Both have the same **615-school selection list** and a shared `school_key`, so a future reporting system can match records about the same school without guessing from names. **615 is the current working register count, not an approved final active-school count.**

The Assessment calculates a **provisional weighted index**; the Conditions answers are **not** automatic compliance decisions. These need formal review before operational use.

## Where should I start?

- **[Try the four-level dashboard preview](https://chipojaya1.github.io/sawso-education-data-system/)** — the easiest way to understand the idea visually.
- **[Read the two-form handover for Doug](forms/DRC/FINAL_FORMS_HANDOVER_2026-11-17.md)** — what each form does, what changed and what needs approval.
- **[See the technical handover and Python/Colab demos](https://github.com/chipojaya1/SAEDtechApp)** — code and documentation for a future developer.
- **[Read the work log](planning/work-log.md)** — dated progress, design decisions and what remained unfinished.
- **[View the internship close-out story](reporting/internship-closeout/index.html)** — a short, personal presentation about the work.
- **[See the DRC forms development history](forms/DRC/README.md)** — earlier prototypes and why the design evolved.

## What happens next?

For this to become a real system, **SAWSO, DRC territorial leaders, schools and local developers** still need to agree on:

1. Which of the 615 listed schools are active and **which managing office each school reports to** (currently every `managing_office` is `not_mapped`).
2. How the assessments are scored, including schools that charge **no fees**, and who is authorized to review Conditions evidence.
3. Who can submit, review, correct and see sensitive information.
4. How to pilot the forms and connect approved Kobo records to secure reporting dashboards.

**This repository is a project record and handover starting point, not a finished production app.** It contains design notes, prototypes and decisions. The full school choice list, completed Kobo responses and personal or safeguarding information are **not published here**.

---

*Internship project handover updated November 17, 2026. Earlier DRC and Indonesia reference work remains in the project history; country-specific requirements should not be copied into another territory without review.*
