(function () {
  const tabs = document.querySelectorAll(".level-nav__tab");
  const views = document.querySelectorAll(".view");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-view-target");

      tabs.forEach((t) => t.setAttribute("aria-selected", String(t === tab)));
      views.forEach((view) => {
        const active = view.id === "view-" + target;
        view.toggleAttribute("data-active", active);
        if (active) view.setAttribute("data-active", "true");
        else view.removeAttribute("data-active");
      });
    });
  });

  const followupBtn = document.getElementById("office-filter-followup");
  const allBtn = document.getElementById("office-filter-all");
  const rows = document.querySelectorAll("#office-table-body tr");

  function setOfficeFilter(showFollowupOnly) {
    followupBtn.setAttribute("aria-pressed", String(showFollowupOnly));
    allBtn.setAttribute("aria-pressed", String(!showFollowupOnly));
    followupBtn.classList.toggle("btn--primary", showFollowupOnly);
    allBtn.classList.toggle("btn--primary", !showFollowupOnly);

    rows.forEach((row) => {
      const needsFollowup = row.getAttribute("data-followup") === "true";
      row.hidden = showFollowupOnly && !needsFollowup;
    });
  }

  followupBtn.addEventListener("click", () => setOfficeFilter(true));
  allBtn.addEventListener("click", () => setOfficeFilter(false));
})();
