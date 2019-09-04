const express = require("express");
const XeroClient = require("xero-node").AccountingAPIClient;
const config = require("./config.json");

let app = express();
let xero = new XeroClient(config);

let lastRequestToken = null;

app.set("port", 3001);

app.get("/", function(reg, res) {
  res.send('<a href="/connect">Connect to Xero</a>');
});

app.get("/callback", async function(req, res) {
  let oauth_verifier = req.query.oauth_verifier;
  let accessToken = await xero.oauth1Client.swapRequestTokenforAccessToken(
    lastRequestToken,
    oauth_verifier
  );
  // console.log(accessToken);

  let org = await xero.organisations.get();

  // let invoices = await xero.invoices.get();
  // let invoiceId = invoices.Invoices[0].InvoiceID;

  // res.send(invoiceId);
  let invoice = {};

  // Invoice : Required Parameters
  invoice.Type = "ACCREC";
  invoice.Contact = {
    ContactId: "1f032c88-66de-47c7-8b24-2aa3d9796d33"
  };
  invoice.LineItems = [
    {
      Description: "abc123",
      Quantity: "1",
      UnitAmount: "4"
    }
  ];
  try {
    const xero2 = new XeroClient(config, accessToken);
    const result = await xero2.invoices.create(invoice);
    return result;
  } catch (err) {
    console.log(err);
  }
});

app.get("/connect", async function(req, res) {
  lastRequestToken = await xero.oauth1Client.getRequestToken();
  let authoriseUrl = xero.oauth1Client.buildAuthoriseUrl(lastRequestToken);
  res.redirect(authoriseUrl);
});

app.listen(app.get("port"), function() {
  console.log("app running on http://localhost:3001/");
});
