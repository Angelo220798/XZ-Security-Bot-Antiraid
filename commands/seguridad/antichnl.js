module.exports = [{
  name: "anti-canales on",
  code: `$title[1; <:enabled:984590033933717534> Anti-Canales Activado <:enabled:984590033933717534>]
$description[1; <a:averified:984598466690961528> | El sistema Anti-Canales a sido activado correctamente.]
$color[1;RANDOM]
$footer[1;Para desactivarlo : xz!anti-canales off]
$setServerVar[anticanales;true;$guildID]
$onlyForIDs[$ownerID;<a:ax:984590512960978964> | Solo el creador del server puedo usar este comando]
`
},{
    name: "anti-canales off",
  code: `$title[1; <:disabled:984590100925149274> Anti-Canales Desactivado <:disabled:984590100925149274> ]
$description[1; <a:averified:984598466690961528> | El sistema Anti-Canales a sido desactivado correctamente.]
$color[1;RANDOM]
$footer[1;Para activarlo : xz!anti-canales on]
$setServerVar[anticanales;false;$guildID]
$onlyForIDs[$ownerID;Solo el creador del server puedo usar este comando]
`
}]
