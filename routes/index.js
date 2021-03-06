const express = require('express')
const route = express.Router()
const SamehadakuController = require('../controllers/SamehadakuController')
const NeonimeController = require('../controllers/NeonimeController')
const OploverzController = require('../controllers/OploverzController')
const KusonimeController = require('../controllers/KusonimeController')
const KiryuuController = require('../controllers/KiryuuController')
const MoenimeController = require('../controllers/MoenimeController')
const ShortlinkController = require('../controllers/ShortlinkController')
const ScreenshotController = require('../controllers/ScreenshotController')

route.get('/samehadaku/animeList', SamehadakuController.animeList)
route.get('/samehadaku/episodes', SamehadakuController.episodes)
route.get('/samehadaku/links', SamehadakuController.links)
route.get('/samehadaku/newReleases', SamehadakuController.newReleases)

route.get('/neonime/animeList', NeonimeController.animeList)
route.get('/neonime/episodes', NeonimeController.episodes)
route.get('/neonime/links', NeonimeController.links)
route.get('/neonime/newReleases', NeonimeController.newReleases)

route.get('/oploverz/animeList', OploverzController.animeList)
route.get('/oploverz/episodes', OploverzController.episodes)
route.get('/oploverz/links', OploverzController.links)
route.get('/oploverz/newReleases', OploverzController.newReleases)

route.get('/kusonime/animeList', KusonimeController.animeList)
route.get('/kusonime/links', KusonimeController.links)
route.get('/kusonime/newReleases', KusonimeController.newReleases)

route.get('/moenime/animeList', MoenimeController.animeList)
route.get('/moenime/links', MoenimeController.links)
route.get('/moenime/newReleases', MoenimeController.newReleases)

route.get('/kiryuu/mangaList', KiryuuController.mangaList)
route.get('/kiryuu/mangaInfo', KiryuuController.mangaInfo)
route.get('/kiryuu/chapters', KiryuuController.chapters)
route.get('/kiryuu/images', KiryuuController.images)
route.get('/kiryuu/newReleases', KiryuuController.newReleases)

route.get('/shortlink', ShortlinkController.index)

route.get('/screenshot', ScreenshotController.screenshot)

module.exports = route