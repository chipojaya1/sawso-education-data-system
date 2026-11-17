# SAWSO Education Data System

**One school. Clear information. Better decisions.**

Imagine a school needs desks or has a leaking roof. The school knows about the problem, but the people who could help may have information scattered across paper forms and spreadsheets.

This project explores a simpler idea: **collect useful information, identify the right school, and show each level of management what it needs to see.**

We started with Salvation Army schools in the **Democratic Republic of the Congo (DRC)**. The approach could later be adapted for other territories.

## Try the four-level dashboard

### [▶ Click here to open the dashboard preview](https://chipojaya1.github.io/sawso-education-data-system/)

The clickable example shows how **one school record** could look to four different people:

| View | In simple terms |
|---|---|
| **1. School** | What do I need to fill in or correct? |
| **2. Sub-provincial office** | Which of my schools need follow-up? |
| **3. Provincial office** | Where are the bigger gaps and needs? |
| **4. National office** | How is reporting going across the country? |

**Presentation / QR code:** This is the **same dashboard URL already used in the internship presentation**. We have **not changed its address**.

*It's a demo, not a live app. The numbers are examples, and it is not connected to real KoboToolbox or Power BI data.*

## The two Kobo forms

| Form | The question it answers |
|---|---|
| **School Assessment** | **How is this school doing, and what support does it need?** Eight criteria covering buildings, equipment, enrolment, school management, fees and more. |
| **School Conditions Questionnaire** | **Are the key governance, protection and mission-related arrangements in place?** Fourteen institutional conditions; responses are not automatic compliance decisions. |

Both final DRC designs (`20261117a`) use the same **615-school selection list** and `school_key`, making future record matching possible. The **615** is a working register count, not yet a confirmed number of active schools. The Assessment score is **provisional**.

## Start here

- **[See the dashboard](https://chipojaya1.github.io/sawso-education-data-system/)** — the visual idea in action.
- **[Read the handover for Doug](forms/DRC/FINAL_FORMS_HANDOVER_2026-11-17.md)** — the two forms, what changed, and decisions still needed.
- **[Open the Python/Colab app and technical handover](https://github.com/chipojaya1/SAEDtechApp)** — where a future developer can start.
- **[Read the dated internship work log](planning/work-log.md)** — what we did, learned and left for the next team.
- **[See the internship close-out presentation](reporting/internship-closeout/index.html)** — the story behind the project.

## What happens next?

DRC and SAWSO still need to confirm **which schools are active**, which **managing office** each reports to (currently all are `not_mapped`), the **assessment and fee-free-school scoring rules**, privacy and approval responsibilities, and a **small field pilot**.

Local leaders, schools and developers can then decide what should become a real system.

**This repository is the design story and handover, not a deployed national database.** The complete school register, private responses and personal/safeguarding records are not published here.

*Updated November 17, 2026. Earlier prototypes and country-specific reference work are preserved in the project history.*
