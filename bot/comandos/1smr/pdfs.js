const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pdfs")
    .setDescription("Conseguir los PDFs de clase")
    .addStringOption(option => option
      .setName("pdf")
      .setDescription("Selecciona el pdf que deseas")
      .addChoices({ name: 'FOL 24/11/2023', value: 'fol1' },

      )
      .setRequired(true)),

  category: "unosmr",
  usage: "Obtener enlaces para los PDFs",
  n: "</pdfs:1177674508681879733>",
  execute: async (interaction, client) => {
    const pdfs = interaction.options.getString("pdf")
    switch (pdfs) {
      case "fol1":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription("Pulsa aqui para descargar el PDF [aquí](https://docs.google.com/presentation/d/1DJjWj-stG6GVeoqMLZpKxwfQwZeVi7mJ/edit?usp=drive_link&ouid=104584889669598583526&rtpof=true&sd=true)")
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
        break;
    }
  }
};