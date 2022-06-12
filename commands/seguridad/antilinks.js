module.exports = [{
  name: "antilinks off",
  code: `$title[1; <:disabled:984590100925149274> Sistema Anti-Links desactivado <:disabled:984590100925149274> ]
$description[1; <a:averified:984598466690961528> | El sistema Anti-links se a desactivado correctamente.]
$footer[1;Para activarlo : xz!antilinks on]
$setServerVar[antilinks;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]`
},{
  name: "antilinks on",
  code: `$title[1; Anti-Links activado!]
$description[1; <a:averified:984598466690961528> | El sistema Anti-links se a activado correctamente.]
$footer[1;Para desactivarlo : xz!antilinks off]
$setServerVar[antilinks;true;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]`
},{
  name: "$alwaysExecute", 
code: `$title[1; <a:cuidado:980462131986194432> No puedes enviar links <a:cuidado:980462131986194432> ]
$description[1; <a:ax:984590512960978964> | No puedes enviar links a este servidor porque esta el sistema Anti-Links activado.]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];https://;http://]==true;]
$onlyIf[$getServerVar[antilinks]==true]`
}]
  
