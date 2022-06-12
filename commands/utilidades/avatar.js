module.exports = [{
 name: "avatar",
 code: `$author[1;Avatar de $username[$findMember[$message]]]
 $description[1;Descargar avatar : [Click aquí]($get[owonya])]
 $image[1;$userAvatar[$findMember[$message]]]
 $color[1;RANDOM]
$footer[1;Pedido por $username;$authorAvatar]
 $addButton[1;Descargar avatar;link;$nonEscape[$get[owonya]]]
 $wait[2s]
 $let[owonya;$replaceText[$userAvatar[$findMember[$message]];webp;png]]`
}]
