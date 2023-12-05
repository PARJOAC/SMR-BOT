const { ChannelType, PermissionsBitField, ActionRowBuilder, ButtonBuilder, ButtonStyle, EmbedBuilder, SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("canal")
    .setDescription("Crear un canal único"),
  category: "general",
  usage: "Crear un canal único",
  n: "</canal:1174393898819391570>",
  execute: async (interaction, client) => {
    const canalcreado = interaction.guild.channels.cache.find(channel =>
      channel.type === ChannelType.GuildText && channel.name.startsWith("canal-") && channel.name.endsWith(interaction.member.user.username)
    );
    if (canalcreado)
      return interaction.reply({
        embeds: [new EmbedBuilder()
          .setDescription(`Ya tienes un canal único abierto: ${canalcreado}`)
          .setColor("Red")
          .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
        ], ephemeral: true
      });

    const canal_usuario = await interaction.guild.channels.create({
      name: `canal-${interaction.member.user.username}`,
      type: ChannelType.GuildText,
      parent: "1174392149006094477",
      permissionOverwrites: [
        {
          id: interaction.guild.id,
          deny: [PermissionsBitField.Flags.ViewChannel]
        },
        {
          id: interaction.member.id,
          allow: [PermissionsBitField.Flags.ViewChannel]
        }
      ]
    });

    const row = new ActionRowBuilder()
      .addComponents(
        new ButtonBuilder()
          .setCustomId('cerrar')
          .setLabel('Eliminar canal ❌')
          .setStyle(ButtonStyle.Secondary)
      );

    await canal_usuario.send({
      content: `${interaction.member.user}`, embeds: [new EmbedBuilder()
        .setDescription(`Este será tu canal propio, para eliminar el canal, reacciona al botón.`)
        .setColor("Green")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ],
      components: [row]
    });

    interaction.reply({
      embeds: [new EmbedBuilder()
        .setDescription(`Tu canal único es: ${canal_usuario}`)
        .setColor("Green")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ], ephemeral: true
    });
  }
}