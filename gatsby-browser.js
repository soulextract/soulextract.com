/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

module.exports.onRouteUpdate = ({ location, prevLocation }) => {
  const event = new CustomEvent(
    'route-change',
    { detail: { location, prevLocation } }
  );
  window.dispatchEvent(event);
};
