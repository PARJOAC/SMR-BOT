const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("play")
        .setDescription("Reproduce música en un canal de voz.")
        .addStringOption(option => option
            .setName("name")
            .setDescription("Escribe el nombre de la canción")
            .setRequired(true)),
    category: "musica",
    usage: "Reproducir música",
    name: "play",
    n: "</play:1178872713226494015>",
    execute: async (interaction, client) => {
        const string = interaction.options.getString("name");

        let voiceChannel = interaction.member.voice.channel;

        if (!voiceChannel) return interaction.channel.send({
            embeds: [new EmbedBuilder()
                .setDescription("¡No estás en un canal de voz!")
                .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
                .setColor("Red")
            ], ephemeral: true
        });

        await client.distube.getQueue(interaction);
        const busqueda = await client.player.search(string, {
            requestedBy: interaction.user
        });

        client.distube.voices.join(voiceChannel);
        await client.distube.play(interaction.member.voice.channel, string);


        const embed = new EmbedBuilder()
            .setTitle(`${busqueda.tracks[0].title}`)
            .setDescription(`**Autor:** ${busqueda.tracks[0].author}\n**Tiempo:** [00:00 / ${busqueda.tracks[0].duration}]\n**Visitas:** ${busqueda.tracks[0].views}`)
            .setImage(busqueda.tracks[0].thumbnail)
            .setURL(busqueda.tracks[0].url)
            .setFooter({ text: 'Bot realizado por ACPARJO', iconURL: client.user.displayAvatarURL() })
            .setColor("Green");

        await interaction.channel.send({ embeds: [embed], ephemeral: true });

    },
};