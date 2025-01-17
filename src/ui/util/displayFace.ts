import { display } from "facesjs";
import type { Face } from "facesjs";
import { DEFAULT_JERSEY, isSport } from "../../common";

const displayFace = ({
	colors = ["#000000", "#cccccc", "#ffffff"],
	face,
	jersey = DEFAULT_JERSEY,
	wrapper,
}: {
	colors?: [string, string, string];
	jersey?: string;
	face: Face;
	wrapper: HTMLDivElement;
}) => {
	let overrides;
	if (isSport("baseball")) {
		const [jerseyId, accessoryId] = jersey.split(":");
		overrides = {
			teamColors: colors,
			jersey: {
				id: jerseyId,
			},
			accessories: {
				id: accessoryId,
			},
		};
	} else {
		overrides = {
			teamColors: colors,
			jersey: {
				id: jersey,
			},
		};
	}

	display(wrapper, face, overrides);
};

export default displayFace;
