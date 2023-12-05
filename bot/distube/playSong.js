module.exports = async (queue, song) => {
  queue.textChannel.send(`Sonando \`${song.name}\` - \`${song.formattedDuration}\`\nSolicitado por: ${song.user}`)
}