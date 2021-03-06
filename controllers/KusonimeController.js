const Kusonime = require('../fansubs/Kusonime')

class KusonimeController {
    async animeList(req, res) {
        const anime = await Kusonime.animeList()
        if (anime.error) {
            res.status(500).json({
                status: 500,
                message: anime.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: anime
            })
        }
    }

    async newReleases(req, res) {
        const posts = await Kusonime.newReleases(req.query.page)
        if (posts.error) {
            res.status(500).json({
                status: 500,
                message: posts.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: posts
            })
        }
    }

    async links(req, res) {
        const data = await Kusonime.links(req.query.link)
        if (data.error) {
            res.status(500).json({
                status: 500,
                message: data.message
            })
        } else {
            res.json({
                status: 200,
                message: 'Success',
                data: data
            })
        }
    }
}

module.exports = new KusonimeController