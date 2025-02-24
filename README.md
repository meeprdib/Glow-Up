
## Glow Up - Emissive Ores 

---

[Glow up](https://www.curseforge.com/minecraft/texture-packs/glow-up) is a resource pack that makes ores from vanilla and other mods glow. Internally, it works by overriding the block model .json for said ores and rebuilding them to consist of the following:

1. A layer that's the ore "base", eg. Deepslate for Deepslate Iron Ore.
2. A layer that's the ore "overlay", that's put on top of the "base" layer. This is then made emissive via Neo/Forge block model features.

These models are generated via a KubeJS startup script, named `emissive.js` in this repository. 

Oh yeah, this only works on Neo/Forge, by the way. There are many other alternatives to this that work with Fabric by using external libraries/mods, but this is completely dependent on Neo/Forge block model features.
