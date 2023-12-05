const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const translate = require('translate-google');

module.exports = {
  data: new SlashCommandBuilder()
    .setName("traducir")
    .setDescription("Traducir un texto a distintos idiomas")
    .addStringOption(option => option
      .setName("texto")
      .setDescription("Escribe el texto a traducir")
      .setRequired(true)),
  category: "general",
  usage: "Convertir el texto a humano en vez de IA",
  n: "</traducir:1155757148563841024>",
  execute: async (interaction) => {
    const texto = interaction.options.getString("texto");
    if (texto.length >= 3800)
      return interaction.reply({
        embeds: [new EmbedBuilder()
          .setDescription("El texto debe ser menor a 3800 carácteres.")
          .setColor("Red")
          .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
        ], ephemeral: true
      })
    await interaction.reply({
      embeds: [new EmbedBuilder()
        .setDescription("Traduciendo...")
        .setColor("Green")
        .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
      ], ephemeral: true
    }).then(async (a) => {
      await translate(texto, { to: 'it' }).then(async (res) => {
        await translate(res, { to: 'af' }).then(async (res2) => {
          await translate(res2, { to: 'fr' }).then(async (res3) => {
            await translate(res3, { to: 'es' }).then(async (res4) => {
              await a.edit({
                embeds: [new EmbedBuilder()
                  .setDescription(res4)
                  .setColor("Green")
                  .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
                ], ephemeral: true
              })
            })
          })
        })
      })
    }).catch(err => {
      return interaction.reply({
        embeds: [new EmbedBuilder()
          .setDescription("Ha ocurrio un error al traducir el texto.")
          .setColor("Red")
          .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
        ], ephemeral: true
      })
    })
  },
};