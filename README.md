# The Open News Project

Open News - shared via IPFS.

TL;DR
Hosted on the blockchain, not on a central server -> thus not blockable with traditional means.

This is a NextJS project, using static server side generation to deliver via blockchain.

The project can be thought of in 3 parts:

-   Source maintenance. All sources (currently RSS only) can be configured per language, to map their RSS schema to the ONP (open news project) schema.
-   App code. Trivial Javascript app using Nextjs, which runs a lot of things right out of the box
-   Deployment. Instead of traditional server hosting or running through functions/lambdas to deliver on demand, the site is statically generated every x minutes (currently 360) and then hosted on the blockchain via IPFS. That means there is no central point hosting the site.
    The .com adress makes this more convenient, but the site is also reachable via https://ipfs.fleek.co/ipfs/QmUjvESZ6TjjXPLuCuQC2GhSkEQExgSZ2sZvjz1Xpovqh2/ OR a .eth and .eth/link domain, which is not blockable through traditional measures.
    While .eth/link domains resolve in every standard browser, they are centrally managed making them more susceptabel to external influence.
    .eth domains are not, but currenlty not supported by every browser.
    Supporting browsers are for example:
    -Brave (chromium)
    -Opera

As we do not have any API access at the moment, we unfortunately cannot use the pictures that go with the story. For fallback pictures we are currenty using Lorem Picsum (https://picsum.photos/).
