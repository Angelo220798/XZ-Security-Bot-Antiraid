module.exports = [{
name: "snipe",
category: "Information",
description: "Sends the MOST recent deleted message",
usage: "{prefix}USAGE <@User>", 
aliases: ["snip","snipes"],
cooldown: "3s",
 code: `
 $color[1;$getVar[color]]
$title[1; <a:aGreenVerify:983854873869168660> Detecte un mensaje borrado <a:aGreenVerify:983854873869168660>]
 $description[1;
**Mensaje :** 
\`$getChannelVar[snipe_msg;$mentionedChannels[1;yes]]\`

**Canal :** 
<#$getChannelVar[snipe_channel;$mentionedChannels[1;yes]]>
]
$footer[1;Borrado por : $username[$authorID];$authorAvatar]
$addTimestamp[1]
$color[1;$getVar[color]]

 

$onlyIf[$getChannelVar[command;$commandName]!=disabled;{newEmbed:{title: $getVar[ErrorIcon] Error $getVar[ErrorIcon]}{color:RED}{description: This command is \`Disabled\`!}{field:Info#COLON#:By#COLON# $usertag[$botOwnerId]
Coming back soon...}{footer:$username[$authorID]:$authorAvatar}{timestamp}}]
$cooldown[$commandInfo[snipe;cooldown];{newEmbed:{title: $getVar[ErrorIcon] Error $getVar[ErrorIcon]}{description: Please wait for \`%time%\`, and try again}{color:RED}{footer:$username[$authorID]:$authorAvatar}{timestamp}}]
`
},{
 type: 'messageDelete',
 channel: '$channelID',
 code:`
 $setChannelVar[snipe_msg;$message]
 $setChannelVar[snipe_author;$authorID]
 $setChannelVar[snipe_channel;$channelID]`
}]