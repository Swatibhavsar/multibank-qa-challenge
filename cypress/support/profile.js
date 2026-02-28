const PROFILE_APP = 'app';
const PROFILE_MARKETING = 'marketing';

export const getProfile = () => {
  const raw = Cypress.env('TARGET_PROFILE');
  const profile = String(raw || PROFILE_APP).toLowerCase();
  return profile === PROFILE_MARKETING ? PROFILE_MARKETING : PROFILE_APP;
};

export const requireProfile = (mochaContext, expectedProfile) => {
  const activeProfile = getProfile();
  if (activeProfile !== expectedProfile) {
    mochaContext.skip();
  }
};

export { PROFILE_APP, PROFILE_MARKETING };
