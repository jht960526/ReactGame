import kaplay from "kaplay";

export default function initKaplay(ctx) {
  return kaplay({
    width : 1920,
    height : 1080,
    letterbox : true,
  });
}