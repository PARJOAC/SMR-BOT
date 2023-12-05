module.exports = async (queue, playlist) => {
  playlist.textChannel.send(`Se ha añadido la playlist \`${playlist.name}\` (${playlist.songs.length} canciones) a la cola!`)
}