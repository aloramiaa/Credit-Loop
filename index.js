const express = require('express');
const { exec } = require('child_process');

const app = express();
const PORT = process.env.PORT || 3000;

// Account 1: Dc-lora
const curl1 = `curl -s -o /dev/null -w "%{http_code}" -X POST "https://panel.voidhost.pro/api/client/store/earn" \
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
const curl2 = `curl -s -o /dev/null -w "%{http_code}" -X POST "https://panel.voidhost.pro/api/client/store/earn" \
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
  -H 'cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6InFHN1Bid3lPbDJOZU9NTWhrWTAvcXc9PSIsInZhbHVlIjoicDg0eU1rM1lLbE5vbFIyQURxWWtheHN6WENYNVd1dU1IenNydVBwSzQxK2owUnFQS2NBWWVoOGZWMEZZbVd2MHVxa2dMQldRUkgwdE5KYlFmN3k2ZnJpV3p5ditSUDk3ZTNSUTV3NXNocHdTZmwzU29nUWRuNFZuRll6WmEvVjVVK0Q0cVoxV1VZSUZ1L254dWJpQmc0cmorVTZYdzZ2elZVQXVwSHZUYncvU3p6T3JINzh4WFh4YnNoTElTSVhFYjUyWFBaa3JpVTJ6Y09IZnJieVp5ekdncVhDV1lhdFdtTzdWbGI4Q1dVRT0iLCJtYWMiOiIwYjQzNWY1OGIzMmNjMWNhZjgyZmUwYjA5ZTZiOTNjYTYwMTMxM2NjYTA1OTg2NWFkMmUzYWMxYWI1MjFlZWZlIiwidGFnIjoiIn0=; XSRF-TOKEN=eyJpdiI6Im9HS0tlN3FWcHhTRnd2M2VVLzNheUE9PSIsInZhbHVlIjoibDBadTQzdWZVYzJ4d204R1NPMjBORk45eUZ0S1VUcGJqTWJvbXVRNkRDeDZPTjhyZGFuQXRYd09qTGx2RnZYZXk2elkyTUw0Smp5bVBpbVhyTkxpRzVrR1lPUFdaaWtuMGVVTWVSWVMxaU5iNzZKVitTRER4dm5pbjF2WmNCOVkiLCJtYWMiOiIwMmE1NzJjOGVlMmZkNTY2MGRkNjcyOGM3MTBhY2VlYWQ1MTdjYzIyMDIwNzZkNDlkMDgyNDcxMjZhZGI5ZjMyIiwidGFnIjoiIn0=; jexactyl_session=eyJpdiI6Ik5jcWlXeVpKRHhHYUd1YjVRbzZIOGc9PSIsInZhbHVlIjoiai9JbWJVUTlJSWRVRUROK0Z1N29WK3Z3UngxUVg1WXhuQjE4VEEzc1RCemZhUEtmK1FXd1BUaFNNUHFhNTg2OWhOL3grRXo5VjRsNlppclhMZGJSUUdIeHN6blphTGszcjJPR3RnN1YxNDhkaVdTTnhyeWd5Vk45QVlZOENmTEEiLCJtYWMiOiI0MTNlYzVlMWNkZmNiNzNkMTFjNzhjMDU5MWNjMGFiMmFhNTI5MTQ0YzU4MDczOTg3ODMwODgzZTNkNjFhNjA5IiwidGFnIjoiIn0%3D' \
  --compressed`;

// Account 3: kinghtth0
const curl3 = `curl -s -o /dev/null -w "%{http_code}" -X POST "https://panel.voidhost.pro/api/client/store/earn" \
  -H 'Accept: application/json' \
  -H 'Accept-Encoding: gzip, deflate, br, zstd' \
  -H 'Accept-Language: en-GB,en;q=0.6' \
  -H 'Content-Length: 0' \
  -H 'Content-Type: application/json' \
  -H 'Origin: https://panel.voidhost.pro' \
  -H 'Referer: https://panel.voidhost.pro/store/credits' \
  -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36' \
  -H 'X-Requested-With: XMLHttpRequest' \
  -H 'X-XSRF-TOKEN: eyJpdiI6InVpekxLK3NEeXd3SEpTb21IRTlueUE9PSIsInZhbHVlIjoieGJQR21CaFUwc3J4QWJ3Y0RmYklCSm5CT25NY1RiUVo1ZkQ4TEZ3MTZ4dFM4cjFvOTJnWno1WjRFdXBGcWxNQ3hENzcvazM4QXZ4TDk2V1d3ci8rcnVFaVkwVlFQRzd2amFYb28xQXM0d01TbHhNajFkbmJscmZ2U005YzRjeWYiLCJtYWMiOiJlZGE3YjYwMTkwODMwYWQyNmY5NmY1NmNmMDE0N2RlMTMwNjNhMzI4ZmYzMmM1NTIwMzI3YjM2YTNkMWU4ZjFjIiwidGFnIjoiIn0=' \
  -H 'Cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6ImJVK1VMV0VCc09UNEV6MnVxcnhQbWc9PSIsInZhbHVlIjoiSHUxQXU5alNPc2RJUXJ4LzB1M0ZMaC9hMXliUkZvWnhmSmlZM0ZSVDVoTmNTSys1b1VGbEpabWUwdHdkQTFURVFXcUNaSW9iTGJVUCs2Q3J0cU8wUm5HUjlKZ0hFeHhQV2RmMmdNQ0cwZlB0bzdMZFRvUjNZam5JcHNRSXdoWEIxRkxkKy9qVFRWVVROYkZ4UEhLOHIxMUI2SlBNUDRWR0Fvck0yTk9kblE4UFN6dCtuY2dDMENFSC9pK3VYeU13R2ZUelhrdHVvSER3NktKanVhTlpiQWZJRGhXc2l4cUIvYnkrQkRJaXljTT0iLCJtYWMiOiJkNzZkYTVjZTA2MWI0NzViZjUzZmJjYmY4OGMwZDVhMDVmNTQwM2Y4YTlkNzZiMWNhZTFlYjEyYzk3MjA5ZTk5IiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6IkFQS1hYalgrQ1k5Yi8rWnpVaERyS2c9PSIsInZhbHVlIjoiSlJqY0RGeEVnS0Z2Z2xqV1RjamNOTDhEZVUrb0JHRlFWa0FIYU03WTFuWDk3eTM4ZkU5QkZydHFyc0VBaWRIL3dteC9XRWladVl1bG04dk5EaVBFeXNsSVIxUHpxOXVSekFwM0ZmRHJEL1pBaVRmSU1hMkRyWTVCdnhCalhBUzEiLCJtYWMiOiIwMDE5ZjdmMWY1NDkwM2VhZmUxMzEyMWRhYWM0ZDFhOTg1YzkzNzE0N2I1MjMxMWVhYjIxZjZhOGNiNjY5OWJjIiwidGFnIjoiIn0%3D; jexactyl_session=eyJpdiI6IlRxbmtKeitNOFFCYnZDWUtiOVdiN0E9PSIsInZhbHVlIjoiWDdYWUhVTVVJTWk3Rkd4UkQxWndQQi9nTktGSnB3emtZa01tSHl0VitMNXBxQ2R2Y1VTMVZydFlwNE5GMHcyZmhobVNYU2JpM0ZJRnZxRnlXSzhMcWFuYVdEREVEdW1RN1pUNXp2WDU5dEQ0M2hqeC9hSHNISS95QkVoMVlKelgiLCJtYWMiOiIxNzhkZmRmMWIzYmZkMjdiMTE4M2Q1YjBkYzc5NGIyYzJmMzUzN2I3YmQzYTkzNjg3N2Q4YWYwNjhkMmFlNWMwIiwidGFnIjoiIn0%3D' \
  --compressed`;

// Account 4: Nyanpasu
const curl4 = `curl -s -o /dev/null -w "%{http_code}" -X POST "https://panel.voidhost.pro/api/client/store/earn" \
  -H 'accept: application/json' \
  -H 'accept-encoding: gzip, deflate, br, zstd' \
  -H 'accept-language: en-GB,en;q=0.7' \
  -H 'content-length: 0' \
  -H 'cookie: remember_web_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6ImJxZXZSN0RWQStuRVBDSVVOVXpsbHc9PSIsInZhbHVlIjoiUkg2OVlkN0k1NS9kZm9XUUFyYjlLTTJwV0ppMkpWcGNvY3FlbVNMN0lIaTZBZFNLdVZKNWw1UUdQbC8wK25XVm1wSG9ydjhidEVPcWFlZzBwcmJlZ2hLY2dVV3FXV3ZGMGltTFVZcUwzOVJ1WGJNcGU0b3NKQ0NNemhiYmhFY21xSkNRWmdzRlZKMXhSNnd5S21YanZPNEV6RWI0aHhFSy9ocVh5Mk9zUU1ZcVhzY3NkSnk0NVozeHNUSHFyZzJXWnhwWm94MHMzUmR1WCs0OTVJYjJ0VmFpZHVWMGVqWXdsdVJndDZJREpKaz0iLCJtYWMiOiIyZWNkZTUzOGM1YjY0ZTJmYzkxYmQ1YjIxMTg5ZDU1MGM0ZDRjYWY1YmVjNWE3NWY0ZjEzMmNhNGU1MjZhMjcyIiwidGFnIjoiIn0%3D; XSRF-TOKEN=eyJpdiI6ImRlN3UyMHU4S3lESVY0V3JJVVROd0E9PSIsInZhbHVlIjoiVkVkaUZoZ2Nxa00vL2t4K3ViWk8rbjB3cU5kcGdFRkpyeGpHelBWNlVPNG9RU2w5bHRiQUhBZE4rSEZpVU9tSWk1c1ZKWmdoNHVRZ08rWDcyTkRKeFJEdUJqU2hrVUJsRnUyV2lOK3hvTW9IMXlUcUMwWUczYmUxMGw1VWRVajciLCJtYWMiOiJjYzYzNTU1YmY5ZWM2NGYwZmZkODBhMGIxOGY1ZTg3Y2NmOTBjZTA0MzQ4NmU5MzZiMTRjYTIyNDY2NGVmMTM0IiwidGFnIjoiIn0%3D; jexactyl_session=eyJpdiI6InR0V2VKMGwxYnBzem5TR3FOYlluWFE9PSIsInZhbHVlIjoiSFA5a01BM2lmQ2NpZVJlWE9EL0Z5MU5XZ05MYUk4Zk5UZmlGemZDZWlVaStqRzRNbkZCMFk4d21MZ1g0Ym5Hd2xUanVQaXRPY091dWRLSjg3T1FpaWpyclM4T1E3b25kTm9zOFg5Z1ZsZzU0UU84ZE9MN2p5cXVwQVgwSlBZTUUiLCJtYWMiOiJiOTI5YjExNTdmNTBkNjI1OTI3Mzg2OTcxNGE4MjM3Zjg1ZTY3ZjZiYzExYjYyNjRjMjViM2U0OGQ1MzQxMDUyIiwidGFnIjoiIn0%3D' \
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
  -H 'x-xsrf-token: eyJpdiI6ImRlN3UyMHU4S3lESVY0V3JJVVROd0E9PSIsInZhbHVlIjoiVkVkaUZoZ2Nxa00vL2t4K3ViWk8rbjB3cU5kcGdFRkpyeGpHelBWNlVPNG9RU2w5bHRiQUhBZE4rSEZpVU9tSWk1c1ZKWmdoNHVRZ08rWDcyTkRKeFJEdUJqU2hrVUJsRnUyV2lOK3hvTW9IMXlUcUMwWUczYmUxMGw1VWRVajciLCJtYWMiOiJjYzYzNTU1YmY5ZWM2NGYwZmZkODBhMGIxOGY1ZTg3Y2NmOTBjZTA0MzQ4NmU5MzZiMTRjYTIyNDY2NGVmMTM0IiwidGFnIjoiIn0=' \
  --compressed`;

function runCurl(name, cmd) {
  exec(cmd, (error, stdout, stderr) => {
    const now = new Date().toLocaleTimeString();
    const status = stdout.trim();
    if (status === '419') {
      console.log(`[${now}] ${name}: 419 (FAILED)`);
    } else if (status === '204') {
      console.log(`[${now}] ${name}: 204 (SUCCESS)`);
    } else {
      console.log(`[${now}] ${name}: ${status}`);
    }
  });
}

function runAll() {
  runCurl("Dc-lora", curl1);
  runCurl("xaloramia", curl2);
  runCurl("kinghtth0", curl3);
  runCurl("Nyanpasu", curl4);
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
