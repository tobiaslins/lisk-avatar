const React = require('react')
const url = require('url')
const ReactDOMServer = require('react-dom/server')
const svgToImg = require('svg-to-img')

const AccountVisual = require('./accountVisual')

const svgExt = /\.svg$/
const pngExt = /\.png$/
const sizePath = /^\d+x\d+$/

module.exports = async (req, res) => {
  let { pathname, query } = url.parse(req.url, true)
  if (pathname === '/favicon.ico') return ''

  res.setHeader('Cache-Control', 'max-age=2592000, public')
  res.setHeader('Last-Modified', 'Mon, 03 Jan 2011 17:45:57 GMT')

  let wallet = pathname.substring(1, pathname.length)
  wallet = wallet.split('.')[0]

  let height = 250
  if (sizePath.test(query.size)) {
    height = query.size.slice(query.size.indexOf('x') + 1)
    query.size = query.size.slice(0, query.size.indexOf('x'))
  } else {
    height = query.size
  }

  const avatarSVG = ReactDOMServer.renderToStaticMarkup(
    <AccountVisual address={wallet} size={height} />
  )

  if (query.type === 'png' || pngExt.test(pathname)) {
    res.setHeader('Content-Type', 'image/png')
    const img = await svgToImg.from(avatarSVG).toPng({
      width: height,
      height: height
    })
    return img
  } else {
    res.setHeader('Content-Type', 'image/svg+xml')
    return avatarSVG
  }
}
