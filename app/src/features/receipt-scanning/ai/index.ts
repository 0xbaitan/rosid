import config from '@/config';
import { ChatOpenAI } from '@langchain/openai';
import { ChatPromptTemplate } from '@langchain/core/prompts';
import { StringOutputParser } from '@langchain/core/output_parsers';

const chatModel = new ChatOpenAI({
  apiKey: config.openAiKey,
  maxTokens: 3600,
});

const outputParser = new StringOutputParser();

const receiptParsingPrompt = ChatPromptTemplate.fromMessages([
  [
    'system',
    `You are a helpful assistant that's part of an expense tracking and budgeting software application called Rosid.
    One of Rosid's utilities is to be able to scan receipts and extract valuable information out of it that can be stored in a database.
    Your input will be text obtained from scanning the receipts using Tesseract.js.
    Often the images fed into Tesseract will be of inferior quality or have smudged text. In these cases the output of Tesseract will have illegible or unclear text.
    Your job is to restructure the receipt from the scanned text input and intuitively fill out any missing data.
    
    Your output should strictly be a JSON object array. The output JSON is stringified. The JSON object has the following properties: vendor, subtotal, savings, total, currency and items.
    
    Vendor is the name of entity from where you got the receipt after making a payment. If in doubt, put null.
    Subtotal is the total amount spent which is the sum of the price of every item multiplied by the quantity of that particular item. 
    Total is the savings deducted from the subtotal. If there are no savings, then total should be the subtotal amount.
    Savings is the total amount saved from discounts, vouchers and other loyalty privileges and is the sum of all savings.
    Currency is the overall currency code used throughout the receipt. Currency is the currency code of the price. For example, a pound sterling will be coded as GBP and an Indian Rupee as INR. If in doubt about the currency, try guessing it from the currency symbols used in the receipt before putting null.
    Items is the array of items purchased as mentioned in the receipt. It should be an object having the following properties: label, price, quantity, category, expirable, subtotal and savings.

    Here label is the name of the item of the receipt and is of type string strictly. Expand all abbreviations to their full names like Gov to Government or H/Roast to Honey Roasted. If reasonable, change the case of the label to sentence case.
    Price is the price of a single item. If in doubt about the price put 0 instead. 
    Category is the type a particular item it is. For example, a bottle of Ketchup would be categorised as a Condiment while a carton of milk will be categorised as Dairy. Please find the closest possible category for the particular item.
    Quantity is the number of times the item is present. If in doubt, put 1 instead. Quantity should always be a whole number by compulsion. 
    Expirable is a boolean value which indicates the item has an expiry or use before date. 
    Consumable or eatable items like alcohol, beverages, dairy, snacks, frozen food, condiments, fresh food, fruits, bakery goods, vegetables, etc. should have expirable set as true. 
    Use your intuition to set expirable as true or false after inferring what category this item falls under.
    Subtotal is the price multiplied by the quantity without any discounts applied.
    Savings is the numeric amount that has been saved on that particular item. If in doubt, put 0 instead.

    Most importantly, make sure to not omit any item in the receipt.
    Also if you think the input itself is in no way a receipt, please output null instead of a JSON object.
   `,
  ],
  ['user', '{input}'],
]);

const receiptParsingChain = receiptParsingPrompt
  .pipe(chatModel)
  .pipe(outputParser);
export default receiptParsingChain;
