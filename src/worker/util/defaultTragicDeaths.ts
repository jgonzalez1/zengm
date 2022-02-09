import { GAME_NAME, isSport } from "../../common";

const reasons = [
	"SPECIAL_CLUE",
	"SPECIAL_GIFTS",
	"PLAYER_NAME died from a drug overdose.",
	"PLAYER_NAME was killed by a gunshot during an altercation at a night club.",
	"PLAYER_NAME was eaten by wolves. He was delicious.",
	"PLAYER_NAME died in a car crash.",
	"PLAYER_NAME was stabbed to death by a jealous ex-girlfriend.",
	"PLAYER_NAME committed suicide.",
	"PLAYER_NAME died from a rapidly progressing case of ebola.",
	"PLAYER_NAME was killed in a bar fight.",
	"PLAYER_NAME died after falling out of his 13th floor hotel room.",
	"PLAYER_NAME was shredded to bits by the team plane's propeller.",
	"PLAYER_NAME was hit by a stray meteor.",
	"PLAYER_NAME accidentally shot himself in the head while cleaning his gun.",
	"PLAYER_NAME was beheaded by ISIS.",
	"PLAYER_NAME spontaneously combusted.",
	"PLAYER_NAME had a stroke after reading about the owner's plans to trade him.",
	"PLAYER_NAME died of exertion while trying to set the record for largest number of sex partners in one day.",
	"PLAYER_NAME rode his Segway off a cliff.",
	"PLAYER_NAME fell into the gorilla pit at the zoo and was dismembered as the staff decided not to shoot the gorilla.",
	"PLAYER_NAME was pursued by a bear, and mauled.", // poor Antigonus
	"PLAYER_NAME was smothered by a throng of ravenous, autograph-seeking fans after exiting the team plane.",
	"PLAYER_NAME suffered a heart attack in the team training facility and died.",
	"PLAYER_NAME was lost at sea and is presumed dead.",
	"PLAYER_NAME was run over by a car.",
	"PLAYER_NAME was run over by a car, and then was run over by a second car. Police believe only the first was intentional.",
	"PLAYER_NAME cannot be found and is presumed dead. Neighbors reported strange lights in the sky above his house last night.",
	"PLAYER_NAME fell off the edge of the flat earth.",
	"PLAYER_NAME died a normal death. Move on, find a new slant.",
	"PLAYER_NAME was shot by police while shoplifting in China.",
	"PLAYER_NAME died from an adult onset peanut allergy while eating his pre-game PB&J sandwich.",
	"PLAYER_NAME fell into a wood chipper.",
	"PLAYER_NAME was killed in swatting attack during a heated game of Fortnite.",
	"PLAYER_NAME choked to death on a pretzel.",
	"PLAYER_NAME was murdered by a time traveler so he would not become the world's evil overlord following his playing days.",
	'PLAYER_NAME removed the "Do Not Remove" tag from a newly purchased mattress and was promptly devoured by mattress gnomes',
	"PLAYER_NAME died of dysentery.",
	"PLAYER_NAME was strangled to death by a teammate for not knowing the score.",
	"PLAYER_NAME died in a freak gasoline fight accident.",
	`PLAYER_NAME was intensely focused on playing ${GAME_NAME} on his cell phone. As he walked across the street, he was so distracted by his ultimately fatal obsession that he didn't notice the bus barreling towards him.`,
	"PLAYER_NAME drowned while crossing the Saleph River.",
	"PLAYER_NAME uploaded himself to the cloud and can no longer participate in corporeal pursuits.",
	"PLAYER_NAME committed suicide by two shots to the back of his head after handcuffing and throwing himself into ocean inside duffle bag, CIA reports.",
];

if (isSport("basketball")) {
	reasons.push(
		"PLAYER_NAME died from a skull fracture after hitting his head on the rim while practicing for a dunk contest.",
		"PLAYER_NAME fell to his death after slapping the backboard of a hoop inexplicably placed in front of a flimsy window on the 3rd floor of a building.",
	);
}

export default reasons.map(reason => ({ reason, frequency: 1 }));
