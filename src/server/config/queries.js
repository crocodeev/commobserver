module.exports = {
  campaigns: function (id) {
    return "SELECT * FROM campaign WHERE project_id=" + id + ";"
  },
  channels: function (id) {
    return "SELECT channel.name FROM channel INNER JOIN campaign_channel ON channel.channel_id=campaign_channel.channel_id INNER JOIN campaign ON campaign_channel.campaign_id=campaign.campaign_id WHERE campaign.campaign_id=" + id + ";"
  },
  content: function (id) {
    return `SELECT * FROM media WHERE media_id=( SELECT media_id FROM media_domain WHERE media_domain_id=(SELECT media_domain_id FROM playlist_media WHERE playlist_id=(SELECT playlist_id FROM playlist WHERE campaign_id=${id})));`
  }
}

/*
need  SELECT
 campaign
 campaign_channel
 channel
 media_domainmedia
 media
 playlist_media
 playlist
*/
