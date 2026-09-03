/**
 * ConvergeX 2026 — Local API Server
 * Zero external dependencies — uses Node.js built-in 'http' and 'fs' modules.
 * Listens on http://localhost:3001
 *
 * Endpoints:
 *   POST /api/register       — saves a registration
 *   GET  /api/registrations  — returns all saved registrations
 */

const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT             = 3001;
const DATA_FILE        = path.join(__dirname, 'registrations.json');
const ALLOWED_ORIGIN   = '*'; // Allow all origins for local dev

// ---------- helpers ----------------------------------------------------------

function readRegistrations() {
  try {
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function saveRegistration(entry) {
  const all = readRegistrations();
  all.push(entry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(all, null, 2), 'utf8');
  return all.length;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => (body += chunk));
    req.on('end',  () => {
      try { resolve(JSON.parse(body || '{}')); }
      catch { reject(new Error('Invalid JSON')); }
    });
    req.on('error', reject);
  });
}

function send(res, status, data) {
  const body = JSON.stringify(data);
  res.writeHead(status, {
    'Content-Type':                'application/json',
    'Access-Control-Allow-Origin': ALLOWED_ORIGIN,
    'Access-Control-Allow-Methods':'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type',
    'Content-Length':              Buffer.byteLength(body),
  });
  res.end(body);
}

// ---------- server -----------------------------------------------------------

const server = http.createServer(async (req, res) => {
  const url    = req.url.split('?')[0];
  const method = req.method.toUpperCase();

  // Pre-flight CORS
  if (method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin':  ALLOWED_ORIGIN,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    return res.end();
  }

  // POST /api/register
  if (method === 'POST' && url === '/api/register') {
    try {
      const body = await readBody(req);

      if (!body.firstName || !body.workEmail) {
        return send(res, 400, { ok: false, message: 'firstName and workEmail are required.' });
      }

      const entry = {
        ...body,
        id:          Date.now(),
        registeredAt: new Date().toISOString(),
      };

      const total = saveRegistration(entry);
      console.log(`[REGISTER] #${total} — ${entry.firstName} ${entry.lastName} <${entry.workEmail}> (${entry.company})`);
      return send(res, 200, { ok: true, message: `Welcome, ${entry.firstName}! Registration confirmed.`, total });
    } catch (err) {
      console.error('[ERROR]', err.message);
      return send(res, 500, { ok: false, message: 'Server error. Please try again.' });
    }
  }

  // GET /api/registrations
  if (method === 'GET' && url === '/api/registrations') {
    const all = readRegistrations();
    return send(res, 200, { ok: true, count: all.length, data: all });
  }

  // 404 fallback
  return send(res, 404, { ok: false, message: 'Not found.' });
});

server.listen(PORT, () => {
  console.log(`\n🚀  ConvergeX API server running at http://localhost:${PORT}`);
  console.log(`   POST /api/register       — submit a registration`);
  console.log(`   GET  /api/registrations  — view all registrations`);
  console.log(`   Data stored in: server/registrations.json\n`);
});
