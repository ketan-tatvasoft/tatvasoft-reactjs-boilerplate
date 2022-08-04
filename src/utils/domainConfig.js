// development
export const development = {
  BACK_END_URL: 'http://localhost:4200'
};

// production
export const production = {
  BACK_END_URL: 'http://some-super-cool-live-dome.com'
};

export default process.env.NODE_ENV === 'development' // eslint-disable-line
  ? {
      ...development
    }
  : {
      ...production
    };
