const axios = require('axios');

// Account 1: Dc-lora
const config1 = {
  method: 'post',
  url: 'https://panel.voidhost.pro/api/client/store/earn',
  headers: {
    'accept': 'application/json',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-GB,en;q=0.5',
    'content-length': '0',
    'origin': 'https://panel.voidhost.pro',
    'referer': 'https://panel.voidhost.pro/store/credits',
    'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Brave";v="138"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'sec-gpc': '1',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'x-xsrf-token': 'eyJpdiI6IjR3VXFlbU0vNzgxR08wTisvTnlySmc9PSIsInZhbHVlIjoiMFN3NkF6S0c0Y2dzMjBLZUhhSjdRd29yblMycDVxcGhJRG1nU3AvTmZoR3Rtb0Q4b1g5eUkwQUY3dVlTQUhlSmJiamJDVldwazVsZ1N1WTNZU2VUSHB5YW1RaGRJejVRSmlBRVFHSmhYSXRDbEFqdndFSFlIUURMTmRYQ0RkVTgiLCJtYWMiOiJlYTQwYWQwMjY1NDliMjQzNzYwMWU2MTBiY2E5ZTFhM2VjMzJlMzBjMDAxNzgzNGJhNWUzMmZkMjA1NGRlMGQ3IiwidGFnIjoiIn0=',
    'cookie': 'remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IlROTGxOcHFYTyt3QUh5WHRRZWpTbFE9PSIsInZhbHVlIjoiNitxY29IYjlpdGxvdE1pSFVyV3FCSWtIdUxaQ0pRVzdhUHg1WjV1YVJCVjVFaEd4b3BLYjlydmFMd2U4OFdLcjd3MVlUVW5DeFlKRnhXWmV5dis3YnRxM2ZEVzVhYkFPdHFTbUxhY1Rzc0o3YkZuWWtnNGFxSTJqaUFkVXphcEtWL3hnVjJUdVpUNFNaQ3F1bFZ4VTYyTU4yNTFERldtZzl5R1FqcDlnai9PMUIwVEhzSlp1WGVPeTdUOC9zL1BPMGpSb3U1Q3l1WVQxc0xyVldhamc5c28xbVZ1MEZjK1NlODZpTnIwZkM4dz0iLCJtYWMiOiIyNGFlYjQ1NWMyMDAwYzVlN2E3MzRmNWRlMjRmZWZlZjUyYTcxMjI0MTJmYzc5ODI5MjM0OGYxOGU2OTAxNGZmIiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6IjR3VXFlbU0vNzgxR08wTisvTnlySmc9PSIsInZhbHVlIjoiMFN3NkF6S0c0Y2dzMjBLZUhhSjdRd29yblMycDVxcGhJRG1nU3AvTmZoR3Rtb0Q4b1g5eUkwQUY3dVlTQUhlSmJiamJDVldwazVsZ1N1WTNZU2VUSHB5YW1RaGRJejVRSmlBRVFHSmhYSXRDbEFqdndFSFlIUURMTmRYQ0RkVTgiLCJtYWMiOiJlYTQwYWQwMjY1NDliMjQzNzYwMWU2MTBiY2E5ZTFhM2VjMzJlMzBjMDAxNzgzNGJhNWUzMmZkMjA1NGRlMGQ3IiwidGFnIjoiIn0%3D; jexactyl_session=eyJpdiI6InJOamEyMHBTei9pdXNYVFZ4VytXRlE9PSIsInZhbHVlIjoiSHlsUWxSb2FGdEIrZENiWEVMMElBMFIzSjYrcENsZU5Oc2dFQUtpWmFYM05zd21WR1lqMUdXUzR4MUpZZkc1VXQrcjdyRlg4M25aRVN2QXpZSHRGSHo5SnQwbm80aXh2WmhpeUkvN3J4TisvUjd3S0d4aHJ0MmR2RGpUeGRXUWQiLCJtYWMiOiJjZDZhY2ZmOGRmMmMwZTczZGNmMDFiZmY3YWJkYWQ2Y2I1ZjgwMDJhOTM2ODM1ZjI4MDZjYmFiNWQ2Mzc5NzA0IiwidGFnIjoiIn0%3D'
  },
  validateStatus: () => true
};

// Account 2: xaloramia
const config2 = {
  method: 'post',
  url: 'https://panel.voidhost.pro/api/client/store/earn',
  headers: {
    'accept': 'application/json',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-GB,en;q=0.5',
    'origin': 'https://panel.voidhost.pro',
    'referer': 'https://panel.voidhost.pro/',
    'x-requested-with': 'XMLHttpRequest',
    'x-xsrf-token': 'eyJpdiI6Im9HS0tlN3FWcHhTRnd2M2VVLzNheUE9PSIsInZhbHVlIjoibDBadTQzdWZVYzJ4d204R1NPMjBORk45eUZ0S1VUcGJqTWJvbXVRNkRDeDZPTjhyZGFuQXRYd09qTGx2RnZYZXk2elkyTUw0Smp5bVBpbVhyTkxpRzVrR1lPUFdaaWtuMGVVTWVSWVMxaU5iNzZKVitTRER4dm5pbjF2WmNCOVkiLCJtYWMiOiIwMmE1NzJjOGVlMmZkNTY2MGRkNjcyOGM3MTBhY2VlYWQ1MTdjYzIyMDIwNzZkNDlkMDgyNDcxMjZhZGI5ZjMyIiwidGFnIjoiIn0=',
    'cookie': 'remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6InFHN1Bid3lPbDJOZU9NTWhrWTAvcXc9PSIsInZhbHVlIjoicDg0eU1rM1lLbE5vbFIyQURxWWtheHN6WENYNVd1dU1IenNydVBwSzQxK2owUnFQS2NBWWVoOGZWMEZZbVd2MHVxa2dMQldRUkgwdE5KYlFmN3k2ZnJpV3p5ditSUDk3ZTNSUTV3NXNocHdTZmwzU29nUWRuNFZuRll6WmEvVjVVK0Q0cVoxV1VZSUZ1L254dWJpQmc0cmorVTZYdzZ2elZVQXVwSHZUYncvU3p6T3JINzh4WFh4YnNoTElTSVhFYjUyWFBaa3JpVTJ6Y09IZnJieVp5ekdncVhDV1lhdFdtTzdWbGI4Q1dVRT0iLCJtYWMiOiIwYjQzNWY1OGIzMmNjMWNhZjgyZmUwYjA5ZTZiOTNjYTYwMTMxM2NjYTA1OTg2NWFkMmUzYWMxYWI1MjFlZWZlIiwidGFnIjoiIn0=; XSRF-TOKEN=eyJpdiI6Im9HS0tlN3FWcHhTRnd2M2VVLzNheUE9PSIsInZhbHVlIjoibDBadTQzdWZVYzJ4d204R1NPMjBORk45eUZ0S1VUcGJqTWJvbXVRNkRDeDZPTjhyZGFuQXRYd09qTGx2RnZYZXk2elkyTUw0Smp5bVBpbVhyTkxpRzVrR1lPUFdaaWtuMGVVTWVSWVMxaU5iNzZKVitTRER4dm5pbjF2WmNCOVkiLCJtYWMiOiIwMmE1NzJjOGVlMmZkNTY2MGRkNjcyOGM3MTBhY2VlYWQ1MTdjYzIyMDIwNzZkNDlkMDgyNDcxMjZhZGI5ZjMyIiwidGFnIjoiIn0=; jexactyl_session=eyJpdiI6Ik5jcWlXeVpKRHhHYUd1YjVRbzZIOGc9PSIsInZhbHVlIjoiai9JbWJVUTlJSWRVRUROK0Z1N29WK3Z3UngxUVg1WXhuQjE4VEEzc1RCemZhUEtmK1FXd1BUaFNNUHFhNTg2OWhOL3grRXo5VjRsNlppclhMZGJSUUdIeHN6blphTGszcjJPR3RnN1YxNDhkaVdTTnhyeWd5Vk45QVlZOENmTEEiLCJtYWMiOiI0MTNlYzVlMWNkZmNiNzNkMTFjNzhjMDU5MWNjMGFiMmFhNTI5MTQ0YzU4MDczOTg3ODMwODgzZTNkNjFhNjA5IiwidGFnIjoiIn0='
  },
  validateStatus: () => true
};

// Account 3: kinghtth0
const config3 = {
  method: 'post',
  url: 'https://panel.voidhost.pro/api/client/store/earn',
  headers: {
    'accept': 'application/json',
    'accept-encoding': 'gzip, deflate, br, zstd',
    'accept-language': 'en-GB,en;q=0.6',
    'content-length': '0',
    'content-type': 'application/json',
    'origin': 'https://panel.voidhost.pro',
    'referer': 'https://panel.voidhost.pro/store/credits',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
    'x-xsrf-token': 'eyJpdiI6IkdmU3lDMnhLNTFVT3FLQ25ESmQ0UVE9PSIsInZhbHVlIjoiUFhKRUJrY293TlJVYjExbStWN0JrVFlTTHJZUnpDUkRIaGMydVVQRjZoR210YXdpNy9hemJjd240RnpaQmE1bmVCR1VIcVJSUWlvQUE4andoSHRuMnhSeXMyMUZGQXU2V3dxdXZwVHZuTEtOOC94QmxaM1pqMmZLZFdlZTBsMXEiLCJtYWMiOiI1NmVhZWY0M2ZkMzEzM2MwZTRhMjlmOTQwZjg5NTBiYzk4Njg5NDNmNzQ2ZDAwNTE0NGM4OTg5NzVlYjU5ZWM1IiwidGFnIjoiIn0=',
    'cookie': 'remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6IjMwbjROZTRJeXJ2c1VSTXFkZUpiL3c9PSIsInZhbHVlIjoiMjAvbUtqNndtdHRxZ3cvWkZEemhkR2NCUWl4OGRJNk9HaWsyVU9TMkk2Y3FhRDErUndGS2dINXdPeEpKalFkdmU1cjV3VDF6TXJlYi9ISHhFMVdCY1NEYTMwRVg0VXVhZVBGc0dCV1krb3JuL016SVFvcXBSV3N2OERHRElIcTVpT2ZST0Z4TmF0Z1VkRStTM2NNU1pueVRLNEl5UUdQZWNNbE13d0IweUN1bzZZSmlDYVplRituT1BkRWw2SGcwNkN0VDl2d2hXSWpNc01jVDlWMjNzOGpuUldGZ3hsYlIxNjJTZ3E1dGt2UT0iLCJtYWMiOiJkMWViNzA5Y2FhODdiZDMxZDhhNDkxZTljNDc3MzkyM2MwNGI4YWNlMTBmODY5MWQ5NTBiZDViNTQ5YTBmNDU4IiwidGFnIjoiIn0%3D; XSRF-TOKEN=...; jexactyl_session=...'
  },
  validateStatus: () => true
};

async function checkStatus(name, config) {
  try {
    const res = await axios(config);
    if (res.status === 419) {
      console.log(`${name}: ❌ 419 (Authentication Timeout)`);
    } else if (res.status === 204) {
      console.log(`${name}: ✅ 204 (No Content)`);
    } else {
      console.log(`${name}: ⚠️ ${res.status} (${res.statusText})`);
    }
  } catch (err) {
    console.error(`${name}: Request failed`, err.message);
  }
}

(async () => {
  await checkStatus('Dc-lora', config1);
  await checkStatus('xaloramia', config2);
  await checkStatus('kinghtth0', config3);
})(); 