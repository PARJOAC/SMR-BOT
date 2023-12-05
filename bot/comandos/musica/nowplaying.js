const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")

module.exports = {
  data: new SlashCommandBuilder()
    .setName("nowplaying")
    .setDescription("Ver información de lo que estás escuchando."),
  category: "musica",
  usage: "Ver qué música se está escuchando",
  name: "nowplaying",
  n: "</nowplaying:1178872713226494014>",
  execute: async (interaction, client) => {
    const queue = await client.distube.getQueue(interaction);
    if (!queue) return interaction.channel.send({
      embeds: [new EmbedBuilder()
        .setDescription("Aún no hay ninguna canción en la lista.")
        .setColor("Red")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ], ephemeral: true
    })

    const embed = new EmbedBuilder()
      .setTitle(`${queue.songs[0].name}`)
      .setDescription(`Autor: ${queue.songs[0].uploader.name}\nHora: [${queue.formattedCurrentTime} / ${queue.songs[0].formattedDuration}]\nVisitas: ${queue.songs[0].views}\nPedido por: ${queue.songs[0].user}`)
      .setImage(queue.songs[0].thumbnail)
      .setURL(queue.songs[0].url)
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
    interaction.channel.send({ embeds: [embed], ephemeral: true })
  }
}