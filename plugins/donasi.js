let handler = async m => m.reply(`
╭─「 Donasi • Pulsa • Gopay • Dana • Ovo 」
│ • Kirim ke [088228825906]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
