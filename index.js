const aoijs = require("aoi.js")


const bot = new aoijs.Bot({
token: process.env['tokennnnn'],
prefix: "xz!",
intents: ["GUILDS", "GUILD_MESSAGES"]
})
bot.status({
  text: "$allMembersCount usuarios !!",
  type: "WATHCHINGS",
  status: "dnd",
  time: 12
})

const loader = new aoijs.LoadCommands(bot);
loader.load(bot.cmd,'./commands/') 

bot.onMessage({
  guildOnly: true,
  respondToBots: false
});

bot.onMessageDelete();


bot.variables({
anticanales: "false",
  antirole: "false",
  antisay: "false",
    antilinks: "false",
  antiwords: "false",
snipe_msg: "",
snipe_author: "",
snipe_channel: "",
snipe_t: "",
ErrorIcon: "🛑",
command: "enabled",
color: "00A36C",
})
  
bot.command({
name: "ping",
code: `$title[1; <:ravi_ping_dns:980464780768849930> Pong !! <:ravi_ping_dns:980464780768849930> ]
$color[1;RANDOM]
$description[1; Estoy activo hace : $uptime

Mi Ping es de : $ping MS

La cpu que estoy utilizando es : $cpu

Y la ram que estoy utilizando es : $ram]
$footer[1; Pedido por : $username ] `
})


bot.onChannelCreate()
bot.channelCreateCommand({
code:`$deleteChannel[$channelID]
$onlyIf[$getServerVar[anticanales]==true]
`
})

bot.onRoleCreate()
bot.roleCreateCommand({
code:`
$deleteRoles[$guildID;$roleid[$newRole[id]]]
$onlyIf[$getServerVar[antirole]==true]`
})

//AntiCrash

process.on('unhandledRejection', (reason, p) => {
  console.log(' [antiCrash] :: Unhandled Rejection/Catch');
  console.log(reason, p);
});
process.on("uncaughtException", (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch');
  console.log(err, origin);
}) 
process.on('uncaughtExceptionMonitor', (err, origin) => {
  console.log(' [antiCrash] :: Uncaught Exception/Catch (MONITOR)');
  console.log(err, origin);
});
process.on('multipleResolves', (type, promise, reason) => {
  console.log(' [antiCrash] :: Multiple Resolves');
  console.log(type, promise, reason);e
});
process.setMaxListeners(100)
bot.client.setMaxListeners(100) 




