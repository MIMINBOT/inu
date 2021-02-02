let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
Tutorial Buat Bot WA:
Credit: *Ibnu Nr*

Ketik di *[TERMUX]*
1) $pkg install git
2) $pkg install ffmpeg
3) $pkg install unzip
4) $pkg install nodejs
5) $pkg update && pkg upgrade
6) $pkg install wget

Untuk Githubnya..
5) $git clone https://github.com/MIMINBOT/beta
6) $ls
7) $cd beta

yang *terakhirr*..
Penginstalannya cuy :)
8) bash install.sh
9) node index.js/node .

_Bisa kalian liat tutorial lainya di_
*Facebook kami:*
https://www.facebook.com/ibnu.imoyo
`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

