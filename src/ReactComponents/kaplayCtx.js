import kaplay from "kaplay";

export default function initKaplay(ctx) {
  return kaplay({
    width : 1920,
    height : 1080,
    letterbox : true,
    global : false,
    debug : true, // TODO: put back to false in prod
    debugKey : "f1",
    canvas : document.getElementById("game"),
    pixelDensity: devicePixelRatio,
  });
}