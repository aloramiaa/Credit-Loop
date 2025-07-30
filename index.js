const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

const headers = {
  "accept": "application/json",
  "origin": "https://panel.voidhost.pro",
  "referer": "https://panel.voidhost.pro/store/resources",
  "x-requested-with": "XMLHttpRequest",
  "x-xsrf-token": "eyJpdiI6IjZjSHZ0a3U3RW1MeVRiWDJuUy93d2c9PSIsInZhbHVlIjoiemoyeks3cmpWdXJ5ZFZsbDlJZ3ZLdEM2R3hBLzRBNG03eko0L1crcG44UDB5ZjF3Tnl3NFptYjBzTU42WGVoV0tvdjNyK1JYNnBVK3hBM3hrc1lscUR6RzFRWXpQNS9TTzA2MThhdjc2ZzhNUHlxWjBZL3FjT2RzZWVhbjBXbG4iLCJtYWMiOiJjYWJkODcxYjM1OTBmZGFlMzZmNDRlNjAxZGZjYTI4Nzg4NTZlY2NlZGQwNWNhZjMyZjUxODBkYjE1ZjBmZjA1IiwidGFnIjoiIn0=",
  "cookie": "remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6InNtV0tpNjIvWWYrUk1kbGttQkFRQXc9PSIsInZhbHVlIjoiVGNCOGhnY2VUS01kZmMzQ1U4SjFsZnF6RXIxcCtKdHpVS2FiTHZUejBDMW1pM1d6dUUwZC9IZk5XQVBUZE5hbXptSWlXVXVGem1LYkFvRDBlNyt5Yk5MUno2WHlaUnYyS1VmRWowUlJvdU55VHVxZmFFcnBrcVpZMERGeEpWN2FWZVFLQldDSTRRekVHSTB6WXFSNVJ4UVJ4VmVhQy8xcnNlRXRVQVVoMDRjSldLZmRDNWdmb0RsdEsvL1MxcVFYY0FaTUUwUm9mWFNxdk5ubnA0a2NVbW1GamtQT0Y3KzN3MWNHT0tGeVgxST0iLCJtYWMiOiIwYzA0NDcwNTQ1YjYyZGU2NDA4MzFkMjQ3MWRmZjcwMThjODA2MjVlYWM4ODk3MWE3Y2FiN2I0NTBkMGZlYTk3IiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6IjZjSHZ0a3U3RW1MeVRiWDJuUy93d2c9PSIsInZhbHVlIjoiemoyeks3cmpWdXJ5ZFZsbDlJZ3ZLdEM2R3hBLzRBNG03eko0L1crcG44UDB5ZjF3Tnl3NFptYjBzTU42WGVoV0tvdjNyK1JYNnBVK3hBM3hrc1lscUR6RzFRWXpQNS9TTzA2MThhdjc2ZzhNUHlxWjBZL3FjT2RzZWVhbjBXbG4iLCJtYWMiOiJjYWJkODcxYjM1OTBmZGFlMzZmNDRlNjAxZGZjYTI4Nzg4NTZlY2NlZGQwNWNhZjMyZjUxODBkYjE1ZjBmZjA1IiwidGFnIjoiIn0%3D; jexactyl_session=eyJpdiI6IjEySE5FaWE4M0dMTDFoQXFBSjBSTWc9PSIsInZhbHVlIjoiVVBPcjluRDB1RWFJYnd6ZlBlYjdYYVRYZU9iTWpmNjBKeEQ1aHF6RmNHQzd1a3FoQTkxQnZPRFNZRUk4SUJUcUdhZndPZk55VWUvcFpGWHZST1VuNGpwZXlhNXpoZExnWTd3U1grWCtEMnZ6T2s3TnB0bXAvNzNjNXZUaDVqOVMiLCJtYWMiOiIxOGYxMjVkMjA2NDk2ZTYwOTg1OGYzNTRjOGQzZDFmMDM4ZjU1MTVhNDY5MDBkOTQ0NDFlZjA1NWNkYWQ5NzY4IiwidGFnIjoiIn0%3D",
  "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
  "sec-fetch-site": "same-origin",
  "sec-fetch-mode": "cors",
  "sec-fetch-dest": "empty",
  "accept-language": "en-GB,en;q=0.9"
};

async function sendRequest() {
  try {
    const res = await axios.post(
      "https://panel.voidhost.pro/api/client/store/earn",
      null,
      { headers }
    );
    console.log(`[${new Date().toLocaleTimeString()}] ✅ Request sent! Status: ${res.status}`);
  } catch (err) {
    console.error(`[${new Date().toLocaleTimeString()}] ❌ Error`, err?.response?.status || err.message);
  }
}

// Run every 20 seconds
setInterval(sendRequest, 20000);

// UptimeRobot endpoint
app.get('/', (req, res) => {
  res.send('✅ VoidHost Reward Loop is Alive');
});

app.listen(PORT, () => {
  console.log(`🌐 Running at http://localhost:${PORT}`);
});
