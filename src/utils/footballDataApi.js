function formatLabel(value) {
  if (!value) {
    return "";
  }

  return value
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const BASE_URL = "/football-data/v4";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(new Error(`Error: ${res.status}`));
  }

  return res.json();
}

let pendingRequest = null;

export function getChampionsLeagueMatches() {
  if (pendingRequest) {
    return pendingRequest;
  }

  const token = import.meta.env.VITE_FOOTBALL_DATA_TOKEN?.trim();

  pendingRequest = fetch(`${BASE_URL}/competitions/CL/matches`, {
    headers: {
      "X-Auth-Token": token,
    },
  })
    .then(checkResponse)
    .finally(() => {
      pendingRequest = null;
    });

  return pendingRequest;
}

export function normalizeMatch(match) {
  const homeScore = match.score?.fullTime?.home;
  const awayScore = match.score?.fullTime?.away;
  const hasScore = homeScore !== null && homeScore !== undefined;

  return {
    id: match.id,
    homeTeam: match.homeTeam?.name || "",
    awayTeam: match.awayTeam?.name || "",
    homeCrest: match.homeTeam?.crest || "",
    awayCrest: match.awayTeam?.crest || "",
    score: hasScore ? `${homeScore} - ${awayScore}` : "- - -",
    status: formatLabel(match.status),
    date: match.utcDate ? match.utcDate.slice(0, 10) : "",
    stage: formatLabel(match.stage),
  };
}
