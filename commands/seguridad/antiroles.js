module.exports = [{
  name: "anti-roles on",
  code: `$title[1; <:enlinea:980465105756110858> Anti-Role Activado <:enlinea:980465105756110858>]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Roles a sido activado correctamente.]
$setServerVar[antirole;true;$guildID]
$onlyForIDs[$ownerID; <a:ax:984590512960978964> Solo el creador del server puedo usar este comando.]
$footer[1;Para descactivarlo :xz!anti-roles off]
$color[1;RANDOM]`
},{
    name: "anti-roles off",
  code: `$title[1; <:dnd:980465358861369385> Anti-Role Desactivado <:dnd:980465358861369385> ]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Roles a sido desactivado correctamente.]
$setServerVar[antirole;false;$guildID]
$onlyForIDs[$ownerID; <a:ax:984590512960978964> Solo el creador del server puedo usar este comando]
$footer[1;Para Activarlo : xz!anti-roles on]
$color[1;RANDOM]`
}]