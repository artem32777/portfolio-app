require('dotenv').config();
const {Bot, InlineKeyboard} = require('grammy');
const bot = new Bot(process.env.BOT_API_KEY_PROD);

// bot.command('start', async (ctx) => {
//    const keyboard = new InlineKeyboard().webApp('START', 'https://artem32777.github.io/portfolio-app/');
//    await ctx.reply('Click Start to run App !', { reply_markup: keyboard });
// });

bot.command('start', async (ctx) => {
   const keyboard = new InlineKeyboard().webApp('START', 'https://artem32777.github.io/portfolio-app/');
   const gifUrl = '../public/img/botpic.gif'; // Замените на URL вашей GIF-картинки

   await ctx.replyWithAnimation(gifUrl, {
      caption: 'Click Start to run App !',
      reply_markup: keyboard
   });
});


bot.start();