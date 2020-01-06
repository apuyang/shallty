/* eslint-disable no-undef */
const supertest = require('supertest'),
    expect = require('chai').expect,
    app = require('../../index.js')

describe('oploverz', function () {
    before(function (done) {
        this.timeout(5000)
        setTimeout(done, 3000)
    })

    describe('anime list', function () {
        it('should return 200 and an array of anime list which has title and link', function (done) {
            this.timeout(60000)
            supertest(app).get('/api/oploverz/animeList')
                .expect(200)
                .expect(function (res) {
                    expect(res.body.status).to.equal(200)
                    expect(res.body.message).to.equal('Success')
                    expect(res.body.data).to.be.an('array')
                    res.body.data.forEach(item => {
                        expect(item).to.be.an('object')
                        expect(item).to.has.property('link')
                        expect(item).to.has.property('title')
                    })
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body)
                        return done(err)
                    }
                    done()
                })
        })
    })

    describe('episodes', function () {
        it('should return 200 and an array of episodes which has episode and link', function (done) {
            this.timeout(60000)
            supertest(app).get('/api/oploverz/episodes?link=https%3A%2F%2Fwww.oploverz.in%2Fseries%2Fboku-no-hero-academia-season-4%2F')
                .expect(200)
                .expect(function (res) {
                    expect(res.body.status).to.equal(200)
                    expect(res.body.message).to.equal('Success')
                    expect(res.body.data).to.be.an('array')
                    res.body.data.forEach(item => {
                        expect(item).to.be.an('object')
                        expect(item).to.has.property('episode')
                        expect(item).to.has.property('link')
                    })
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body)
                        return done(err)
                    }
                    done()
                })
        })
    })

    describe('links', function () {
        it('should return 200 and an array of download links which has quality, host, and link', function (done) {
            this.timeout(60000)
            supertest(app).get('/api/oploverz/links?link=https%3A%2F%2Fwww.oploverz.in%2Fboku-no-hero-academia-season-4-episode-12-subtitle-indonesia%2F')
                .expect(200)
                .expect(function (res) {
                    expect(res.body.status).to.equal(200)
                    expect(res.body.message).to.equal('Success')
                    expect(res.body.data).to.be.an('array')
                    res.body.data.forEach(item => {
                        expect(item).to.be.an('object')
                        expect(item).to.has.property('quality')
                        expect(item).to.has.property('host')
                        expect(item).to.has.property('link')
                    })
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body)
                        return done(err)
                    }
                    done()
                })
        })
    })

    describe('new releases', function () {
        it('should return 200 and an array of episodes which has episode, title, and link', function (done) {
            this.timeout(60000)
            supertest(app).get('/api/oploverz/newReleases')
                .expect(200)
                .expect(function (res) {
                    expect(res.body.status).to.equal(200)
                    expect(res.body.message).to.equal('Success')
                    expect(res.body.data).to.be.an('array')
                    res.body.data.forEach(item => {
                        expect(item).to.be.an('object')
                        expect(item).to.has.property('title')
                        expect(item).to.has.property('link')
                    })
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body)
                        return done(err)
                    }
                    done()
                })
        })
    })

    describe('shortlink', function () {
        it('should return 200 and a string of url', function (done) {
            this.timeout(60000)
            supertest(app).get('/api/oploverz/shortlink?link=https%3A%2F%2Fkontenajaib.xyz%2F%3Fid%3DemFXMEdBNC9HbDBMUTh0SFdiRHVQaFEyRWhKS3YzVEJSRHlrRVlEbExLZUNlSEdZaENXTW5mWllrNTliSXYrMXQ2NnhXOEZUL1BkSkpvbXAyRHg2ZE9ycVdZTlU3ejc1TUV5RXFWNkhxc3ZQQnVicW9jdTBtYk5SSjMxb2JLOTEwOFVGK1hSTks3N0txTkxOZHdsWUF4enVwVEtkQ0htUFA1LzJhNmZ1bkdkQ3RJNS9mNHhJOFlMMUdLWEtOQnlwSzE0QlVpODkvZ3RBYmZIQVpMbnVBK3IwOG5xRWFnU1FDOFBQRG55dkhKZmtWQldmM2Jtb1lvRCtmRHhMdXdNVE9DUDNzUjlWeUwrTm1FSEVPb1cvTTV3cFk0NTlCbms3NnVFYkpqRmFnSHczNWxFNllDN2E5VHVLdDdjZTU3dU0%3D')
                .expect(200)
                .expect(function (res) {
                    expect(res.body.status).to.equal(200)
                    expect(res.body.message).to.equal('Success')
                    expect(res.body.data).to.be.an('object')
                    expect(res.body.data).to.has.property('url')
                    expect(res.body.data.url).to.be.a('string')
                    expect(res.body.data.url).to.equal('https://www110.zippyshare.com/v/7dqelZac/file.html')
                })
                .end(function (err, res) {
                    if (err) {
                        console.log(res.body)
                        return done(err)
                    }
                    done()
                })
        })
    })
})