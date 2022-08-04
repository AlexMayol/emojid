# Emojid

Generate IDs and UUIDs with emojis.

`npm i @midnight-city/emojid`
`yarn add @midnight-city/emojid`

Give your users a nice time looking at their funny URL at the cost of bloating your database with hell itself.

Some libraries shouldn't exist. This is one of them.

```js
import { emojid, uuid } from "@midnight-city/emojid";

const id = emojid(6);
//"😲🦈🌚🎮📀🚩"

const uuid = uuid();
// "🍹🔴🎧🦥-👀😂-🔪🔑-😛🧄🦈🍜🧻🌍🔴🎱"
```

# API

You can also use the public API if you don't feel like installing yet another dependency:

[https://emojid-generator.vercel.app/api/uuid](https://emojid-generator.vercel.app/api/uuid)
[https://emojid-generator.vercel.app/api/id](https://emojid-generator.vercel.app/api/id)
[https://emojid-generator.vercel.app/api/id/:number](https://emojid-generator.vercel.app/api/id/:number)

## Caveats and gotchas

It turns out the lenght of most emojis is 2, but some of them have a lenght of 1 and even length of 5. [Check it out using this list](https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/)

`'⚡'.length == 1`
`'😄'.length == 2`
`'👩‍🦰'.length == 5`
`'👩‍👩‍👩‍👧‍👧'.length == 14`

🤔🤔
