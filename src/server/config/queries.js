module.exports = {
  campaigns: function (id) { 
    return "SELECT * FROM campaign WHERE project_id=" + id + ";"
  },
  channels: function (id) {
    return "SELECT channel.name FROM channel INNER JOIN campaign_channel ON channel.channel_id=campaign_channel.channel_id INNER JOIN campaign ON campaign_channel.campaign_id=campaign.campaign_id WHERE campaign.campaign_id=" + id + ";"
  }
}


/*

плейлист

SELECT * FROM `playlist` WHERE campaign_id=207

медиа

SELECT * FROM `playlist_media` WHERE playlist_id=411

далее

SELECT * FROM `media_domain` WHERE media_domain_id=340627

SELECT * FROM `media` WHERE media_id=388188

общий

*/