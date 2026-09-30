# Current Supervisor / DRC Discussion Pack

**Updated:** 30 September 2026

This page supersedes the earlier 25 September three-visual note as the current discussion reference.

## 1. DRC School Assessment Kobo v3.3

Live prototype: [Open Kobo form](https://kf.kobotoolbox.org/#/forms/a6Tuip5AEJsew2EnVgpBKq/landing)

Demonstrate the flow:
1. Province
2. Level
3. School
4. auto-filled school identifiers
5. two or three assessment sections
6. evidence + provisional score
7. priority follow-up

Do not present the current weights or scoring descriptions as final DRC standards.

## 2. Four-instrument architecture

- **Master School Register** — who / where the school is.
- **Baseline School Profile** — stable or slow-changing conditions and resources.
- **School Assessment** — periodic performance / quality assessment.
- **Periodic Monitoring** — short change-focused return; frequency still to be agreed.

Existing annual / termly DRC reporting remains a separate official reporting layer.

## 3. Decision Register / Trip Discussion Guide

Use the guide to resolve the items the current files cannot answer, especially:
- active school list and count;
- school-to-office mapping and hierarchy;
- school levels and terminology;
- assessment definitions, weights, cadence and first-round scope;
- periodic-monitoring submitter and frequency;
- access to sensitive staff / salary information;
- dashboard priorities.

## 4. Power BI synthetic prototype

Use the synthetic sandbox to test the proposed data model and dashboard requirements before expanding Kobo.

The target analytical structure is:
**School Master → Assessment Fact + Monitoring Fact**

The Power BI work should reveal which fields to KEEP, QUESTION, REMOVE / DON'T COLLECT, or add as MISSING.
