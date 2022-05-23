// https://www.jvandemo.com/how-to-use-environment-variables-to-configure-your-angular-application-without-a-rebuild/
(function (window) {
  window.__env = window.__env || {};

  // environment-dependent settings
  window.__env.apiUrl = "https://6009.cophilab-cloud.ilc.cnr.it/api/";
  window.__env.version = '1.1.5';
})(this);
