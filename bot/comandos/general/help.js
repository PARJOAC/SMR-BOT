const { EmbedBuilder, SlashCommandBuilder } = require('discord.js');
const boton = require("../../../extras/boton.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Comando de ayuda"),
  category: "general",
  usage: "Obtener ayuda para los comandos",
  n: "</help:1156316230215540796>",
  execute: async (interaction, client) => {
    const commandsByCategory = {
      unosmr: client.slash.filter((cmd) => cmd.category === "unosmr"),
      dossmr: client.slash.filter((cmd) => cmd.category === "dossmr"),
      general: client.slash.filter((cmd) => cmd.category === "general"),
      mod: client.slash.filter((cmd) => cmd.category === "mod"),
      musica: client.slash.filter((cmd) => cmd.category === "musica")
    };



    const indexEmbed = new EmbedBuilder()
      .setTitle("Menú de Inicio")
      .setDescription("🌎 = **GENERAL**\n1️⃣ = **1 SMR**\n2️⃣ = **2 SMR**\n🔧 = **MODS**")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const UNOSMR = new EmbedBuilder()
      .setTitle("1 SMR")
      .setDescription(commandsByCategory.unosmr.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const DOSSMR = new EmbedBuilder()
      .setTitle("2 SMR")
      .setDescription(commandsByCategory.dossmr.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const GENERAL = new EmbedBuilder()
      .setTitle("GENERAL")
      .setDescription(commandsByCategory.general.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const MOD = new EmbedBuilder()
      .setTitle("MODS")
      .setDescription(commandsByCategory.mod.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });

    const MUSICA = new EmbedBuilder()
      .setTitle("MÚSICA")
      .setDescription(commandsByCategory.musica.map(withAliases).join("\n") || "No hay comandos.")
      .setColor("Green")
      .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() });


    const m = await interaction.reply({ embeds: [indexEmbed], components: [boton.botones_ayuda()], ephemeral: true });

    const buttonEmbedMap = {
      UNOSMR: UNOSMR,
      DOSSMR: DOSSMR,
      GENERAL: GENERAL,
      MOD: MOD,
      MUSICA: MUSICA
    };

    const filter = (buttonMessage) => buttonMessage.clicker.id === interaction.user.id;
    const collector = m.createMessageComponentCollector(filter, { time: 20000 });

    collector.on('collect', async (x) => {
      if (x.member.id !== interaction.user.id) return;
      const { customId } = x;
      await m.edit({ embeds: [buttonEmbedMap[customId]], components: [boton.botones_ayuda()], ephemeral: true });
      await x.deferUpdate();
    });
    collector.on('end', () => {
      m.edit({ components: [] });
    });
  }
};




function withAliases(cmd) {
  return `${cmd.n}\nUso: ${cmd.usage}\n`;
}
