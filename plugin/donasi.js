let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *Indosat Ooredoo:* [0858-0310-7598]
┣➥ *3:* [0898-9031-500]
┣➥ *Dana:* [0898-9031-500]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/628989031500*
┗━━━━━━━━━━━━━━━━

`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
