//Please go into .env file and copy and paste TOKEN into this line below:
export const token = '';
// API call to create meeting
export const createMeeting = async ({token}) => {
  const res = await fetch('https://api.videosdk.live/v1/meetings', {
    method: 'POST',
    headers: {
      authorization: `${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({region: 'sg001'}),
  });

  const {meetingId} = await res.json();
  return meetingId;
};
