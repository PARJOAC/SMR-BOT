module.exports = async (message, song) => {
  song.textChannel.send(`Añadida a la cola: ${song.name}`);
}