import sightImage from "@/assets/fotos/nuernberg1.jpg";
console.log(typeof sightImage);

// const questionData = {
const sightData = {
  [
  {
    index: ,
    sightName:,
    sightImage:
    images: [sightImage],
    coordinatesSight: ,
    sightaddress:,
    story1:,
    question:,
    answer:,
    story2:,
    sightDescribtion:,}
  {

    sightName: "Intro",
    index: 0,
    story1: "  We are in the year 1510. Just 3 weeks ago you celebrated the birthday of our uncle Peter Henlein(1484?-1542) a Nuremberg precision engineer and clock maker.
    Your uncle was very happy during this celebration. He took you aside to his workshop shop which looked super impressive to you with all the drawings pinned to the wall and cool and foreign looking machines in his shop.
    He showed you the latest project he was working on: a portable clock that will fit in the pocket of a man's trousers.
    Two months from now emperor Maximillian I (1459-1519), is scheduled to arrive in Nuremberg passing through on his way to Aachen.
    Your uncle towards the end of his birthday raised a toast to emperor hinting that if his clock is fully functional by then he might get a chance to present it to the emperor.
    
    Just 3 weeks later the situation has completely changed. You are rushing to St. Lorenz church to meet with abbot Winfried at the adjacent Franciscan monastery"
  },
  {
    SightName: "St Lorenz Church",
    SightIndex: 1,
    SightStory1:"What had happened? Since his birthday celebration your uncle was arrested due to a reopened manslaughter case. In the dreadful night of September 7 to 8 in 1504 he had gotten into a fight with the locksmith Clemens Glaser, who fell backwards in a very unfortunate way hitting his head on the corner of a stair, passing away in the early hours of the next morning.
    Due to a new witness claiming it was a case of premeditated murder your uncle’s ruling was changed from manslaughter to murder and he was sentenced for an appointment with the Nuremberg hangman.
    
    
    You are convinced of your uncle’s version of the event and want to help to save your uncle. 
    Visiting auntie Kunigunde Henlein you realized that some things don’t line up. The plans for the revolutionary torsion pendulum and coil spring that would power the clock for up to 40 hours are nowhere to be found.
    
    Your auntie sends you to see abbot Winfred since her husband had made mention a couple of times should he be in dire trouble most likely the abbot will be able to help.  " 
    
    SightQuestion:
    "What is the Code that will get you access and trust to the Abbot ",
    answers: [
      {
        id: "A",
        answer: "3233",
        isCorrect: false,
      },
      {
        id: "B",
        answer: "3184",
        isCorrect: true,
      },
      {
        id: "C",
        answer:
          "2917",
        isCorrect: true,
      },
      {
        id: "D",
        answer:
          "3015",
        isCorrect: false,
      },
    ]},
    images: [sightImage],
    coordinatesSight: [49.458124952061624, 11.075683783928115],
    SightName: "Kaiserburg, Burg 17, 90403 Nürnberg",
    story: [
          `What had happened? Since his birthday celebration your uncle was arrested due to a reopened manslaughter case. In the dreadful night of September 7 to 8 in 1504 he had gotten into a fight with the locksmith Clemens Glaser, who fell backwards in a very unfortunate way hitting his head on the corner of a stair, passing away in the early hours of the next morning.
    Due to a new witness claiming it was a case of premeditated murder your uncle’s ruling was changed from manslaughter to murder and he was sentenced for an appointment with the Nuremberg hangman.
    
    
    You are convinced of your uncle’s version of the event and want to help to save your uncle. 
    Visiting auntie Kunigunde Henlein you realized that some things don’t line up. The plans for the revolutionary torsion pendulum and coil spring that would power the clock for up to 40 hours are nowhere to be found.
    
    Your auntie sends you to see abbot Winfred since her husband had made mention a couple of times should he be in dire trouble most likely the abbot will be able to help.`,
      `At the gate of the monastery after giving the right access code you are speedily guided to Abbot Winfred an older, wise man with a kind heart.
    He assures you that your uncle is not a murderer and that he was more than sorry for what happened to Clemens Glaser.
    He further says that your uncle had an premonition that him being sentenced to 20 Guilder of compensation for the Glaser family would not be the end and asked him to keep something for that day coming. He the opens a little wooden chest in the cupboard in his office handing you a letter clearly carrying your uncle’s handwriting on the envelope. He tells you to go to the Northern side of Hangman’s bridge and open the envelope there as were the instructions of uncle Peter.
    The abbot prays for you and your quest for righteousness for your uncle Peter and sends you on your way with a blessing.
    `,
    ],
  },
]
}

export default questionData;
