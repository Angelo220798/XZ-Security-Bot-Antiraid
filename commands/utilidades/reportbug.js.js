module.exports = ({
name: "reportbug",
code: `$useChannel[985017550956036107]
$title[1; <a:cuidado:980462131986194432> Bug reportado! <a:cuidado:980462131986194432>]
$description[1; <a:averified:984598466690961528>  | Bug reportado por : $username[$authorID]#$discriminator[$authorID] 


 | Reporte : $message

 | Servidor : $createServerInvite]
$color[1;RANDOM]

$channelSendMessage[$channelID; <a:averified:984598466690961528>  | Bug reportado con éxito.]
$onlyIf[$checkContains[$message;@here;@everyone]==false; <a:ax:984590512960978964>  | No menciones everyone ni here.]
$suppressErrors[ <a:ax:984590512960978964>  | Ocurrio un error inesperado.]
$onlyIf[$message!=; <a:ax:984590512960978964>  | Debes escribe algo.]


`
}) 
