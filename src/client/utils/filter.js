module.exports  = {

    getActive: function (campaignsArray) {

        let today = Date.now();

        let activeCampaigns = campaignsArray.data.filter((campaign)=>{

            if( Date.parse(campaign.to_date) > today && Date.parse(campaign.from_date) <= today && this.isPublished(campaign)){
                return campaign;
            }

        });

        return activeCampaigns;
    },

    getFuture: function (campaignsArray) {

        let today = Date.now();

        let activeCampaigns = campaignsArray.data.filter((campaign)=>{

            if( Date.parse(campaign.from_date) > today && this.isPublished(campaign)){
                return campaign;
            }

        });

        return activeCampaigns;
    },

    getOutOfDate: function (campaignsArray) {

        let today = Date.now();

        let activeCampaigns = campaignsArray.data.filter((campaign)=>{

            if( Date.parse(campaign.to_date) < today && this.isPublished(campaign)){
                return campaign;
            }

        });

        return activeCampaigns;
    },


    isPublished: function (campaign) {
        return campaign.published > 0;
    }

}
