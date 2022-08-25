const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Spidey has over 60+ commands",
        state: "Upvote My Bot",
        largeImageKey: "Large",
        largeImageText: ";)",
        startTimestamp: new Date(),
        buttons : [{label : "Bot Invite Link" , url : "https://discord.com/api/oauth2/authorize?client_id=831272139708563469&permissions=8&scope=bot"}, {label : "Upvote" , url : "https://top.gg/bot/831272139708563469/vote"}]
    })

    console.log("successfully activated the RPC")
})

rpc.login({
    clientId: '831272139708563469'
})