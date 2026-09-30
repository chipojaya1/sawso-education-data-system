# Project Timeline

This timeline is a working planning view. Dates may change as country-team decisions, file access, and pilot scheduling become clearer.

```mermaid
gantt
    title SAWSO Education Data System
    dateFormat  YYYY-MM-DD
    axisFormat  %b %d

    section Foundation
    Onboarding / source review              :done,    a1, 2026-09-08, 2026-09-15
    DRC source translation and mapping      :done,    a2, 2026-09-16, 2026-09-23
    Indonesia sample translation/review     :done,    a3, 2026-09-24, 2026-09-29

    section DRC Preparation
    Field-trip discussion guide             :done,    b1, 2026-09-23, 2026-09-29
    DRC assessment prototype to v3.3        :done,    b2, 2026-09-24, 2026-09-29
    Baseline / monitoring design workbench  :done,    b3, 2026-09-29, 2026-09-29
    Supervisor DRC trip                     :         b4, 2026-09-26, 2026-10-10
    Country-team online discussions         :         b5, 2026-10-05, 2026-10-07

    section Power BI Learning / Prototype
    Orientation + import                    :active,  p1, 2026-10-01, 1d
    Build data model                        :         p2, 2026-10-05, 1d
    Measures + basic DAX                    :         p3, 2026-10-06, 1d
    Overview + monitoring dashboards        :         p4, 2026-10-07, 1d
    School detail + design review           :         p5, 2026-10-08, 1d

    section DRC Build
    Incorporate country confirmations       :         c1, 2026-10-08, 2026-10-14
    Master register / controlled lists      :         c2, 2026-10-08, 2026-10-16
    Refine Kobo forms                       :         c3, 2026-10-12, 2026-10-23
    Prepare pilot package                   :         c4, 2026-10-19, 2026-10-30

    section Reporting
    Confirm Power BI requirements           :active,  e1, 2026-10-01, 2026-10-08
    Build reporting model / dashboards      :         e2, 2026-10-05, 2026-10-08
    Data dictionary / field mapping         :         e3, 2026-10-08, 2026-10-16
    Pilot and revise                        :         e4, 2026-10-19, 2026-11-06
```

## Current phase

The project is now in **early build and analytical prototyping**. Kobo has reached a stable working DRC assessment prototype (v3.3), while unresolved country-specific items remain explicit questions for Doug / DRC.

The immediate reporting focus is a staged Power BI learning sprint from **1–8 October** using synthetic data. The purpose is not just to learn dashboard software, but to test whether the current collection model supports useful management decisions before more fields are added to Kobo.

If DRC consultations take place during 5–7 October, those discussions take priority and unfinished Power BI tasks roll forward without compressing the learning sequence.
