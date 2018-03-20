# lisk-avatar ![](https://avatar.lisk.ws/avatar?size=20) ![](https://avatar.lisk.ws/1?size=20) ![](https://avatar.lisk.ws/github?size=20) ![](https://avatar.lisk.ws/love?size=20) ![](https://avatar.lisk.ws/node?size=20)

Avatar generates beautiful gradient avatars for your app or homepage (for example if they didn't upload one)

Avatar is built on top of [`micro`](https://github.com/zeit/micro) and based on the avatar generation algorithm from Lisk Hub

## How to use avatar

To generate an avatar just embed following URL `https://avatar.lisk.ws/`. Now you can append a wallet id to generate an avatar

You will receive a `svg` that you can embed within your application.

Each wallet id will generate a unique `avatar`. Just replace `1234567890L` with your `wallet id`

### SVG avatar

Per default the service returns an SVG avatar

```
https://avatar.lisk.ws/1234567890L
```

![Avatar for tobiaslins](https://avatar.lisk.ws/1234567890L)

### PNG avatar

It is possible to receive an png avatar by adding the extension `.png`

```
https://avatar.lisk.ws/1234567890L.png
```
