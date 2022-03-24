# Emojid

Generate IDs with emojis.

Some libraries shouldn't exist. This is one of them.

```js
import { emojid, uuid } from "@midnight-city/emojid";

const id = emojid(6);
//"😲🦈🌚🎮📀🚩"

const uuid = uuid();
// "🍹🔴🎧🦥-👀😂-🔪🔑-😛🧄🔴🍜🧻🌍🔴🎱"
```

## Caveats and gotchas

It turns out the lenght of most emojis is 2, but some of them have a lenght of 1 and even length of 5. [Check it out using this list](https://www.freecodecamp.org/news/all-emojis-emoji-list-for-copy-and-paste/)

`'⚡'.length == 1`
`'😄'.length == 2`
`'👩‍🦰'.length == 5`
`'👩‍👩‍👩‍👧‍👧'.length == 14`
