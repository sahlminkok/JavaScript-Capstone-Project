const getReservations = async (id) => {
  const reservationUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/reservations?item_id=${id}`;
  try {
    const reservationsResponse = await fetch(reservationUrl);
    return await reservationsResponse.json();
  } catch (e) {
    return [];
  }
};

const submitReservation = async (id, name, dateStart, dateEnd) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/CPii9JproaMtnGMvqcdi/reservations/',
    {
      method: 'POST',
      body: JSON.stringify({
        item_id: id,
        username: name,
        date_start: dateStart,
        date_end: dateEnd,
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
};

export {
  getReservations,
  submitReservation,
};