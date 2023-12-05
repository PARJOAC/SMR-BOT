const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("loop")
    .setDescription("Hacer bucle de la canción actual"),
  category: "musica",
  usage: "Poner en bucle la canción actual",
  name: "loop",
  n: "</loop:1178872713226494013>",
  execute: async (interaction, client) => {
    const queue = await client.distube.getQueue(interaction);
    if (!queue) return interaction.channel.send({
      embeds: [new EmbedBuilder()
        .setDescription(`Aún no hay ninguna canción en la lista.`)
        .setColor("Red")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ], ephemeral: true
    })
    client.distube.setRepeatMode(interaction, 1);
    return interaction.channel.send({
      embeds: [new EmbedBuilder()
        .setDescription("La canción se repitió con éxito.")
        .setColor("Green")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ], ephemeral: true
    })

  }
}
