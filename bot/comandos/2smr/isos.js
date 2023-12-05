const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("isos")
    .setDescription("Conseguir las isos que quieras")
    .addStringOption(option => option
      .setName("iso")
      .setDescription("Selecciona la ISO que deseas")
      .addChoices(
        { name: 'Ubuntu Server', value: 'ubuntus' },
        { name: 'Ubuntu Escritorio', value: 'ubuntue' },
        { name: 'Linux Mint', value: 'linuxm' },
        { name: 'Windows Server', value: 'windowss' },
        { name: 'Windows Escritorio', value: 'windowse' },
      )
      .setRequired(true)),
  category: "dossmr",
  usage: "Obtener enlaces para las ISO",
  n: "</isos:1166787707859648563>",
  execute: async (interaction, client) => {
    const isos = interaction.options.getString("iso")
    switch (isos) {
      case "ubuntus":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription(`Para descargar Ubuntu Servidor haz click [aquí](https://drive.google.com/file/d/14-Q58BmXTGuEmpWigwlPZ_IiZoaD02WK/view?usp=sharing)`)
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
        break;
      case "ubuntue":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription(`Para descargar Ubuntu Escritorio haz click [aquí](https://drive.google.com/file/d/1ilCoRpQjIHEwrj3pnLQRV-KgDdPmHNDs/view?usp=sharing)`)
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
        break;
      case "linuxm":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription(`Para descargar Linux Mint haz click [aquí](https://drive.google.com/file/d/1Z5QXwmrg9R_R02C5P0ni2lohr3QMLi7A/view?usp=sharing)`)
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
        break;
      case "windowss":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription(`Para descargar Windows Servidor haz click [aquí](https://drive.google.com/file/d/11Kmc7lBiaePemhwt2TWQGGQ42TwenNIr/view?usp=sharing)`)
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
        break;
      case "windowse":
        return interaction.reply({
          embeds: [new EmbedBuilder()
            .setDescription(`Para descargar Windows Escritorio haz click [aquí](https://drive.google.com/file/d/1EjXMjvD0J44AnzT1kSzBcwf0XVVnx1OK/view?usp=sharing)`)
            .setColor("Green")
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
          ], ephemeral: true
        })
    }
  },
};