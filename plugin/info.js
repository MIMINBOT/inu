let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
┏━━°❀❬ *INFO BOT* ❭❀°━━┓
┃
┣➥ *Nama bot:MIMIN X BOT*
┣➥ *Author:Ibnu*
┣➥ *Owner:Ibnu*
┣➥ *Script: Ibnu NR*
┣➥ *Wa.me/628989031500*
┃
┣━━°❀❬ *TQTO* ❭❀°━━┓
┃
┣➥ *Nurotomo*
┣➥ *MfarelS*
┣➥ *ST4RZ*
┣➥ *Drawl Nag*
┣➥ *Dan kawan yang lain :)*
┃
┣━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *M3: 0858-0310-7598*
┣➥ *3: 0898-9041-500*
┣➥ *DANA: 0898-9031-500*
┣━━━━━━━━━━━━━━━━━━━━
┃ *POWERED IBNU NR*
┗━━━━━━━━━━━━━━━━━━━━

`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

