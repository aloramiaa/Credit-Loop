const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Account 1: Dc-lora
const curl1 = `curl -X POST "https://panel.voidhost.pro/api/client/store/earn" \
  -H 'accept: application/json' \
  -H 'accept-encoding: gzip, deflate, br, zstd' \
  -H 'accept-language: en-GB,en;q=0.5' \
  -H 'content-length: 0' \
  -H 'origin: https://panel.voidhost.pro' \
  -H 'referer: https://panel.voidhost.pro/store/credits' \
  -H 'sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36' \
  -H 'x-requested-with: XMLHttpRequest' \
  -H 'x-xsrf-token: eyJpdiI6IjR3VXFlbU0vNzgxR08wTisvTnlySmc9PSIsInZhbHVlIjoiMFN3NkF6S0c0Y2dzMjBLZUhhSjdRd29yblMycDVxcGhJRG1nU3AvTmZoR3Rtb0Q4b1g5eUkwQUY3dVlTQUhlSmJiamJDVldwazVsZ1N1WTNZU2VUSHB5YW1RaGRJejVRSmlBRVFHSmhYSXRDbEFqdndFSFlIUURMTmRYQ0RkVTgiLCJtYWMiOiJlYTQwYWQwMjY1NDliMjQzNzYwMWU2MTBiY2E5ZTFhM2VjMzJlMzBjMDAxNzgzNGJhNWUzMmZkMjA1NGRlMGQ3IiwidGFnIjoiIn0=' \
  -H 'cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IlROTGxOcHFYTyt3QUh5WHRRZWpTbFE9PSIsInZhbHVlIjoiNitxY29IYjlpdGxvdE1pSFVyV3FCSWtIdUxaQ0pRVzdhUHg1WjV1YVJCVjVFaEd4b3BLYjlydmFMd2U4OFdLcjd3MVlUVW5DeFlKRnhXWmV5dis3YnRxM2ZEVzVhYkFPdHFTbUxhY1Rzc0o3YkZuWWtnNGFxSTJqaUFkVXphcEtWL3hnVjJUdVpUNFNaQ3F1bFZ4VTYyTU4yNTFERldtZzl5R1FqcDlnai9PMUIwVEhzSlp1WGVPeTdUOC9zL1BPMGpSb3U1Q3l1WVQxc0xyVldhamc5c28xbVZ1MEZjK1NlODZpTnIwZkM4dz0iLCJtYWMiOiIyNGFlYjQ1NWMyMDAwYzVlN2E3MzRmNWRlMjRmZWZlZjUyYTcxMjI0MTJmYzc5ODI5MjM0OGYxOGU2OTAxNGZmIiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6IjR3VXFlbU0vNzgxR08wTisvTnlySmc9PSIsInZhbHVlIjoiMFN3NkF6S0c0Y2dzMjBLZUhhSjdRd29yblMycDVxcGhJRG1nU3AvTmZoR3Rtb0Q4b1g5eUkwQUY3dVlTQUhlSmJiamJDVldwazVsZ1N1WTNZU2VUSHB5YW1RaGRJejVRSmlBRVFHSmhYSXRDbEFqdndFSFlIUURMTmRYQ0RkVTgiLCJtYWMiOiJlYTQwYWQwMjY1NDliMjQzNzYwMWU2MTBiY2E5ZTFhM2VjMzJlMzBjMDAxNzgzNGJhNWUzMmZkMjA1NGRlMGQ3IiwidGFnIjoiIn0%3D; jexactyl_session=eyJpdiI6InJOamEyMHBTei9pdXNYVFZ4VytXRlE9PSIsInZhbHVlIjoiSHlsUWxSb2FGdEIrZENiWEVMMElBMFIzSjYrcENsZU5Oc2dFQUtpWmFYM05zd21WR1lqMUdXUzR4MUpZZkc1VXQrcjdyRlg4M25aRVN2QXpZSHRGSHo5SnQwbm80aXh2WmhpeUkvN3J4TisvUjd3S0d4aHJ0MmR2RGpUeGRXUWQiLCJtYWMiOiJjZDZhY2ZmOGRmMmMwZTczZGNmMDFiZmY3YWJkYWQ2Y2I1ZjgwMDJhOTM2ODM1ZjI4MDZjYmFiNWQ2Mzc5NzA0IiwidGFnIjoiIn0%3D' \
  --compressed`;

// Account 2: xaloramia
const curl2 = `curl -X POST "https://panel.voidhost.pro/api/client/store/earn" \
  -H 'accept: application/json' \
  -H 'accept-encoding: gzip, deflate, br, zstd' \
  -H 'accept-language: en-GB,en;q=0.5' \
  -H 'origin: https://panel.voidhost.pro' \
  -H 'referer: https://panel.voidhost.pro/' \
  -H 'x-requested-with: XMLHttpRequest' \
  -H 'x-xsrf-token: eyJpdiI6Im9HS0tlN3FWcHhTRnd2M2VVLzNheUE9PSIsInZhbHVlIjoibDBadTQzdWZVYzJ4d204R1NPMjBORk45eUZ0S1VUcGJqTWJvbXVRNkRDeDZPTjhyZGFuQXRYd09qTGx2RnZYZXk2elkyTUw0Smp5bVBpbVhyTkxpRzVrR1lPUFdaaWtuMGVVTWVSWVMxaU5iNzZKVitTRER4dm5pbjF2WmNCOVkiLCJtYWMiOiIwMmE1NzJjOGVlMmZkNTY2MGRkNjcyOGM3MTBhY2VlYWQ1MTdjYzIyMDIwNzZkNDlkMDgyNDcxMjZhZGI5ZjMyIiwidGFnIjoiIn0=' \
  -H 'content-length: 0' \
  -H 'sec-ch-ua: "Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"' \
  -H 'sec-ch-ua-mobile: ?0' \
  -H 'sec-ch-ua-platform: "Windows"' \
  -H 'sec-fetch-dest: empty' \
  -H 'sec-fetch-mode: cors' \
  -H 'sec-fetch-site: same-origin' \
  -H 'sec-gpc: 1' \
  -H 'user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36' \
  -H 'cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6InFHN1Bid3lPbDJOZU9NTWhrWTAvcXc9PSIsInZhbHVlIjoicDg0eU1rM1lLbE5vbFIyQURxWWtheHN6WENYNVd1dU1IenNydVBwSzQxK2owUnFQS2NBWWVoOGZWMEZZbVd2MHVxa2dMQldRUkgwdE5KYlFmN3k2ZnJpV3p5ditSUDk3ZTNSUTV3NXNocHdTZmwzU29nUWRuNFZuRll6WmEvVjVVK0Q0cVoxV1VZSUZ1L254dWJpQmc0cmorVTZYdzZ2elZVQXVwSHZUYncvU3p6T3JINzh4WFh4YnNoTElTSVhFYjUyWFBaa3JpVTJ6Y09IZnJieVp5ekdncVhDV1lhdFdtTzdWbGI4Q1dVRT0iLCJtYWMiOiIwYjQzNWY1OGIzMmNjMWNhZjgyZmUwYjA5ZTZiOTNjYTYwMTMxM2NjYTA1OTg2NWFkMmUzYWMxYWI1MjFlZWZlIiwidGFnIjoiIn0=; XSRF-TOKEN=eyJpdiI6Im9HS0tlN3FWcHhTRnd2M2VVLzNheUE9PSIsInZhbHVlIjoibDBadTQzdWZVYzJ4d204R1NPMjBORk45eUZ0S1VUcGJqTWJvbXVRNkRDeDZPTjhyZGFuQXRYd09qTGx2RnZYZXk2elkyTUw0Smp5bVBpbVhyTkxpRzVrR1lPUFdaaWtuMGVVTWVSWVMxaU5iNzZKVitTRER4dm5pbjF2WmNCOVkiLCJtYWMiOiIwMmE1NzJjOGVlMmZkNTY2MGRkNjcyOGM3MTBhY2VlYWQ1MTdjYzIyMDIwNzZkNDlkMDgyNDcxMjZhZGI5ZjMyIiwidGFnIjoiIn0=; jexactyl_session=eyJpdiI6Ik5jcWlXeVpKRHhHYUd1YjVRbzZIOGc9PSIsInZhbHVlIjoiai9JbWJVUTlJSWRVRUROK0Z1N29WK3Z3UngxUVg1WXhuQjE4VEEzc1RCemZhUEtmK1FXd1BUaFNNUHFhNTg2OWhOL3grRXo5VjRsNlppclhMZGJSUUdIeHN6blphTGszcjJPR3RnN1YxNDhkaVdTTnhyeWd5Vk45QVlZOENmTEEiLCJtYWMiOiI0MTNlYzVlMWNkZmNiNzNkMTFjNzhjMDU5MWNjMGFiMmFhNTI5MTQ0YzU4MDczOTg3ODMwODgzZTNkNjFhNjA5IiwidGFnIjoiIn0=" \
  --compressed`;

// Account 3: kinghtth0
const curl3 = `curl -X POST "https://panel.voidhost.pro/api/client/store/earn" \
  -H 'Accept: application/json' \
  -H 'Accept-Encoding: gzip, deflate, br, zstd' \
  -H 'Accept-Language: en-GB,en;q=0.6' \
  -H 'Content-Length: 0' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://panel.voidhost.pro' \
  -H 'Referer: https://panel.voidhost.pro/store/credits' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'X-XSRF-TOKEN: eyJpdiI6IkdmU3lDMnhLNTFVT3FLQ25ESmQ0UVE9PSIsInZhbHVlIjoiUFhKRUJrY293TlJVYjExbStWN0JrVFlTTHJZUnpDUkRIaGMydVVQRjZoR210YXdpNy9hemJjd240RnpaQmE1bmVCR1VIcVJSUWlvQUE4andoSHRuMnhSeXMyMUZGQXU2V3dxdXZwVHZuTEtOOC94QmxaM1pqMmZLZFdlZTBsMXEiLCJtYWMiOiI1NmVhZWY0M2ZkMzEzM2MwZTRhMjlmOTQwZjg5NTBiYzk4Njg5NDNmNzQ2ZDAwNTE0NGM4OTg5NzVlYjU5ZWM1IiwidGFnIjoiIn0=" \
  -H 'Cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IjMwbjROZTRJeXJ2c1VSTXFkZUpiL3c9PSIsInZhbHVlIjoiMjAvbUtqNndtdHRxZ3cvWkZEemhkR2NCUWl4OGRJNk9HaWsyVU9TMkk2Y3FhRDErUndGS2dINXdPeEpKalFkdmU1cjV3VDF6TXJlYi9ISHhFMVdCY1NEYTMwRVg0VXVhZVBGc0dCV1krb3JuL016SVFvcXBSV3N2OERHRElIcTVpT2ZST0Z4TmF0Z1VkRStTM2NNU1pueVRLNEl5UUdQZWNNbE13d0IweUN1bzZZSmlDYVplRituT1BkRWw2SGcwNkN0VDl2d2hXSWpNc01jVDlWMjNzOGpuUldGZ3hsYlIxNjJTZ3E1dGt2UT0iLCJtYWMiOiJkMWViNzA5Y2FhODdiZDMxZDhhNDkxZTljNDc3MzkyM2MwNGI4YWNlMTBmODY5MWQ5NTBiZDViNTQ5YTBmNDU4IiwidGFnIjoiIn0%3D; XSRF-TOKEN=...; jexactyl_session=..." \
  --compressed`;

function runCurl(name, cmd) {
  exec(cmd, (error, stdout, stderr) => {
    const now = new Date().toLocaleTimeString();
    // Check for error or 419 status code in output
    const output = (stdout + stderr).toString();
    if (error || output.includes('419')) {
      let reason = stderr.trim() || error?.message || '';
      if (output.includes('419')) {
        reason = (reason ? reason + ' ' : '') + '[HTTP 419]';
      }
      console.error(`[${now}] ❌ ${name} FAILED:`, reason.trim());
    } else {
      console.log(`[${now}] ✅ ${name} request succeeded.`);
    }
  });
}

function runAll() {
  runCurl("Dc-lora", curl1);
  runCurl("xaloramia", curl2);
  runCurl("kinghtth0", curl3);
}

// Run every 61 seconds
setInterval(runAll, 61000);

// Uptime endpoint
app.get('/', (req, res) => {
  res.send('✅ Reward loop for all accounts is alive');
});

app.listen(PORT, () => {
  console.log(`🌐 Reward loop running at http://localhost:${PORT}`);
  runAll(); // initial run
});
