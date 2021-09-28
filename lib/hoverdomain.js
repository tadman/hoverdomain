// == Imports ===============================================================

const request = require('request-promise');
const { sprintf } = require('sprintf-js');

// == Constants =============================================================

const hoverURL = 'https://www.hover.com/api/lookup?q=%s&ipcountry=%s';

const defaults = {
  country: 'CA'
};

// == Exported Functions ====================================================

// == Exported Class ========================================================

class HoverDomain {
  constructor(domain, country) {
    this.domain = domain;
    this.country = country || defaults.country;
  }

  async list() {
    let response = await request(sprintf(hoverURL, this.domain, this.country))

console.log(response);
    return JSON.parse(response);
  }
}

// == Exports ===============================================================

module.exports = HoverDomain;
