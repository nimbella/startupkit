// jshint esversion: 9

/**
 * @description List all startupKit solution partners.
 * @param {ParamsType} params list of command parameters
 * @param {?string} commandText text message
 * @param {!object} [secrets = {}] list of secrets
 * @return {Promise<SlackBodyType>} Response body
 */
async function _command(params, commandText, secrets = {}) {
  return {
    response_type: 'in_channel', // or `ephemeral` for private response
    text: `Startup kit is an editable workflow that automates the key processes of Lead Generation and Sales, Marketing and Analytics, HR and Finance domains.

    \`/nc startupkit\`
    
    Ready to use workflows for Lead Generation and Sales, Marketing and Analytics, HR and Finance domains.
    
    Here are some examples of automating processes and quickly scaling your startup:
    
    *Lead Generation and Customer Management*: Signup with X Partner Name, use a special coupon MakeAthon and use the tool-free for 6 months.
    X  Partner Name Command Set:
    \`/nc inbound leads\`  - the total number of generated leads in the last X days 
    \`/nc tickets open\` - the total number of open and closed tickets in the last X days
    \`/nc outbound leads\` - the total number of generated leads with X conversions, X generated contacts
    
    *Marketing and Analytics*:  Signup with X Partner Name, use coupon MakeAthon and get a startup plan normally priced at $59 / mo., free for one month.
    X Partner Name Command Set: 
    \`/nc traffic competitor\` - the website traffic growth in the last X days
    \`/nc social stats\` - the dynamic of audience growth on FB, Linkedin, Instagram, Twitter
    \`/nc mentions\` - total number of brand mansions in the last X days
    
    *HR*:  Signup with X Partner Name, use coupon MakeAthon and get a startup plan normally priced at $59 / mo., free for one month.
    X Partner Name Command Set:
    \`/nc new openings\`-  X active openings, X new applications, X today’s interviews, X new activities
    \`/nc time tracker\`- total X minutes went for clients, total X minutes went to projects, X minutes went to task
    \`/nc HR analytics\` - employee turnover X months, satisfaction rate is X
     
    *Finance*:  Signup with X Partner Name, use coupon MakeAthon and get a startup plan normally priced at $59 / mo., free for one month.
    X Partner Name Command Set: 
    \`/nc transaction\` - the total amount of revenue and number of transactions in X months 
    \`/nc x product revenue\` - revenue for the types of products
    \`/nc refunds\` - the total amount of refunds in the last X days
    `
  };
}

/**
 * @typedef {object} SlackBodyType
 * @property {string} text
 * @property {'in_channel'|'ephemeral'} [response_type]
 */

const main = async args => ({
  body: await _command(
    args.params,
    args.commandText,
    args.__secrets || {}
  ).catch(error => ({
    // To get more info, run `/nc activation_log` after your command executes
    response_type: 'ephemeral',
    text: `Error: ${error.message}`
  }))
});
module.exports = main;
