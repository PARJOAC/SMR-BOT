const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("leave")
        .setDescription("Terminar la música"),
    category: "musica",
    usage: "Terminar la cola de canciones",
    name: "leave",
    n: "</leave:1178872713226494012>",
    execute: async (interaction, client) => {
        const queue = client.distube.getQueue(interaction);
        if (!queue) return interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription(`Aún no hay ninguna canción en la lista.`)
                .setColor("Red")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            ], ephemeral: true
        })
        client.distube.voices.leave(interaction)
        await interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription("Me he salido del canal de voz")
                .setColor("Green")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            ], ephemeral: true
        })
    }
}