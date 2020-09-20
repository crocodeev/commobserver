module.exports = {
  campaigns: function (id) { 
    return "SELECT * FROM campaign WHERE project_id=" + id + ";"
  },
  channels: function (id) {
    return "SELECT * FROM campaign_channel WHERE campaign_id=" + id + ";"
  }
}
