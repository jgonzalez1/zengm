import { Fragment, useState } from "react";
import { ForceWin, MoreLinks, ScoreBox } from "../components";
import useTitleBar from "../hooks/useTitleBar";
import type { View } from "../../common/types";
import { toWorker, useLocalShallow } from "../util";
import classNames from "classnames";
import { TIME_BETWEEN_GAMES } from "../../common";

const DailySchedule = ({
	completed,
	day,
	days,
	isToday,
	season,
	upcoming,
	userTid,
}: View<"dailySchedule">) => {
	useTitleBar({
		title: `${TIME_BETWEEN_GAMES === "week" ? "Weekly" : "Daily"} Schedule`,
		dropdownView: "daily_schedule",
		dropdownFields: { seasons: season, days: day },
		dropdownCustomOptions: {
			days,
		},
	});

	const { gameSimInProgress } = useLocalShallow(state => ({
		gameSimInProgress: state.gameSimInProgress,
		godMode: state.godMode,
	}));

	let simToDay = null;
	if (upcoming.length > 0 && !isToday) {
		const minGid = Math.min(...upcoming.map(game => game.gid));
		simToDay = (
			<div className="mb-3">
				<button
					className="btn btn-secondary"
					disabled={gameSimInProgress}
					onClick={() => {
						toWorker("actions", "simToGame", minGid);
					}}
				>
					Sim to day
				</button>
			</div>
		);
	}

	const upcomingAndCompleted = upcoming.length > 0 && completed.length > 0;

	return (
		<>
			<p>MORE LINKS</p>
			{simToDay}

			{upcoming.length > 0 ? (
				<>
					<div className="row">
						<div className="col-xl-4 col-md-6 col-12">
							{/* Copy-pasted from ScoreBox, so all the rows below can remain aligned */}
							<div
								className="d-flex"
								style={{ maxWidth: 400, marginRight: isToday ? 62 : 0 }}
							>
								{upcomingAndCompleted ? <h2>Upcoming Games</h2> : null}
								<div
									className="p-1 ml-auto text-muted"
									title="Team Overall Rating"
								>
									Ovr
								</div>
								<div
									className={classNames(
										"text-right p-1 text-muted",
										"score-box-spread",
									)}
									title="Predicted Point Spread"
								>
									Spread
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						{upcoming.map(game => {
							const actionStuff = isToday
								? {
										actionDisabled: gameSimInProgress,
										actionHighlight:
											game.teams[0].tid === userTid ||
											game.teams[1].tid === userTid,
										actionText: (
											<>
												Watch
												<br />
												Game
											</>
										),
										actionOnClick: () =>
											toWorker("actions", "liveGame", game.gid),
										limitWidthToParent: true,
								  }
								: {};

							return (
								<div className="col-xl-4 col-md-6 col-12" key={game.gid}>
									<ScoreBox game={game} {...actionStuff} />
									<ForceWin className="mb-3" game={game} />
								</div>
							);
						})}
					</div>
				</>
			) : null}

			{completed.length > 0 ? (
				<>
					<div
						className={classNames("row", {
							"mt-3": upcomingAndCompleted,
						})}
					>
						<div className="col-xl-4 col-md-6 col-12">
							{/* Copy-pasted from ScoreBox, so all the rows below can remain aligned */}
							<div className="d-flex" style={{ maxWidth: 400 }}>
								{upcomingAndCompleted ? <h2>Completed Games</h2> : null}
								<div
									className="p-1 ml-auto text-muted"
									title="Team Overall Rating"
								>
									Ovr
								</div>
								<div
									className={classNames(
										"text-right p-1 text-muted",
										"score-box-spread",
									)}
									title="Predicted Point Spread"
								>
									Spread
								</div>
								<div
									className="score-box-score text-right text-muted p-1"
									title="Final Score"
								>
									Score
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						{completed.map(game => {
							return (
								<div className="col-xl-4 col-md-6 col-12" key={game.gid}>
									<ScoreBox game={game} className="mb-3" />
								</div>
							);
						})}
					</div>
				</>
			) : null}
		</>
	);
};

export default DailySchedule;