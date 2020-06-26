// jshint esversion: 9

/**
 * @description List all startupKit solution partners.
 * @param {ParamsType} params list of command parameters
 * @param {?string} commandText text message
 * @param {!object} [secrets = {}] list of secrets
 * @return {Promise<SlackBodyType>} Response body
 */
async function _command(params, commandText, secrets = {}) {
  const result = [];
  const sponsors = [
    {
      category: 'Marketing Attrubution',
      partner: 'Branch',
      intro:
        'Increase mobile revenue with enterprise-grade links built to acquire, engage, and measure across all devices, channels, and platforms.',
      singup: {
        link: 'https://branch.io',
        offer:
          'Signup with coupon startupKit and get startup plan worth $59 / mo free for a month'
      }
    },
    {
      category: 'Marketing Automation',
      partner: 'Clevertap',
      intro:
        'User retention is more than just keeping your mobile app users. It’s about building loyal relationships that drive revenue growth.',
      singup: {
        link: 'https://clevertap.com/',
        offer: 'Signup with coupon STARTUPKIT to get a month for free.'
      }
    }
  ];

  for (let i = 0; i < sponsors.length; i++) {
    const sponsor = sponsors[i];
    const singupText = sponsor.singup.offer.replace(
      'Signup',
      `<${sponsor.singup.link}|Singup>`
    );
    result.push(
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `*${sponsor.category} -* *${sponsor.partner}:* ${sponsor.intro}`
        }
      },
      {
        type: 'section',
        text: {
          type: 'mrkdwn',
          text: `${singupText}`
        }
      }
    );
  }

  return {
    response_type: 'in_channel', // or `ephemeral` for private response
    blocks: result
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
