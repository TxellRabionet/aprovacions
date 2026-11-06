// Configuració del projecte Supabase (aquesta clau és pública i es pot compartir)
export const SUPABASE_URL = 'https://tjooscpmatotvriplhzp.supabase.co';
export const SUPABASE_KEY = 'sb_publishable_4LB0WZskCtUFSqOkVlQUWw_f3panW9y';
export const BUCKET = 'media';
export const MAX_MB = 50;

export const mediaUrl = (path) =>
  `${SUPABASE_URL}/storage/v1/object/public/${BUCKET}/${path.split('/').map(encodeURIComponent).join('/')}`;

export const audioUrl = (path) =>
  `${SUPABASE_URL}/storage/v1/object/public/audio/${path.split('/').map(encodeURIComponent).join('/')}`;

export const esc =(s) => String(s ?? '').replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const parseDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return new Date(y, m - 1, d); };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
export const fmtDay = (iso) => cap(parseDate(iso).toLocaleDateString('ca-ES', { weekday: 'long', day: 'numeric', month: 'long' }));
export const fmtMonth = (iso) => cap(parseDate(iso).toLocaleDateString('ca-ES', { month: 'long', year: 'numeric' }));
export const fmtStamp = (ts) => new Date(ts).toLocaleString('ca-ES', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' });

export const STATUS = {
  pendent: { label: 'Pendent de revisió', cls: 'st-pendent' },
  aprovada: { label: 'Aprovada', cls: 'st-aprovada' },
  canvis: { label: 'Canvis demanats', cls: 'st-canvis' },
};
