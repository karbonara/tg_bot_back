const TelegramBot = require("node-telegram-bot-api");

// replace the value below with the Telegram token you receive from @BotFather
const token = "7325286145:AAGXlAZwGEMLqP12UXL1ff6sKydqPzo48tQ";

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.
bot.on("message", msg => {
  const chatId = msg.chat.id;
  const text = msg.text;
  if (text === "/start") {
    bot.sendMessage(chatId, "Хаааай бро", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Перейти в приложение",
              web_app: {
                url: "https://magazine-dun.vercel.app/",
                hide: true,
              },
            },
          ],
        ],
        // keyboard: [
        //   [{ text: "Кнопка 1" }, { text: "Кнопка 2" }, { text: "Кнопка 3" }],
        // ],
      },
    });
  }
});
