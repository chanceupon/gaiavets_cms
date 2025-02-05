module.exports = {
  afterCreate(event) {
    const { params } = event;
    const email = params?.data?.email

    // SDK Brevo: https://developers.brevo.com/
    const SibApiV3Sdk = require('sib-api-v3-sdk');
    const defaultClient = SibApiV3Sdk.ApiClient.instance;
    const apiKey = defaultClient.authentications['api-key'];
    apiKey.apiKey = process.env.BREVO_API_KEY;
    const apiInstance = new SibApiV3Sdk.ContactsApi();

    let createContact = new SibApiV3Sdk.CreateContact();
    createContact = {
      email,
      listIds: [+(process.env.BREVO_LIST_EMAIL_ID)],
      emailBlacklisted: false,
      smsBlacklisted: false,
      updateEnabled: false
    };

    apiInstance.createContact(createContact).then(function(data) {
      console.log('Add email contact success: ' + JSON.stringify(data));
    }, function(error) {
      console.error(error);
    });
  },
};