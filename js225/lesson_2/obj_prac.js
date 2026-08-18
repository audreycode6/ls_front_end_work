'use strict';

let invoices = {
  unpaid: [],
  add: function (name, amount) {
    let client = { name, amount };
    this.unpaid.push(client);
  },
  totalDue: function () {
    return this.unpaid.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  },
  paid: [],
  payInvoice: function (clientName) {
    let remainingInvoices = [];

    this.unpaid.forEach((invoice) => {
      if (invoice.name === clientName) {
        this.paid.push(invoice);
      } else remainingInvoices.push(invoice);
    });

    this.unpaid = remainingInvoices;
  },
  totalPaid: function () {
    return this.paid.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
  },
};

invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.5);
invoices.add('Slough Digital', 300);

invoices.payInvoice('Due North Development');
invoices.payInvoice('Slough Digital');
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
