# Emojid

Generate IDs with emojis.

Some libraries shouldn't exist. This is one of them.

```js
import { emojid, uuid } from "@midnight-city/emojid";

const id = emojid(6);
//"๐ฒ๐ฆ๐๐ฎ๐๐ฉ"

const uuid = uuid();
// "๐น๐ด๐ง๐ฆฅ-๐๐-๐ช๐-๐๐ง๐ด๐๐งป๐๐ด๐ฑ"
```

# API 
You also can use the public API if you don't feel like installing yet another dependency:

`https://emojid-generator.vercel.app/api/uuid`
`https://emojid-generator.vercel.app/api/id`
`https://emojid-generator.vercel.app/api/id/:number`
## Caveats and gotchas

It turns out the lenght of most emojis is 2, but some of them have a lenght of 1 and even length of 5. [Check it out using this list](https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/)

`'โก'.length == 1`
`'๐'.length == 2`
`'๐ฉโ๐ฆฐ'.length == 5`
`'๐ฉโ๐ฉโ๐ฉโ๐งโ๐ง'.length == 14`
