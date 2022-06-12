module.exports = [{
  name: "antiwords off",
  code: `$title[1; <:disabled:984590100925149274> Anti-Words desactivado <:disabled:984590100925149274> ]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Words a sido desactivado correctamente.]
$footer[1; Para activarlo : xz!antiwords on;$authorAvatar]
$setServerVar[antiwords;false;$guildID]
$onlyForIDs[$ownerID; a:ax:984590512960978964> | Solo el creador del server puedo usar este comando.]
$color[1;RANDOM]`
},{
  name: "antiwords on",
  code: `$title[1; <:enabled:984590033933717534> Anti-Words activado <:enabled:984590033933717534> ]
$description[1;<a:averified:984598466690961528> | El sistema Anti-Words a sido activado correctamente.]
$footer[1; Para desactivarlo : xz!antiwords off;$authorAvatar]
$setServerVar[antiwords;true;$guildID]
$onlyForIDs[$ownerID; a:ax:984590512960978964> | Solo el creador del server puedo usar este comando.]
$color[1;RANDOM]`
},{
  name: "$alwaysExecute", 
code: `$title[1; <a:cuidado:980462131986194432> Sin palabrotas <a:cuidado:980462131986194432>]
$description[1; <a:ax:984590512960978964> | No puedes decir palabrotas en este servidor ya que esta el sistema Anti-Words activado.]
$footer[1; No puedes decir palabrotas;$authorAvatar]
$deleteCommand
$onlyIf[$checkContains[$toLowercase[$message];mierda;porno;nopor;pinga;pene;pornhub;fuck;mamahuevo;mmg;mamaguevo;mamaguebo;polla;puta;puto;mierda;hdp;hijo de puta;imbecil]==true;]
$onlyIf[$getServerVar[antiwords]==true]
$color[1;RANDOM]`
}]