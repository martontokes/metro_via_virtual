export function enterSite(site) {

    document.getElementById("wcsInnerContainer").style.opacity = 0;
    document.getElementById("bg").style.opacity = 0.3;

    setTimeout(() => {
        site.setLanguage("english");
        site.toggleWelcomeScreen(false);
        site.setActivePage("Statement");
      }, 1000)

  }

export function enterSiteZh(site) {

    document.getElementById("wcsInnerContainer").style.opacity = 0;
    document.getElementById("bg").style.opacity = 0.3;

    setTimeout(() => {
        site.setLanguage("chinese");
        site.toggleWelcomeScreen(false);
        site.setActivePage("StatementZh");
      }, 1000)

  }