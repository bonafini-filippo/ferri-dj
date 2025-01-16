'use server';

export async function getElo() {
  const url = `https://api.chess.com/pub/player/moro182/stats
`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
}
