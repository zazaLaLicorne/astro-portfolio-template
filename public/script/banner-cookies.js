// public/banner-cookies.js

// Récupère l’ID GA depuis une balise <meta name="ga-id" content="G-XXXXXXX">
function getGAID() {
  const metaTag = document.querySelector('meta[name="ga-id"]');
  return metaTag ? metaTag.getAttribute("content") : null;
}

// Charge Google Analytics uniquement après consentement
function loadGoogleAnalytics(GA_ID) {
  if (!GA_ID) {
    console.error("GA_ID n'est pas défini.");
    return;
  }

  // Empêche le double chargement
  if (document.querySelector('[src*="googletagmanager.com"]')) return;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", GA_ID, { anonymize_ip: true });
}

// Gestion simplifiée des cookies
function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
}

function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/;SameSite=Lax`;
}

// Initialisation
document.addEventListener("DOMContentLoaded", () => {
  const GA_ID = getGAID();
  if (!GA_ID) {
    console.error("GA_ID n'est pas défini dans la balise meta.");
    return;
  }

  const banner = document.getElementById("cookie-banner");
  // const modal = document.getElementById("cookie-modal");
  // const analyticsCheckbox = document.getElementById("analytics");

  // Vérifie le consentement existant
  const consent = getCookie("cookie-consent");
  if (consent) {
    banner.classList.add("hidden");
    // modal?.classList.add("hidden");
    const preferences = JSON.parse(consent);
    if (preferences.analytics) {
      loadGoogleAnalytics(GA_ID);
    }
  }

  // Tout accepter
  document.getElementById("accept-all")?.addEventListener("click", () => {
    setCookie("cookie-consent", JSON.stringify({ analytics: true }));
    banner.style.display = "none";
    loadGoogleAnalytics(GA_ID);
  });

  // Tout refuser
  document.getElementById("decline-all")?.addEventListener("click", () => {
    setCookie("cookie-consent", JSON.stringify({ analytics: false }));
    banner.style.display = "none";
  });

  // Enregistrer préférences (si tu gardes la modale)
  // document.getElementById("save-preferences")?.addEventListener("click", () => {
  //   const preferences = { analytics: analyticsCheckbox?.checked || false };
  //   setCookie("cookie-consent", JSON.stringify(preferences));
  //   if (preferences.analytics) loadGoogleAnalytics(GA_ID);
  //   banner.style.display = "none";
  //   modal?.classList.add("hidden");
  // });

  // Fermer modale
  // document.getElementById("close-modal")?.addEventListener("click", () => {
  //   modal?.classList.add("hidden");
  // });

  // Fermer en cliquant sur l’overlay
  // modal?.addEventListener("click", (e) => {
  //   if (e.target === modal) modal.classList.add("hidden");
  // });

  // Bouton "Gérer mes cookies" dans le footer
  document.getElementById("manage-cookies")?.addEventListener("click", () => {
    const consent = getCookie("cookie-consent");
    if (consent) {
      const preferences = JSON.parse(consent);
      // if (analyticsCheckbox) analyticsCheckbox.checked = preferences.analytics || false;
    }
    banner.style.display = "block";
    // modal.hidden = false;
  });
});



