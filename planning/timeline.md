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

    section DRC Preparation
    Field-trip discussion guide             :done,    b1, 2026-09-23, 2026-09-24
    Baseline vs ongoing M&E framework       :active,  b2, 2026-09-24, 2026-10-02
    Baseline Kobo v0.1 review               :active,  b3, 2026-09-24, 2026-10-02
    Supervisor DRC trip                     :         b4, 2026-09-26, 2026-10-10
    Country-team online discussions         :         b5, 2026-10-05, 2026-10-07

    section DRC Build
    Incorporate country confirmations       :         c1, 2026-10-08, 2026-10-14
    Master register / controlled lists      :         c2, 2026-10-08, 2026-10-16
    Refine Kobo forms                       :         c3, 2026-10-12, 2026-10-23
    Prepare pilot package                   :         c4, 2026-10-19, 2026-10-30

    section Indonesia
    Gain assessment-file access             :active,  d1, 2026-09-24, 2026-09-30
    Translate one completed assessment      :         d2, after d1, 3d
    Review qualitative content              :         d3, after d2, 2d
    Compare assessment frameworks           :         d4, after d3, 4d

    section Reporting
    Confirm Power BI requirements           :         e1, 2026-10-15, 2026-10-30
    Build reporting model / dashboards      :         e2, after e1, 15d
    Pilot and revise                        :         e3, after e2, 15d
```

## Current phase

The project is still in **pre-implementation / early build**. The immediate focus is to remove ambiguity from source data and reporting workflows before scaling form development.
