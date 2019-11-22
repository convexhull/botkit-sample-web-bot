/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

module.exports = function(controller) {


    controller.hears("meow", 'message, direct_message', async(bot, message) => {
        await bot.reply(message, {
            attachments:[
              {
                
                "title": 'Do you want to interact with my buttons?' ,
                "callback_id" : '123',
                "attachment_type" : 'default',
                actions: [
                   {
                      "name":"yes",
                      "text": "Yes",
                      "value": "yes",
                      "type": "button",
                   },
                ]
              }
            ]
          });
    })


    controller.hears("image", 'message, direct_message', async(bot, message) => {
        await bot.say({
            text: 'Look, an image!',
            files: [
                {
                  url: 'https://www.montereyairport.com/sites/main/files/imagecache/hd/main-images/camera_lense_0.jpeg',
                  image: true
                }
            ]
          })
    });

    
    controller.hears("test", 'message, direct_message', async(bot, message) => {
        await bot.say({
            text: 'Here is your dynamic button:',
            quick_replies: async(template, vars) => { return [{"title" : "Really?", "payload" : "yes" }]}
        })
    });

    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });

}
