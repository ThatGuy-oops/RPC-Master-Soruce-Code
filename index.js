const RPC = require('discord-rpc')
const { BOT_INIVTE, BOT_ID } = require('./confg')


const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Advanced ticking system!",
        // state: "Upvote My Bot",
        largeImageKey: "large",
        largeImageText: "TicketBot",
        startTimestamp: new Date(),
        buttons : [{label : "Invite" , url : `${BOT_INIVTE}`}, {label : "Vote" , url : `https://top.gg/bot/${BOT_ID}/vote`}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '1002330889096794314'
})