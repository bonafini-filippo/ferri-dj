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

export async function getPosition() {
  const url =
    'https://fide-api.vercel.app/player_info/?fide_id=865834&history=false';
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
}
