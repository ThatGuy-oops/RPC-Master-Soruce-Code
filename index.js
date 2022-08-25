const RPC = require('discord-rpc')
const { BOT_INVITE, BOT_ID } = require("./confg")
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Advanced ticket bot!",
        state: "Upvote My Bot",
        largeImageKey: "Large",
        largeImageText: "TicketBot",
        startTimestamp: new Date(),
        buttons : [{label : "Bot Invite Link" , url : `${BOT_INVITE}`}, {label : "Upvote" , url : `https://top.gg/bot/${BOT_ID}/vote`}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '1002330889096794314'
})