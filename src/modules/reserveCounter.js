export default function reservationCounter(list) {
  const counter = document.getElementById('reservation-counter');
  counter.innerHTML = `(${list.length})`;
}