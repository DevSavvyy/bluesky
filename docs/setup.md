---
id: setup
title: How-To Setup Core
sidebar_label: Setup
---

## THE DATABASE SETUP IS OUTDATED, JUST CREATE MONGO DB's NAMED `auth` & `fivem` AND IT WILL WORK WITHOUT HAVING TO USE ANY DUMPS

## NOTE: THIS WILL NOT WORK OUT OF THE BOX AS THERE IS LINKAGE TO A CUSTOM INVISION POWER BOARD APPLICATION THAT HAS NOT BEEN RELEASED. YOU MUST MAKE REQUIRED EDITS TO MAKE IT USABLE, NON HELP IS OFFERED BEYOND THESE DOCS

1. Follow [FiveM Server Setup Guide](https://docs.fivem.net/docs/server-manual/setting-up-a-server/)
2. Install & Setup MongoDB
3. Set discord_bot_token, mongodb_url, & mongodb_database in your server.cfg
4. Clone the [primary repository](https://github.com/BlueSky-Development/Blue-Sky-FiveM) into a [bluesky] folder in your servers resource directory
5. Unpack the mongodb.zip file, & move it to the bin folder in your MongoDB install directory.
6. Run command promp *as admin* and type the following command (MAKE SURE YOUR COMMAND PROMPT IS IN THE CORRECT DIRECTORY): ``mongorestore -d fivem mongodb``, you should see several messages stating items were restored
7. Set Discord IDs in bs_base config. NOTE: You'll need to enable [Discord Developer](https://support.discordapp.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-) mode to get these IDs
8. Ensure you have the whitelisted rank assigned to your Discord
9. Launch Server & Connect