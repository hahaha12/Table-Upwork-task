const fakeMainData = [
  {
    id: 1,
    debit: 400,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance deducted",
    datetime: "June 17, 2022 06:22",
  },
  {
    id: 2,
    debit: 100,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance withdraw",
    datetime: "June 16, 2022 06:22",
  },
  {
    id: 3,
    debit: 0,
    credit: 100,
    user_id: 211,
    currency: "PKR",
    description: "Balance Recharge",
    datetime: "June 16, 2022 06:22",
  },
  {
    id: 4,
    debit: 0,
    credit: 33,
    user_id: 211,
    currency: "PKR",
    description: "Uploaded Promotion",
    datetime: "June 15, 2022 06:22",
  },
  {
    id: 5,
    debit: 50.75,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance deducted",
    datetime: "June 15, 2022 06:22",
  },
  {
    id: 6,
    debit: 0.25,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance deducted",
    datetime: "June 15, 2022 06:22",
  },
  {
    id: 7,
    debit: 5,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance deducted",
    datetime: "June 03, 2022 06:22",
  },
];

const fakePendingData = [
  {
    id: 1,
    debit: 400,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance deducted",
    datetime: "June 17, 2022 06:22",
  },
  {
    id: 2,
    debit: 100,
    credit: 0,
    user_id: 211,
    currency: "PKR",
    description: "Balance withdraw",
    datetime: "June 16, 2022 06:22",
  },
  {
    id: 3,
    debit: 0,
    credit: 100,
    user_id: 211,
    currency: "PKR",
    description: "Balance Recharge",
    datetime: "June 16, 2022 06:22",
  },
  {
    id: 4,
    debit: 0,
    credit: 33,
    user_id: 211,
    currency: "PKR",
    description: "Uploaded Promotion",
    datetime: "June 15, 2022 06:22",
  },
];

const functions = {
  getMainAccountsByUserId: async function (userId) {
    return fakeMainData;
  },
  getPendingAccountsByUserId: async function (userId) {
    return fakePendingData;
  },
  getMainBalanceByUserId: async function (userId) {
    return {
      balance: 1000,
      currency: "PKR",
    };
  },
  getPendingBalanceByUserId: async function (userId) {
    return {
      balance: 500,
      currency: "PKR",
    };
  },
};

export default functions;
