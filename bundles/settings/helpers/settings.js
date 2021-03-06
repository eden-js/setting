/**
 * Created by Awesome on 3/6/2016.
 */

// use strict


// require dependencies
const Helper = require('helper');

// require models
const Setting = model('setting');

/**
 * build settings helper
 */
class SettingsHelper extends Helper {
  /**
   * construct settings helper
   */
  constructor() {
    // run super
    super();

    // bind methods
    this.get = this.get.bind(this);
  }

  /**
   * gets user setting by name
   *
   * @param  {user}    User
   * @param  {String}  name
   *
   * @return {Promise}
   */
  async get(user, name) {
    // get setting by name
    const setting = await Setting.findOne({
      name,
      'user.id' : user ? user.get('_id').toString() : null,
    });

    // return null or setting
    return setting ? setting.get('value') : null;
  }
}

/**
 * export new SettingsHelper class
 *
 * @return {SettingsHelper}
 */
module.exports = new SettingsHelper();
