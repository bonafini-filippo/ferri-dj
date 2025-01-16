'use server';

export async function getYtVideos() {
  const API_KEY = 'AIzaSyB_Zx5QKNjMDTdq1v2SJmVxN1CYHdjRn0M';
  const CHANNEL_ID = 'UCvb-39ePh7PujNIktpJ1oMA';
  const MAX_RESULTS = 6;

  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANNEL_ID}&maxResults=${MAX_RESULTS}&order=date&type=video&key=${API_KEY}`;

  try {
    const response = await fetch(url);
    return await response.json();
  } catch (error) {
    return error;
  }
}

export async function authTw() {
  const clientId = 'q9t7mz10x1jarkkrn1l04uw3jh416i';
  const clientSecret = 'azwwys4alnsgpy2oupmymuluomxmex';
  try {
    const tokenResponse = await fetch('https://id.twitch.tv/oauth2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        grant_type: 'client_credentials',
      }),
    });
    const tokenData = await tokenResponse.json();
    return tokenData.access_token;
  } catch (error) {}
}

type TwitchStream = {
  type: string;
};

export async function isLive() {
  const username = 'gm_moro';
  const clientId = 'q9t7mz10x1jarkkrn1l04uw3jh416i';

  try {
    const accessToken = await authTw();
    // Ottieni le live
    const streamResponse = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${username}`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const streamData = await streamResponse.json();
    if (streamData && streamData.data) {
      return streamData.data.some(
        (stream: TwitchStream) => stream.type === 'live'
      );
    }
    return false;
  } catch (error) {
    return error;
  }
}

export async function getTwVideos() {
  const username = 'gm_moro';
  const clientId = 'q9t7mz10x1jarkkrn1l04uw3jh416i';

  try {
    const accessToken = await authTw();

    // Ottieni l'ID utente
    const userResponse = await fetch(
      `https://api.twitch.tv/helix/users?login=${username}`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const userData = await userResponse.json();
    const userId = userData.data[0]?.id;
    if (!userId) {
      return { error: 'Utente non trovato', statusCode: 404 };
    }
    // Ottieni i VOD
    const vodResponse = await fetch(
      `https://api.twitch.tv/helix/videos?user_id=${userId}&type=archive&sort=time&first=6`,
      {
        headers: {
          'Client-ID': clientId,
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );
    const vodData = await vodResponse.json();
    return vodData;
  } catch (error) {
    return error;
  }
}
