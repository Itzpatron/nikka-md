const { command, isPrivate, getJson, getBuffer } = require("../lib");

command(
    {
        pattern: "animegen",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anime-gen?apikey=free_key@maher_apis&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/cuu1aa.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by Nikka md"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "animegen",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

command(
    {
        pattern: "andiff",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anime-diffusion?apikey=free_key@maher_apis&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/cuu1aa.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by Nikka md"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "Andiffi",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

command(
    {
        pattern: "anything",
        desc: "anime ai cmd",
        fromMe: isPrivate,
        type: "ai",
    },
    async (message, match) => {
        if (!match) return await message.reply("give a photo search query")
        const img = `https://api.nexoracle.com/ai/anything?apikey=elDrYH7GsuIeBkyw1&prompt=${match}`;

        const thumbnailUrl = "https://files.catbox.moe/cuu1aa.jpg"; // Thumbnail image
        const devInfo = "\n> Generated by Nikka md"; // Replace this with the desired caption

        await message.client.sendMessage(message.jid, {
            image: { url: img },
            caption: devInfo,
            contextInfo: {
                externalAdReply: {
                    title: "𝞖𝞓𝞙𝞘 𝙎𝞢𝞒",
                    body: "Anything",
                    sourceUrl: "https://haki.us.kg", // Link to website
                    mediaUrl: "https://haki.us.kg",
                    mediaType: 4,
                    showAdAttribution: true,
                    renderLargerThumbnail: false,
                    thumbnailUrl: thumbnailUrl,
                },
            },
        });
    }
);

const { command, isPrivate, getJson, getBuffer } = require("../lib");


command(
    {
        pattern: "blackbox",
        desc: "blackbox ai chat",
        fromMe: isPrivate,
        type: "ai",   
    },
    async(message, match) => {
        if (!match) return await message.reply("i need a search query")
        const response = await getjson(`https://api.nexoracle.com/ai/blackbox?apikey=elDrYH7GsuIeBkyw1&prompt=${match}`);
        const res = response.result;
        await message.client.sendMessage(message.jid, res);
    }
);



















