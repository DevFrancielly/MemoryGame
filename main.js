import "./scr/styles/settings/colors.css";
import "./scr/styles/generic/reset.css"
import "./scr/styles/elements/base.css"

import cardGame from "./scr/components/CardGame";

const $root = document.querySelector('#root');
const $htmlCardGame = cardGame();

$root.insertAdjacentHTML("beforeend", $htmlCardGame);
