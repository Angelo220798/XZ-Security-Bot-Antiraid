module.exports = {
name:"r",
aliases: "update",
code:`
$title[1;Se recargaron los comandos]
$description[1;**Nueva lista de comandos:** $get[new] command(s)\n
**Recargados:** $commandsCount command(s)]
$footer[1;$username[$authorID];$authorAvatar]
$addTimestamp[1]
$color[1;$getVar[color]]


$let[after;$commandsCount]
$updateCommands
$let[before;$commandsCount]
$onlyForIDs[980162659188101131;736776191700369533;]`
}