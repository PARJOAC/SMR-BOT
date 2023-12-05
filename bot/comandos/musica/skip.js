const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("skip")
        .setDescription("Saltar a la siguiente canción"),
    category: "musica",
    usage: "Saltar la música",
    name: "skip",
    n: "</skip:1178872713226494016>",
    execute: async (interaction, client) => {
        const queue = await client.distube.getQueue(interaction);

        if (!queue) return interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription("Aún no hay ninguna canción en la lista.")
                .setColor("Red")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            ], ephemeral: true
        })
        if (queue.songs.length === 1) return interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription("¡No se encontró ninguna canción en la cola!")
                .setColor("Red")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            ], ephemeral: true
        })
        client.distube.skip(interaction)
        return interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription("La canción fue pasada con éxito.")
                .setColor("Green")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            ], ephemeral: true
        })

    }
}