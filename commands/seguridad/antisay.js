module.exports = [{
  name: "antiping off",
  code: `$title[1; <:disabled:984590100925149274> Anti-Pings desactivado <:disabled:984590100925149274> ]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Pings a sido desactivado correctamente.]
$footer[1; Para activarlo : xz!antiping on]
$setServerVar[antisay;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
$color[1;RANDOM]`
},{
  name: "antiping on",
  code: `$title[1; <:enabled:984590033933717534> Anti-Pings activado <:enabled:984590033933717534> ]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Pings a sido activado correctamente.]
$footer[1; Para desactivarlo : xz!antiping off]
$setServerVar[antisay;true;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
$color[1;RANDOM]`
},{
  name: "$alwaysExecute", 
code: `$title[1; <a:cuidado:980462131986194432> Sin links <a:cuidado:980462131986194432>]
$description[1; <a:ax:984590512960978964> | No puedes hacer ping en este servidor ya que esta el sistema Anti-Ping activado.]
$footer[1; No puedes memcionar everyone]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];@everyone;@here]==true;]
$onlyIf[$getServerVar[antisay]==true]
$color[1;RANDOM]`
}]

