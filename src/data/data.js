import sightImage from "@/assets/fotos/nuernberg1.jpg";
console.log(typeof sightImage);

const questionData = [
  {
    question:
      "Welches kuriose Ereignis soll angeblich während der Belagerung der Nürnberger Burg im Mittelalter passiert sein ?",
    answers: [
      {
        id: "A",
        answer: "Ein Ritter verlor seinen Helm und fand ihn in einer Bäckerei.",
        isCorrect: false,
      },
      {
        id: "B",
        answer: "Die Belagerer wurden von Eichhörnchen attackiert.",
        isCorrect: false,
      },
      {
        id: "C",
        answer:
          "Ein Musiker spielte während des Angriffes eine Ode, und beide Seiten hielten inne.",
        isCorrect: true,
      },
    ],
    images: [sightImage],
    coordinatesSight: [49.458124952061624, 11.075683783928115],
    SightName: "Kaiserburg, Burg 17, 90403 Nürnberg",
  },
];

export default questionData;
